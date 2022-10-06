import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'

import Map from './map/Map'
import PropertyBox from './PropertyBox';

import { MapContainer, TileLayer, useMap, LayersControl, Marker, Popup, LayerGroup, Circle, GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import type {CountryInfo} from './map/types';

enum PropertyType {
  None = 'NONE',
  Country = 'COUNTRY'
}

type State = {
  propertyType: PropertyType
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const MainAndPropertyContainer = styled.div`
  display: flex;
  flex: 1;
`;

const MapDiv = styled.div`
  flex: 5;
`;
const PropertyBoxDiv = styled.div`
  flex: 1;
  background-color: #353535;
  color: white;
`;

const Footer = styled.div`
  background-color: #353535;
  color: white;
  text-align: center;
`;

class App extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {propertyType: PropertyType.None}
    this.countryClickHandler = this.countryClickHandler.bind(this);
  }

  countryClickHandler(countryData: CountryInfo) {
    console.log(countryData);
    this.setState({propertyType: PropertyType.Country});
  }

  render() {

    let propertyBoxToDisplay = null;
    if (this.state.propertyType === PropertyType.Country) {
      propertyBoxToDisplay = <div>kupsztylec</div>
    }

    return (
      <AppContainer className="travel-app">
        <MainAndPropertyContainer>
          <MapDiv>
            <MapL countryClickHandler={this.countryClickHandler}></MapL>
          </MapDiv>
          <PropertyBoxDiv>
            <div id="tescik">
              {propertyBoxToDisplay}
            </div>
          </PropertyBoxDiv>
        </MainAndPropertyContainer>
        <Footer>
          Copyright &copy; by JT
        </Footer>
      </AppContainer>
    );
  }
}

export default App;
