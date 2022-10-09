import React from 'react';
import './App.css';
import styled from 'styled-components'
import ReactTooltip from "react-tooltip";

import Map from './map/Map'
import CountryPropertyBox from './CountryPropertyBox';
import LoadVisitedStats from './LoadVisitedStats';

import type {CountryInfo, VisitedCountryInfo} from './map/types';

type State = {
  selectedCountry: CountryInfo,
  hoveredCountry: CountryInfo,
  visitedCountriesData: Array<VisitedCountryInfo>
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MapDiv = styled.div`
  flex: 5;
`;
const PropertyBoxDiv = styled.div`
  flex: 1;
  background-color: #353535;
  color: white;
`;

class App extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {selectedCountry: null, hoveredCountry: null, visitedCountriesData: []}
    this.onCountryClick = this.onCountryClick.bind(this);
    this.onCountryHover = this.onCountryHover.bind(this);
  }

  onCountryClick(countryInfo: CountryInfo) {
    this.setState({selectedCountry: countryInfo});
  }

  onCountryHover(countryInfo: CountryInfo) {
    this.setState({hoveredCountry: countryInfo});
  }

  componentDidMount() {
    LoadVisitedStats()
        .then((data) => {
             this.setState({'visitedCountriesData': data});
        });
  }

  render() {
    return (
      <AppContainer className="travel-app">
          <MapDiv data-tip data-for="countryTooltip">
            <Map visitedCountriesData={this.state.visitedCountriesData} onCountryClick={this.onCountryClick} onCountryHover={this.onCountryHover}></Map>
          </MapDiv>
          <PropertyBoxDiv>
            {
                this.state.selectedCountry !== null && <CountryPropertyBox name={this.state.selectedCountry}></CountryPropertyBox>
            }
          </PropertyBoxDiv>
          {
            this.state.hoveredCountry != null && <ReactTooltip id="countryTooltip">{this.state.hoveredCountry}</ReactTooltip>
          }
      </AppContainer>
    );
  }
}

export default App;
