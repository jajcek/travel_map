import React, {useEffect} from "react";
import styled from 'styled-components';
import {renderToStaticMarkup} from "react-dom/server"
import {useLeafletContext} from '@react-leaflet/core'
import L from 'leaflet'
import {TileLayer} from 'react-leaflet'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'

import PinImage from './pin.png';

const Div = styled.div`
    width: 32px;
    height: 29px;
    text-align: center;
    padding-top: 3px;
    font-weight: bold;
    background-image: url(${PinImage});
`;

const GalleryMapLayer = () => {
  const context = useLeafletContext()

  useEffect(() => {
    var icon = L.divIcon({
            className: 'custom-class-name',
            html: renderToStaticMarkup(<Div>5</Div>),
            iconSize: [32, 32],
            iconAnchor: [16, 32]
        });

    const container = context.map

    var marker = L.marker([32.7589, -16.9430], { icon: icon });

    marker.addTo(container);

    return () => {
      marker.remove();
    }
  })

    return (
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    );
};

export default GalleryMapLayer;