import React, {useEffect} from "react";
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";
import './GalleryMapLayer.css';
import {renderToStaticMarkup} from "react-dom/server"
import {useLeafletContext} from '@react-leaflet/core'
import L from 'leaflet'
import {TileLayer} from 'react-leaflet'
import mergeGalleries from './GalleryMerger'
import loadThumbnail from './ThumbnailsLoader'

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
    const mergedGallery = mergeGalleries(props.galleryData, props.zoom);
    console.log('mergedGallery', mergedGallery);
    var icon = L.divIcon({
            className: 'pin-marker-class',
            html: renderToStaticMarkup(<Div>50</Div>),
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -30]
        });

    const container = context.map
    var markers = new L.LayerGroup().addTo(container);
    const el = document.createElement('div');
    el.innerHTML = 'asdsa';

    mergedGallery.forEach((gallery) => {
        var marker = L.marker([gallery.coordinates[0], gallery.coordinates[1]], { icon: icon })
                .on('click', () => console.log('dupa')).on('mouseover', () => console.log('kiupa'))
                .bindPopup(() => {
                        const el = document.createElement('img');
                        const getData = async () => {
                            var img = await loadThumbnail('gallery/madeira/pico_ruivo/1.png');
                            el.setAttribute('src', img as string);
                        }
                        getData();
                        return el;
                    });
            marker.addTo(markers);
        });


    return () => {
        markers.remove();
    }
  })

    return (
        <React.Fragment>
            <ReactTooltip id="galleryTooltip" place={'top'} effect='solid'  getContent={() => 'sdfdsfs'} />
            <TileLayer data-tip data-for="countryTooltip"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </React.Fragment>
    );
};

export default GalleryMapLayer;