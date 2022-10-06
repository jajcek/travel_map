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

    this.state = {selected: null};

    this.countryClickHandler = this.countryClickHandler.bind(this);
    this.f = this.f.bind(this);
  }

  countryClickHandler(layer: any) {
    // if (this.state.selected !== null) {
    //   this.geoJsonRef.current.resetStyle(this.state.selected);
    // }
    // layer.setStyle({
    //   weight: 4,
    //   color: '#666',
    //   fillOpacity: 1
    // });

    const props = layer.feature.properties;
    this.setState({selected: layer});
console.log('selecting', layer);
    this.props.onCountryClick({'name': props.ADMIN, 'iso_a3_name': props.ISO_A3});
  }

  f() {
    console.log('selected na null');
    this.setState({selected: null});
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
        <LayersControl.BaseLayer checked name="Visited" eventHandlers={{overlayadd: this.f}}>
          <VisitedMap selected={this.state.selected} onCountryClick={this.countryClickHandler}></VisitedMap>
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
