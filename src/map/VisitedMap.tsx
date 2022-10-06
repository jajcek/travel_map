import React, {RefObject} from 'react';

import { GeoJSON } from 'react-leaflet'

import type {CountryClickHandler} from './types';
import type * as geojson from 'geojson';

type Props = {
  onCountryClick: CountryClickHandler
}

class VisitedMap extends React.Component<any, any> {

  geoJsonRef: any = React.createRef<L.GeoJSON>(); // TODO remove any

  constructor(props:any){
    super(props);

    this.state = {selected: null};

    this.countryClickHandler = this.countryClickHandler.bind(this);
    this.highlightFeature = this.highlightFeature.bind(this);
    this.resetHighlight = this.resetHighlight.bind(this);
    this.isSelected = this.isSelected.bind(this);
  }

  countryClickHandler(e: L.LeafletMouseEvent) {
    const layer = e.layer;
    if (this.props.selected !== null) {
      this.geoJsonRef.current.resetStyle(this.props.selected);
    }
    layer.setStyle({
      weight: 4,
      color: '#666',
      fillOpacity: 1
    });

    const props = layer.feature.properties;
    this.setState({selected: layer});

    this.props.onCountryClick(layer);
  }

  defaultCountryStyles(e: geojson.Feature<geojson.Geometry, any> | undefined): L.PathOptions {
    console.log('sadasda');
    return {
      fillColor: 'silver',
      weight: 1,
      color: 'white',
      fillOpacity: 1
    };
  }

  highlightFeature(e: L.LeafletMouseEvent) {
    const layer = e.layer;
    if (this.isSelected(layer)) {
      return;
    } else {
      layer.setStyle({
        weight: 2,
        color: '#666',
        fillOpacity: 1
      });

      layer.bringToFront();
    }
  }

  resetHighlight(e: L.LeafletMouseEvent) {
    const layer = e.layer;
    if (this.props.selected !== null) {
      this.props.selected.bringToFront();
    }

    console.log('this.props.selected', this.props.selected);
    console.log('layer', layer);
    if (this.isSelected(layer)) {
      return;
    } else {
      this.geoJsonRef.current.resetStyle(layer);
    }
  }

  isSelected(layer: any) {
    return this.props.selected !== null && this.props.selected.feature.properties.ISO_A3 === layer.feature.properties.ISO_A3;
  }

  componentWillUpdate() {
    if (this.props.selected === null && this.state.selected != null) {
      console.log('zzzz', this.geoJsonRef.current);
      this.geoJsonRef.current.resetStyle(this.state.selected);
      this.setState({selected: null});
    }
  }

  render() {
    return <GeoJSON ref={this.geoJsonRef} style={this.defaultCountryStyles} data={require('./countries.json')}
      eventHandlers={{click: this.countryClickHandler, mouseover: this.highlightFeature, mouseout: this.resetHighlight}}></GeoJSON>
  }
}

export default VisitedMap;
