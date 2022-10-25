import React from 'react';
import loadable from '@loadable/component'
import Map from './map/Map';
import LoadingPage from './LoadingPage';
import LoadVisitedStats from './LoadVisitedStats';

import type {VisitedCountryInfo} from './map/types';

type State = {
  visitedCountriesData: Array<VisitedCountryInfo>
}

const MapWithLoader = loadable(() => import('./map/Map'), {
  fallback: <LoadingPage />,
});

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
       return <MapWithLoader visitedCountriesData={this.state.visitedCountriesData} />;
    }
}

export default MapWithDataLoader;