import React from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import styled from 'styled-components'

import {MapContainer, LayersControl} from 'react-leaflet'

import VisitedMapLayer from './visited/VisitedMapLayer';

import type {CountryClickHandler, VisitedCountryInfo, Layer} from './types';

type Props = {
    onCountryClick?: CountryClickHandler,
    onCountryHover?: CountryClickHandler,
    onStatsHover?: (show: Boolean) => void,
    visitedCountriesData: Array<VisitedCountryInfo>
}

type State = {
    layer: Layer,
    zoom: number
}

const MapDiv = styled.div`
    width: 100%;
    height: 100%;
`;

class Map extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {layer: 'Visited', zoom: 2.4};

    this.changeLayer = this.changeLayer.bind(this);
    this.changeZoom = this.changeZoom.bind(this);
  }

  changeLayer(layer: L.LayersControlEvent) {
    this.setState({'layer': layer.name as Layer});
  }

  changeZoom(event: L.LayersControlEvent) {
    this.setState({'zoom': event.target.getZoom()});
  }

  render() {
    return (
        <MapDiv data-tip data-for="countryTooltip">
            <MapContainer style={{height: '100%', backgroundColor: 'gray'}}
            center={[30, 0]}
            zoom={this.state.zoom}
            minZoom={this.state.zoom}
            scrollWheelZoom={true}
            maxBounds={[[-60, -180], [84, 190]]}
            maxBoundsViscosity={1}
            zoomDelta={0.1}
            zoomSnap={0}
            wheelPxPerZoomLevel={100}
            // @ts-ignore: invalid type in react-leaflet library
            whenReady={(e: any) => {
                e.target.on('baselayerchange', this.changeLayer);
                e.target.on('zoom', this.changeZoom);
            }}
            >
                <LayersControl position="topright" collapsed={false}>
                    <LayersControl.BaseLayer checked name="Visited">
                        <VisitedMapLayer zoom={this.state.zoom} visitedCountriesData={this.props.visitedCountriesData} />
                    </LayersControl.BaseLayer>
                </LayersControl>
            </MapContainer>
        </MapDiv>
    );
  }
}

export default Map;
