import React, {useEffect} from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import styled from 'styled-components';
import './GalleryMapLayer.css';
import {renderToStaticMarkup} from "react-dom/server"
import {useLeafletContext} from '@react-leaflet/core'
import L from 'leaflet'
import {TileLayer} from 'react-leaflet'
import mergeGalleries from './GalleryMerger'
import GalleryPopup from './GalleryPopup'
import {THUMBNAIL_WIDTH} from './GalleryConfig'

import type {GalleryInfo, GalleryBucketInfo} from '../types';

import PinImage from './pin.png';

type Props = {
    zoom: number,
    galleryData: Array<GalleryInfo>
}

const PinIcon = styled.div`
    width: 32px;
    height: 29px;
    text-align: center;
    padding-top: 3px;
    font-weight: bold;
    background-image: url(${PinImage});
    filter: drop-shadow(1px 1px 1px gray);
`;

const GalleryMapLayer = (props: Props) => {
  const context = useLeafletContext()

  useEffect(() => {
    const mergedGalleryBucket = mergeGalleries(props.galleryData, props.zoom);

    const container = context.map
    var markers = new L.LayerGroup().addTo(container);

    mergedGalleryBucket.forEach((galleryBucket) => {
        var icon = createPinIcon(galleryBucket);
        var popupWidth = getPopupWidth(galleryBucket);
        var popup = L.popup({closeButton: false, minWidth: popupWidth})
            .setContent(() => {
                const div = document.createElement("div");
                const root = createRoot(div);
                flushSync(() => {
                   root.render(<GalleryPopup galleryBucket={galleryBucket} />);
                });
                return div;
            });

        var marker = L.marker([galleryBucket.coordinates[0], galleryBucket.coordinates[1]], { icon: icon })
                .on('click', () => console.log('click'))
                .on('mouseover', () => console.log('mouseOver'))
                .bindPopup(popup);
        marker.addTo(markers);
    });

    return () => {
        markers.remove();
    }

    function createPinIcon(galleryBucket: GalleryBucketInfo) {
        return L.divIcon({
           className: 'pin-marker-class',
           html: renderToStaticMarkup(<PinIcon>{galleryBucket.galleries.length}</PinIcon>),
           iconSize: [32, 32],
           iconAnchor: [16, 32],
           popupAnchor: [0, -30]
       });
    }

    function getPopupWidth(galleryBucket: GalleryBucketInfo) {
        var lengths = galleryBucket.galleries.map((g) => g.thumbnailUrls.length);
        const maxNumOfImg = Math.max(1, Math.max(...lengths));
        // 19 is the 2*10px padding on both sides, it's decreased by 1 to not display scrollbar
        // 5 is the margin between images (-5 is for the last image, we don't need margin there)
        return Math.min(maxNumOfImg * (THUMBNAIL_WIDTH+5)-5+19, 250);
    }
  })

    return (
        <TileLayer data-tip data-for="countryTooltip"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    );
};

export default GalleryMapLayer;