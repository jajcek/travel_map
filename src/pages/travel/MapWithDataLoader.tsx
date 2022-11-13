import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import LoadVisitedStats from './LoadVisitedStats';

import type {VisitedCountryInfo} from '../../map/types';
import Map from '../../map/Map';

type Props = {
    onLoad: () => void
};

const MapWithDataLoader = (props: Props) => {
    const [visitedCountriesData, setVisitedCountriesData] = useState<Array<VisitedCountryInfo>>([]);

    useEffect(() => {
        LoadVisitedStats()
          .then((data) => {
            setVisitedCountriesData(data);
            props.onLoad();
          });
    }, [useLocation()]);

    return (
        <Map visitedCountriesData={visitedCountriesData} />
    );
};

export default MapWithDataLoader;