import React from 'react';
import * as ol from 'openlayers'
import 'openlayers/css/ol.css';

class OLMap extends React.Component {

  getMap() {
    var styles = {
      'MultiLineString': new ol.style.Style({
        stroke: new ol.style.Stroke({
          color: 'blue',
          width: 5
        })
      })
    };

    var styleFunction = function(feature) {
      return styles[feature.getGeometry().getType()];
    };

    const lonLatCoords = this.props.coords.map(
      coord => ol.proj.fromLonLat(coord));

    var geojsonObject = {
      'type': 'FeatureCollection',
      'crs': {
        'type': 'name',
        'properties': {
          'name': 'EPSG:4326'
        }
      },
      'features': [
        {
        'type': 'Feature',
        'geometry': {
          'type': 'MultiLineString',
          'coordinates': [ lonLatCoords ]
        }
      }]
    };

    var vectorSource = new ol.source.Vector({
      features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
    });

    var vectorLayer = new ol.layer.Vector({
      source: vectorSource,
      style: styleFunction
    });

    let lat=0, lon=0;

    if (this.props.coords[0] !== undefined) {
      lat=this.props.coords[0][1];
      lon=this.props.coords[0][0];
    }

    var map = new ol.Map({
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM()
        }),
        vectorLayer
      ],
      target: 'map',
      controls: ol.control.defaults({
        attributionOptions: /** @type {olx.control.AttributionOptions} */ ({
          collapsible: false
        })
      }),
      view: new ol.View({
        center: ol.proj.fromLonLat([lon, lat]),
        zoom: 13
      })
    });

    return map;
  }

  componentDidMount() {
    this.getMap().setTarget("map");
  }

  render() {
    return (
      <div id="map" className="map"></div>
    );
  }
}

export default OLMap;
