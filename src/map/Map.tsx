import React from 'react';
import 'leaflet/dist/leaflet.css';
import '../App.css';
import styled from 'styled-components'
import countriesIso from './countries_iso.json';

import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'

import VisitedMap from './VisitedMap';

import type {CountryClickHandler, CountryInfo, VisitedCountryInfo, Layer} from './types';

type Props = {
  onCountryClick: CountryClickHandler,
  onCountryHover: CountryClickHandler,
  visitedCountriesData: Array<VisitedCountryInfo>
}

type State = {
  selectedCountry: CountryInfo,
  layer: Layer,
  zoom: number
}

const statsBackgroundColor = '#444';

const Stats = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  top: 20px;
  padding: 0 10px;
  text-align: center;
  z-index: 9999;
  text-rendering: optimizeLegibility;
  font-family: 'Lato', sans-serif;
  font-weight: bold;

  color: orange;

  background: ${statsBackgroundColor};
  box-shadow:
    0px 0px 15px ${statsBackgroundColor},
    0px 0px 15px ${statsBackgroundColor},
    0px 0px 15px ${statsBackgroundColor},
    0px 0px 15px ${statsBackgroundColor},
    0px 0px 15px ${statsBackgroundColor},
    0px 0px 15px ${statsBackgroundColor};
`;

const Percent = styled.span`
  font-size: 20px;
`;

class Map extends React.Component<Props, State> {

  constructor(props:any) {
    super(props);

    this.state = {selectedCountry: null, layer: 'Visited', zoom: 2.4};

    this.onCountryClick = this.onCountryClick.bind(this);
    this.changeLayer = this.changeLayer.bind(this);
    this.changeZoom = this.changeZoom.bind(this);
    this.calculatePercentOfVisitedCountries = this.calculatePercentOfVisitedCountries.bind(this);
  }

  onCountryClick(countryInfo: CountryInfo) {
    this.setState({selectedCountry: countryInfo});
    this.props.onCountryClick(countryInfo);
  }

  changeLayer(layer: L.LayersControlEvent) {
    if (layer.name === 'Visited') {
      this.props.onCountryClick(this.state.selectedCountry);
    }
    this.setState({'layer': layer.name as Layer});
  }

  changeZoom(event: L.LayersControlEvent) {
    this.setState({'zoom': event.target.getZoom()});
  }

  calculatePercentOfVisitedCountries() {
  console.log(this.props.visitedCountriesData.length);
  console.log(Object.keys(countriesIso).length);
    return (this.props.visitedCountriesData.length * 100 / Object.keys(countriesIso).length).toFixed(2);
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
          {this.state.layer === 'Visited' && <Stats>DISCOVERED <Percent>{this.calculatePercentOfVisitedCountries()}%</Percent> OF THE WORLD</Stats>}
          <VisitedMap zoom={this.state.zoom}
            visitedCountriesData={this.props.visitedCountriesData}
            onCountryClick={this.onCountryClick}
            onCountryHover={this.props.onCountryHover} />
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
