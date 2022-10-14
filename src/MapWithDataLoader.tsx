import React from 'react';
import Map from './map/Map';
import LoadVisitedStats from './LoadVisitedStats';

import type {VisitedCountryInfo} from './map/types';

type State = {
  visitedCountriesData: Array<VisitedCountryInfo>
}

class MapWithDataLoader extends React.Component<{}, State> {
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
      return <Map visitedCountriesData={this.state.visitedCountriesData} />;
    }
}

export default MapWithDataLoader;