import React, {useEffect} from "react";
import styled from 'styled-components';
import {renderToStaticMarkup} from "react-dom/server"
import {useLeafletContext} from '@react-leaflet/core'
import L from 'leaflet'
import {TileLayer} from 'react-leaflet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import merge from './GalleryMerger'

import type {GalleryInfo} from '../types';

import PinImage from './pin.png';

type Props = {
    zoom: number,
    galleryData: Array<GalleryInfo>
}

const Div = styled.div`
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
    const mergedGallery = merge(props.galleryData, props.zoom);
    console.log('mergedGallery', mergedGallery);
    var icon = L.divIcon({
            className: 'pin-marker-class',
            html: renderToStaticMarkup(<Div>50</Div>),
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });

    const container = context.map
    var markers = new L.LayerGroup().addTo(container);

    mergedGallery.forEach((gallery) => {
        var marker = L.marker([gallery.coordinates[0], gallery.coordinates[1]], { icon: icon })
                .on('click', () => console.log('dupa')).on('mouseover', () => console.log('kiupa'));
            marker.addTo(markers);
        });


    return () => {
        markers.remove();
    }
  })

    return (
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    );
};

export default GalleryMapLayer;