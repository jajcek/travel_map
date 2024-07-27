/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import LoadVisitedStats from './LoadVisitedStats';
import LoadGallery from './LoadGallery';

import type {VisitedCountryInfo, GalleryInfo} from '../../map/types';
import Map from '../../map/Map';

type Props = {
    onLoad: () => void
};

const MapWithDataLoader = (props: Props) => {
    const [visitedCountriesData, setVisitedCountriesData] = useState<Array<VisitedCountryInfo>>([]);
    const [galleryData, setGalleryData] = useState<Array<GalleryInfo>>([]);

    useEffect(() => {
        const statsPromise = LoadVisitedStats()
          .then((data) => {
            setVisitedCountriesData(data);
          });
        const galleryPromise = LoadGallery()
          .then((data) => {
            setGalleryData(data);
          });
        Promise.all([statsPromise, galleryPromise])
          .then(() => {
            props.onLoad();
          });
    }, [useLocation()]);

    return (
        <Map visitedCountriesData={visitedCountriesData} galleryData={galleryData} />
    );
};

export default MapWithDataLoader;