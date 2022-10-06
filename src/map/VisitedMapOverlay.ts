import L from 'leaflet';

import type * as geojson from 'geojson';
import type {CountryClickHandler} from './types';


function VisitedMapOverlay(countryClickHandler: CountryClickHandler): L.GeoJSON {
  let geoJson: L.GeoJSON;

  function mapStyles(): L.PathOptions {
    return {
      fillColor: 'silver',
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '',
      fillOpacity: 1
    };
  }

  function highlightFeature(e: L.LeafletMouseEvent) {
    const layer = e.target;

    layer.setStyle({
      weight: 2,
      color: '#666',
      dashArray: '',
      fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
  }

  function resetHighlight(e: L.LeafletMouseEvent) {
    geoJson.resetStyle(e.target);
  }

  function clickHandler(e: L.LeafletMouseEvent) {
    const props = e.target.feature.properties;
    countryClickHandler({name: props.ADMIN, iso_a3_name: props.ISO_A3});
  }

  function onEachFeature(feature: geojson.Feature<geojson.Geometry, any>, layer: L.Layer) {
    layer.on({
      mouseover: highlightFeature,
      mouseout: resetHighlight,
      click: clickHandler
    });
  }

  return geoJson = L.geoJson(
    require('./countries.json'),
    {style: mapStyles, onEachFeature: onEachFeature}
  );
}

export default VisitedMapOverlay;
