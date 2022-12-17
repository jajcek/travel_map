import React, {useState} from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import styled from 'styled-components'

import {MapContainer, LayersControl, TileLayer} from 'react-leaflet'

import VisitedMapLayer from './visited/VisitedMapLayer';

import type {CountryClickHandler, VisitedCountryInfo, Layer} from './types';

type Props = {
    onCountryClick?: CountryClickHandler,
    onCountryHover?: CountryClickHandler,
    onStatsHover?: (show: Boolean) => void,
    visitedCountriesData: Array<VisitedCountryInfo>
}

const MapDiv = styled.div`
    width: 100%;
    height: 100%;
`;

const Map = (props: Props) => {
    const [layer, setLayer] = useState<Layer>('Visited');
    const [zoom, setZoom] = useState(2.4);

    function changeLayer(layer: L.LayersControlEvent) {
        setLayer(layer.name as Layer);
    }

    function changeZoom(event: L.LayersControlEvent) {
        setZoom(event.target.getZoom());
    }

    return (
        <MapDiv data-tip data-for="countryTooltip">
            <MapContainer style={{height: '100%', backgroundColor: 'gray'}}
            center={[30, 0]}
            zoom={zoom}
            minZoom={zoom}
            scrollWheelZoom={true}
            maxBounds={[[-60, -180], [84, 190]]}
            maxBoundsViscosity={1}
            zoomDelta={0.1}
            zoomSnap={0}
            wheelPxPerZoomLevel={100}
            // @ts-ignore: invalid type in react-leaflet library
            whenReady={(e: any) => {
                e.target.on('baselayerchange', changeLayer);
                e.target.on('zoom', changeZoom);
            }}
            >
                <LayersControl position="topright" collapsed={false}>
                    <LayersControl.BaseLayer checked name="Visited">
                        <VisitedMapLayer visible={layer === 'Visited'} zoom={zoom} visitedCountriesData={props.visitedCountriesData} />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </MapDiv>
    );
};

export default Map;
