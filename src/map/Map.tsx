import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import styled from 'styled-components'

import {MapContainer} from 'react-leaflet'

import VisitedMapLayer from './visited/VisitedMapLayer';
import GalleryMapLayer from './gallery/GalleryMapLayer';

import type {CountryClickHandler, VisitedCountryInfo, GalleryInfo} from './types';
import {Layer} from './types.d';

type Props = {
    onCountryClick?: CountryClickHandler,
    onCountryHover?: CountryClickHandler,
    onStatsHover?: (show: Boolean) => void,
    visitedCountriesData: Array<VisitedCountryInfo>
    galleryData: Array<GalleryInfo>
}

const MapDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const Map = (props: Props) => {
    const [layer, setLayer] = useState<Layer>(Layer.GALLERY);
    const [zoom, setZoom] = useState(2.2);

    function changeZoom(event: L.LayersControlEvent) {
        setZoom(event.target.getZoom());
//         if (event.target.getZoom() >= 4) {
//             setLayer(Layer.GALLERY);
//         } else {
//             setLayer(Layer.VISITED);
//         }
    }

    return (
        <MapDiv data-tip data-for="countryTooltip">
            <MapContainer style={{height: '100%', backgroundColor: 'gray'}}
            center={[0, 0]}
            zoom={zoom}
            minZoom={zoom}
            scrollWheelZoom={true}
            maxBounds={[[-60, -180], [84, 190]]}
            maxBoundsViscosity={1}
            zoomDelta={0.1}
            zoomSnap={1}
            wheelPxPerZoomLevel={100}
            // @ts-ignore: invalid type in react-leaflet library
            whenReady={(e: any) => {
                e.target.on('zoom', changeZoom);
                e.target.on('click', (e: L.LeafletMouseEvent) => {
                    var coord = e.latlng;
                      var lat = coord.lat;
                      var lng = coord.lng;
                    console.log('asdasd', lat, lng);
                    });
            }}
            >

                {/* layer === Layer.VISITED && <VisitedMapLayer zoom={zoom} visitedCountriesData={props.visitedCountriesData} /> */}
                { layer === Layer.GALLERY && <GalleryMapLayer zoom={zoom} galleryData={props.galleryData} /> }

            </MapContainer>
        </MapDiv>
    );
};

export default Map;
