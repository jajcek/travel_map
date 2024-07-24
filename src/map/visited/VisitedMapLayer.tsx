import React, {useState} from "react";
import styled from 'styled-components';
import ReactTooltip from "react-tooltip";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid} from '@fortawesome/fontawesome-svg-core/import.macro'
import countriesIso from '../countries_iso.json';

import VisitedMap from './VisitedMap';
import {MOBILE_WIDTH} from '../../CommonStyles';

import type {CountryClickHandler, CountryInfo, VisitedCountryInfo} from '../types';

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

    span.percent {
        font-size: 20px;
    }

    @media (max-width: ${MOBILE_WIDTH}) {
        span:not(.percent) {
            display: none;
        }
    }

    > div {
        display: inline-block;
        font-size: 20px;
    }
`;

type Props = {
    zoom: number,
    onCountryClick?: CountryClickHandler,
    onCountryHover?: CountryClickHandler,
    onStatsHover?: (show: Boolean) => void,
    visitedCountriesData: Array<VisitedCountryInfo>
}

const VisitedMapLayer = (props: Props) => {
    const [hoveredCountry, setHoveredCountry] = useState<CountryInfo>();
    const [showStatsTooltip, setShowStatsTooltip] = useState(false);

    function onCountryClick(countryInfo: CountryInfo) {
//         this.setState({selectedCountry: countryInfo});
    }

    function onCountryHover(countryInfo: CountryInfo) {
        setHoveredCountry(countryInfo);
    }

    function onStatsOver() {
        setShowStatsTooltip(true);
    }

    function onStatsOut() {
        setShowStatsTooltip(false);
    }

    function showStatsContent() {
        const countries = countriesIso as { [key: string]: string };
        return props.visitedCountriesData.map((countryInfo: VisitedCountryInfo) => {
            const countryName = countries[countryInfo.name];
            const countryDate = ''; // countryInfo.desc ? ` (${countryInfo.desc})` : '';
            return <div key={countryName}>{countryName}{countryDate}</div>;
        });
    }

    function percentOfVisitedCountries() {
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
        return (props.visitedCountriesData.length * 100 / numOfCountries).toFixed(2);
    }

    return (
        <React.Fragment>
            <React.Fragment>
                <Stats data-tip data-for="statsTooltip" onMouseOver={onStatsOver} onMouseOut={onStatsOut}>
                    <span> DISCOVERED </span>
                    <span className={"percent"}>{percentOfVisitedCountries()}% </span>
                    <span>OF THE WORLD&nbsp;&nbsp;&nbsp;</span>
                    <div>
                        <FontAwesomeIcon icon={solid('circle-question')} />
                    </div>
                </Stats>
                <ReactTooltip id="statsTooltip" place={'bottom'} effect='solid' getContent={() => showStatsTooltip ? showStatsContent() : ''} />
            </React.Fragment>
            <ReactTooltip id="countryTooltip" getContent={() => hoveredCountry ? hoveredCountry : ''} />
            <VisitedMap zoom={props.zoom}
                visitedCountriesData={props.visitedCountriesData}
                onCountryClick={onCountryClick}
                onCountryHover={onCountryHover} />
        </React.Fragment>
    );
};

export default VisitedMapLayer;