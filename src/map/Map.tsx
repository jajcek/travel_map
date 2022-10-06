import React, {RefObject} from 'react';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

import { MapContainer, TileLayer, useMap, LayersControl, Marker, Popup, LayerGroup, Circle, GeoJSON } from 'react-leaflet'

import VisitedMap from './VisitedMap';

import type {CountryClickHandler} from './types';

type Props = {
  onCountryClick: CountryClickHandler
}

class Map extends React.Component<Props, any> {

  constructor(props:any){
    super(props);

    this.state = {r: null};

    this.countryClickHandler = this.countryClickHandler.bind(this);
    this.f = this.f.bind(this);
  }

  countryClickHandler(layer: any) {
    this.setState({r: layer});
    this.props.onCountryClick(layer);
  }

  f(e) {
    if (e.name === 'Visited') {
      this.props.onCountryClick(this.state.r);
    }
  }

  render() {
    return <MapContainer style={{height: '100%', backgroundColor: 'gray'}}
        center={[30, 0]}
        zoom={2.4}
        scrollWheelZoom={true}
        maxBounds={[[-60, -180], [84, 180]]}
        maxBoundsViscosity={1}
        zoomDelta={0.1}
        zoomSnap={0}
        wheelPxPerZoomLevel={100}
        whenReady={event => {
          const { target } = event;
          target.on('baselayerchange', this.f);
      }}
      >
      <LayersControl position="topright" collapsed={false} change={this.f}>
        <LayersControl.BaseLayer checked name="Visited">
          <VisitedMap onCountryClick={this.countryClickHandler}></VisitedMap>
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Gallery">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
      </LayersControl>
    </MapContainer>;
  }
}

export default Map;
