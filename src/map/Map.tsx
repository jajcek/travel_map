import React from 'react';
import L from 'leaflet';
import * as geojson from 'geojson';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import VisitedMapOverlay from './VisitedMapOverlay';

import type {CountryClickHandler} from './types';

type Props = {
  countryClickHandler: CountryClickHandler
}

class Map extends React.Component<Props, any> {

  componentDidMount() {
    console.log('componentDidMount');
    if (this.isMapInitialized()) {
      return;
    }
    console.log('wlazlo');

    const visitedMapLayer = L.layerGroup([L.tileLayer(''), VisitedMapOverlay(this.props.countryClickHandler)]);
    const galleryMapLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      noWrap: false
    })

    const map = L.map('map', {
      center: [30, 0],
      zoom: 2.4,
      minZoom: 2.4,
      layers: [
        visitedMapLayer
      ],
      maxBounds: [ // get rid of antarctic
        [-60, -180],
        [84, 180]
      ],
      maxBoundsViscosity: 1,
      zoomDelta: 0.1,
      zoomSnap: 0,
      wheelPxPerZoomLevel: 100 // higher values makes it slower to zoom in
    });

    const layerControl = L.control.layers({'Visited': visitedMapLayer, 'Gallery': galleryMapLayer}, {}, {collapsed: false});
    map.addControl(layerControl);
    // map.on('overlayadd', function f(e) {
    //   console.log(e);
    // })
  }

  shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log('should update');
    return false;
  }

  isMapInitialized() {
    const divContainer = L.DomUtil.get('map');
    if (divContainer) {
      return divContainer.classList.contains('leaflet-container');
    }
  }

  render() {
    console.log('render map');
    const Div = styled.div`
      height: 100%;
      width: 100%;
      background-color: gray;
    `;
    return <Div id="map"></Div>;
  }
}

export default Map;
