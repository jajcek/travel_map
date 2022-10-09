import React from 'react';
import './App.css';
import styled from 'styled-components'

import Map from './map/Map'
import LoadVisitedStats from './LoadVisitedStats';

import type {VisitedCountryInfo} from './map/types';

type State = {
  visitedCountriesData: Array<VisitedCountryInfo>
}

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;

class App extends React.Component<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {visitedCountriesData: []};
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
          <Map visitedCountriesData={this.state.visitedCountriesData} />
      </AppContainer>
    );
  }
}

export default App;
