import React from 'react';
import 'leaflet/dist/leaflet.css';
import '../App.css';

import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'

import VisitedMap from './VisitedMap';

import type {CountryClickHandler, CountryInfo, VisitedCountryInfo} from './types';

type Props = {
  onCountryClick: CountryClickHandler,
  onCountryHover: CountryClickHandler,
  visitedCountriesData: Array<VisitedCountryInfo>
}

type State = {
  selectedCountry: CountryInfo,
  zoom: number
}

class Map extends React.Component<Props, State> {

  constructor(props:any) {
    super(props);

    this.state = {selectedCountry: null, zoom: 2.4};

    this.onCountryClick = this.onCountryClick.bind(this);
    this.changeLayer = this.changeLayer.bind(this);
    this.changeZoom = this.changeZoom.bind(this);
  }

  onCountryClick(countryInfo: CountryInfo) {
    this.setState({selectedCountry: countryInfo});
    this.props.onCountryClick(countryInfo);
  }

  changeLayer(layer: L.LayersControlEvent) {
    if (layer.name === 'Visited') {
      this.props.onCountryClick(this.state.selectedCountry);
    }
  }

  changeZoom(event: L.LayersControlEvent) {
    this.setState({'zoom': event.target.getZoom()});
  }

  render() {
    return <MapContainer style={{height: '100%', backgroundColor: 'gray'}}
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
          <VisitedMap zoom={this.state.zoom} visitedCountriesData={this.props.visitedCountriesData} onCountryClick={this.onCountryClick} onCountryHover={this.props.onCountryHover}></VisitedMap>
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
