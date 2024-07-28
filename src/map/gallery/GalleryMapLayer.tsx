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
`;

const GalleryMapLayer = (props: Props) => {
  const context = useLeafletContext()

  useEffect(() => {
    const mergedGalleryBucket = mergeGalleries(props.galleryData, props.zoom);


    const container = context.map
    var markers = new L.LayerGroup().addTo(container);

    mergedGalleryBucket.forEach((galleryBucket) => {
        var icon = createPinIcon(galleryBucket);
        var marker = L.marker([galleryBucket.coordinates[0], galleryBucket.coordinates[1]], { icon: icon })
                .on('click', () => console.log('click')).on('mouseover', () => console.log('mouseOver'))
                .bindPopup(() => {
                    const div = document.createElement("div");
                    const root = createRoot(div);
                    flushSync(() => {
                       root.render(<GalleryPopup galleryBucket={galleryBucket}/>);
                    });
                    return div;
                }, {closeButton: false});
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
  })

    return (
        <TileLayer data-tip data-for="countryTooltip"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    );
};

export default GalleryMapLayer;