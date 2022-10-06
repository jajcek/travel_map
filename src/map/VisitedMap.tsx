import React, {RefObject} from 'react';

import { GeoJSON } from 'react-leaflet'

import type {CountryClickHandler} from './types';

type Props = {
  onCountryClick: CountryClickHandler
}

class VisitedMap extends React.Component<Props, any> {

  geoJsonRef: any = React.createRef<L.GeoJSON>(); // TODO remove any

  constructor(props:any){
    super(props);

    this.state = {selected: null};

    this.countryClickHandler = this.countryClickHandler.bind(this);
    this.highlightFeature = this.highlightFeature.bind(this);
    this.resetHighlight = this.resetHighlight.bind(this);
  }

  countryClickHandler(e: L.LeafletMouseEvent) {
    const layer = e.layer;
    if (this.state.selected !== null) {
      this.geoJsonRef.current.resetStyle(this.state.selected);
    }
    layer.setStyle({
      weight: 4,
      color: '#666',
      dashArray: '',
      fillOpacity: 1
    });

    const props = layer.feature.properties;
    this.setState({selected: layer});

    this.props.onCountryClick({'name': props.ADMIN, 'iso_a3_name': props.ISO_A3});
  }

  mapStyles(e: any): L.PathOptions {
    return {
      fillColor: 'silver',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '',
      fillOpacity: 1
    };
  }

  highlightFeature(e: L.LeafletMouseEvent) {
    const layer = e.layer;
    if (this.state.selected !== null && this.state.selected.feature.properties.ISO_A3 === e.layer.feature.properties.ISO_A3) {
      this.state.selected.bringToFront();
      return;
    }

    layer.setStyle({
      weight: 1,
      //color: '#666',
      fillColor: 'gray',
      dashArray: '',
      fillOpacity: 1
    });

    layer.bringToFront();
  }

  resetHighlight(e: L.LeafletMouseEvent) {
    if (this.state.selected !== null) {
      this.state.selected.bringToFront();
    }
    if (this.state.selected !== null && this.state.selected.feature.properties.ISO_A3 === e.layer.feature.properties.ISO_A3) {
      return;
    }
    this.geoJsonRef.current.resetStyle(e.layer);
  }

  render() {
    return <GeoJSON ref={this.geoJsonRef} style={this.mapStyles} data={require('./countries.json')}
      eventHandlers={{click: this.countryClickHandler, mouseover: this.highlightFeature, mouseout: this.resetHighlight}}></GeoJSON>
  }
}

export default VisitedMap;
