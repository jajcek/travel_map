import React, {RefObject} from 'react';

import { GeoJSON } from 'react-leaflet'

import type {CountryClickHandler, CountryInfo} from './types';
import type * as geojson from 'geojson';

type Props = {
  selectedCountry: CountryInfo | null,
  onCountryClick: CountryClickHandler
}

class VisitedMap extends React.Component<Props, any> {

  geoJsonRef: any = React.createRef<L.GeoJSON>(); // TODO remove any

  constructor(props: Props) {
    super(props);

    this.state = {selected: null};

    this.countryClickHandler = this.countryClickHandler.bind(this);
    this.highlightFeature = this.highlightFeature.bind(this);
    this.resetHighlight = this.resetHighlight.bind(this);
    this.isSelected = this.isSelected.bind(this);
    this.defaultCountryStyles = this.defaultCountryStyles.bind(this);
  }

  countryClickHandler(e: L.LeafletMouseEvent) {
    const layer = e.layer;
    if (this.state.selected !== null) {
      this.geoJsonRef.current.resetStyle(this.state.selected);
      if (this.state.selected === layer) {
        this.setState({selected: null});
        this.props.onCountryClick(null);
        return;
      }
    }

    layer.setStyle({
      weight: 4,
      color: '#666',
      fillOpacity: 1
    });

    const props = layer.feature.properties;
    this.setState({selected: layer});
    this.props.onCountryClick(props.ADMIN);
  }

  defaultCountryStyles(e: geojson.Feature<geojson.Geometry, any> | undefined): L.PathOptions {
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
    if (this.state.selected !== null) {
      this.state.selected.bringToFront();
    }

    if (this.isSelected(layer)) {
      return;
    } else {
      this.geoJsonRef.current.resetStyle(layer);
    }
  }

  isSelected(layer: any) {
    return this.state.selected !== null && this.state.selected.feature.properties.ADMIN === layer.feature.properties.ADMIN;
  }

  componentDidUpdate(prevProp: any) {
    this.geoJsonRef.current.eachLayer((layer: L.FeatureGroup) => {
            const featureProperties = (layer.feature as geojson.Feature).properties!;
            if (featureProperties.ADMIN === this.props.selectedCountry) {
                layer.bringToFront();
            }
        });
  }

  render() {
    return <GeoJSON ref={this.geoJsonRef} style={this.defaultCountryStyles} data={require('./countries.json')}
      eventHandlers={{click: this.countryClickHandler, mouseover: this.highlightFeature, mouseout: this.resetHighlight}}></GeoJSON>
  }
}

export default VisitedMap;
