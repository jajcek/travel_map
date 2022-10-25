import React from 'react';
import 'leaflet/dist/leaflet.css';
import './Map.css';
import styled from 'styled-components'
import ReactTooltip from "react-tooltip";
import countriesIso from './countries_iso.json';

import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'

import VisitedMap from './VisitedMap';

import type {CountryClickHandler, CountryInfo, VisitedCountryInfo, Layer} from './types';

type Props = {
  onCountryClick?: CountryClickHandler,
  onCountryHover?: CountryClickHandler,
  onStatsHover?: (show: Boolean) => void,
  visitedCountriesData: Array<VisitedCountryInfo>
}

type State = {
  selectedCountry: CountryInfo,
  layer: Layer,
  hoveredCountry: CountryInfo,
  showStatsTooltip: Boolean,
  zoom: number
}

const MapDiv = styled.div`
  width: 100%;
  height: 100%;
`;

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
  font-weight: bold;

  color: orange;

  background: ${statsBackgroundColor};
  box-shadow:
    0px 0px 6px ${statsBackgroundColor},
    0px 0px 7px ${statsBackgroundColor},
    0px 0px 8px ${statsBackgroundColor},
    0px 0px 9px ${statsBackgroundColor},
    0px 0px 10px ${statsBackgroundColor},
    0px 0px 11px ${statsBackgroundColor},
    0px 0px 12px ${statsBackgroundColor},
    0px 0px 13px ${statsBackgroundColor},
    0px 0px 14px ${statsBackgroundColor},
    0px 0px 15px ${statsBackgroundColor};
`;

const Percent = styled.span`
  font-size: 20px;
`;

class Map extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {selectedCountry: null, layer: 'Visited', hoveredCountry: null, showStatsTooltip: false, zoom: 2.4};

    this.onCountryClick = this.onCountryClick.bind(this);
    this.changeLayer = this.changeLayer.bind(this);
    this.changeZoom = this.changeZoom.bind(this);
    this.percentOfVisitedCountries = this.percentOfVisitedCountries.bind(this);
    this.onStatsOver = this.onStatsOver.bind(this);
    this.onStatsOut = this.onStatsOut.bind(this);
    this.onCountryHover = this.onCountryHover.bind(this);
    this.showStatsContent = this.showStatsContent.bind(this);
  }

  onCountryClick(countryInfo: CountryInfo) {
    this.setState({selectedCountry: countryInfo});
  }

  changeLayer(layer: L.LayersControlEvent) {
    this.setState({'layer': layer.name as Layer});
  }

  changeZoom(event: L.LayersControlEvent) {
    this.setState({'zoom': event.target.getZoom()});
  }

  percentOfVisitedCountries() {
    const filteredCountries = Object.assign({}, countriesIso) as Partial<any>;
    delete filteredCountries['AQ'];
    delete filteredCountries['GO'];
    delete filteredCountries['JU'];
    delete filteredCountries['UM-DQ'];
    delete filteredCountries['UM-FQ'];
    delete filteredCountries['UM-HQ'];
    delete filteredCountries['UM-JQ'];
    delete filteredCountries['UM-MQ'];
    delete filteredCountries['UM-WQ'];

    const numOfCountries = Object.keys(filteredCountries).length;
    return (this.props.visitedCountriesData.length * 100 / numOfCountries).toFixed(2);
  }

  onStatsOver() {
    this.setState({showStatsTooltip: true});
  }

  onStatsOut() {
    this.setState({showStatsTooltip: false});
  }

  onCountryHover(countryInfo: CountryInfo) {
    this.setState({hoveredCountry: countryInfo});
  }

  showStatsContent() {
    const countries = countriesIso as { [key: string]: string };
    const fullNamesOfCountries = this.props.visitedCountriesData.map((c: VisitedCountryInfo) => countries[c.name]);
    return fullNamesOfCountries.map((c) => {
        return <div key={c}>{c}</div>
      })
  }

  render() {
    return <MapDiv data-tip data-for="countryTooltip">
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
            {
              this.state.layer === 'Visited' &&
                <React.Fragment>
                  <Stats data-tip data-for="statsTooltip" onMouseOver={this.onStatsOver} onMouseOut={this.onStatsOut}>
                    DISCOVERED <Percent>{this.percentOfVisitedCountries()}%</Percent> OF THE WORLD
                  </Stats>
                  <ReactTooltip id="statsTooltip" place={'bottom'} effect='solid' getContent={() => this.state.showStatsTooltip ? '' : null}>
                    {
                      this.state.showStatsTooltip ? this.showStatsContent() : ''
                    }
                  </ReactTooltip>
                </React.Fragment>
            }
            <ReactTooltip id="countryTooltip" getContent={() => this.state.hoveredCountry}></ReactTooltip>
            <VisitedMap zoom={this.state.zoom}
              visitedCountriesData={this.props.visitedCountriesData}
              onCountryClick={this.onCountryClick}
              onCountryHover={this.onCountryHover} />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Gallery (not implemented yet)">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
        </LayersControl>
      </MapContainer>
    </MapDiv>;
  }
}

export default Map;
