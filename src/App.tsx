import React from 'react';
import './App.css';
import styled from 'styled-components'

import Map from './map/Map'
import CountryPropertyBox from './CountryPropertyBox';
import LoadVisitedStats from './LoadVisitedStats';

import type {CountryInfo, VisitedCountryInfo} from './map/types';

type State = {
  selectedCountry: CountryInfo,
  visitedCountriesData: Array<VisitedCountryInfo>
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

    this.state = {selectedCountry: null, visitedCountriesData: []}
    this.countryClickHandler = this.countryClickHandler.bind(this);
  }

  countryClickHandler(countryInfo: CountryInfo) {
    console.log(countryInfo);
    this.setState({selectedCountry: countryInfo});
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
        <MainAndPropertyContainer>
          <MapDiv>
            <Map visitedCountriesData={this.state.visitedCountriesData} onCountryClick={this.countryClickHandler}></Map>
          </MapDiv>
          <PropertyBoxDiv>
            {
                this.state.selectedCountry !== null && <CountryPropertyBox name={this.state.selectedCountry}></CountryPropertyBox>
            }
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
