import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback, useContext } from 'react';
import ReactMapGL, {
  FullscreenControl,
  NavigationControl,
  Source,
  Layer,
} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { BridgesContext } from '../../../state/bridgesContext';
import Markers from './Markers';
import DetailsInfo from './DetailsInfo';

let maxBounds = {
  minLatitude: -3.688855,
  minLongitude: 28.451506,
  maxLatitude: -0.670151,
  maxLongitude: 31.220318,
};

const RenderMap = () => {
  const [viewport, setViewport] = useState({
    latitude: -1.9444,
    longitude: 30.0616,
    zoom: 7.8,
    bearing: 0,
    pitch: 0,
  });
  const { bridgeData, detailsData } = useContext(BridgesContext);
  const geocoderContainerRef = useRef();
  const mapRef = useRef();

  let geojson = {
    type: 'FeatureCollection',
    features: [],
  };

  let featureCollection = [];
  if (bridgeData) {
    for (let i = 0; i < bridgeData.length; i++) {
      if (bridgeData[i].long & bridgeData[i].lat) {
        featureCollection.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridgeData[i].long, bridgeData[i].lat],
          },
        });
      }
    }
  }
  geojson.features = featureCollection;

  console.log(geojson);
  console.log(featureCollection);

  const handleViewportChange = useCallback(newViewport => {
    // if (newViewport.longitude < maxBounds.minLongitude) {
    //   newViewport.longitude = maxBounds.minLongitude;
    // } else if (newViewport.longitude > maxBounds.maxLongitude) {
    //   newViewport.longitude = maxBounds.maxLongitude;
    // } else if (newViewport.latitude < maxBounds.minLatitude) {
    //   newViewport.latitude = maxBounds.minLatitude;
    // } else if (newViewport.latitude > maxBounds.maxLatitude) {
    //   newViewport.latitude = maxBounds.maxLatitude;
    // }
    setViewport(newViewport);
  }, []);

  return (
    <div className="mapbox-react">
      <ReactMapGL
        id="map"
        className="map"
        ref={mapRef}
        {...viewport}
        width="90%"
        height="90vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // maxZoom={12}
        // minZoom={6.5}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer
            id="point"
            type="circle"
            paint={{
              'circle-radius': 10,
              'circle-color': '#007cbf',
            }}
          />
        </Source>
        <div ref={geocoderContainerRef} className="search-bar">
          <Geocoder
            mapRef={mapRef}
            countries="rw"
            marker={false}
            onViewportChange={handleViewportChange}
            containerRef={geocoderContainerRef}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            position="top-left"
          />
        </div>

        <div className="fullScreenControl">
          <FullscreenControl />
        </div>

        <div className="navigationControl">
          <NavigationControl />
        </div>

        {/* <Markers setViewport={setViewport} bridgeData={bridgeData} /> */}

        {detailsData && <DetailsInfo />}
      </ReactMapGL>
    </div>
  );
};

export default RenderMap;
