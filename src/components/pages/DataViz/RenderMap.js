import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useContext } from 'react';
import ReactMapGL, {
  FullscreenControl,
  NavigationControl,
  Source,
  Layer,
} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { BridgesContext } from '../../../state/bridgesContext';
import DetailsInfo from './DetailsInfo';
import FilterBridgesCheckboxes from './FilterBridgesCheckboxes';

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
  const [rejectedChecked, setRejectedChecked] = useState(false);
  const [identifiedChecked, setIdentifiedChecked] = useState(false);
  const [completedChecked, setCompletedChecked] = useState(true);
  const { bridgeData, detailsData, setDetailsData } = useContext(
    BridgesContext
  );
  const [confirmedChecked, setConfirmedChecked] = useState(false);
  const [prospectingChecked, setProspectingChecked] = useState(false);
  const [constructionChecked, setConstructionChecked] = useState(false);
  const geocoderContainerRef = useRef();
  const mapRef = useRef();

  let geojson = {
    type: 'FeatureCollection',
    features: [],
  };
  let featureCollection = [];
  //this will run function after brindges will be filtered
  function certainBridgeShows(bridges) {
    bridges.forEach(bridge =>
      featureCollection.push({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [bridge.long, bridge.lat],
        },
      })
    );
  }

  //bridges are now being filtered by the bidge stages
  if (bridgeData) {
    let rejected = bridgeData.filter(
      bridge => bridge.project_stage === 'Rejected'
    );
    if (rejectedChecked) {
      certainBridgeShows(rejected);
    }
    let Identified = bridgeData.filter(
      bridge => bridge.project_stage === 'Identified'
    );
    if (identifiedChecked) {
      certainBridgeShows(Identified);
    }
    let Complete = bridgeData.filter(
      bridge => bridge.project_stage === 'Complete'
    );
    if (completedChecked) {
      certainBridgeShows(Complete);
    }
    let Confirmed = bridgeData.filter(
      bridge => bridge.project_stage === 'Confirmed'
    );
    if (confirmedChecked) {
      certainBridgeShows(Confirmed);
    }
    let Prospecting = bridgeData.filter(
      bridge => bridge.project_stage === 'Prospecting'
    );
    if (prospectingChecked) {
      certainBridgeShows(Prospecting);
    }
    let Under_Construction = bridgeData.filter(
      bridge => bridge.project_stage === 'Under Construction'
    );
    if (constructionChecked) {
      certainBridgeShows(Under_Construction);
    }
  }

  geojson.features = featureCollection;

  const handleViewportChange = viewport => {
    if (viewport.longitude < maxBounds.minLongitude) {
      viewport.longitude = maxBounds.minLongitude;
    } else if (viewport.longitude > maxBounds.maxLongitude) {
      viewport.longitude = maxBounds.maxLongitude;
    } else if (viewport.latitude < maxBounds.minLatitude) {
      viewport.latitude = maxBounds.minLatitude;
    } else if (viewport.latitude > maxBounds.maxLatitude) {
      viewport.latitude = maxBounds.maxLatitude;
    }
    setViewport(viewport);
  };

  const handleClick = event => {
    const { features } = event;

    const clickedFeature =
      features && features.find(f => f.layer.id === 'data');

    if (features.length > 0) {
      var coordinates = features[0].geometry.coordinates.slice();
      coordinates[0] = parseFloat(coordinates[0].toFixed(2));
      coordinates[1] = parseFloat(coordinates[1].toFixed(2));
    }

    let bridge;

    if (clickedFeature) {
      bridge = bridgeData.find(f => {
        if (f.lat & f.long) {
          if (
            (parseFloat(f.long.toFixed(2)) === coordinates[0]) &
            (parseFloat(f.lat.toFixed(2)) === coordinates[1])
          ) {
            return f;
          }
        }
      });
    }

    setDetailsData(bridge);
  };

  return (
    <div className="mapbox-react">
      <ReactMapGL
        id="map"
        className="map"
        ref={mapRef}
        {...viewport}
        width="90%"
        height="90vh"
        mapStyle="mapbox://styles/jgertig/ckeughi4a1plr19qqsarcddky"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        interactiveLayerIds={['data']}
        onClick={handleClick}
        maxZoom={12}
        minZoom={6.5}
      >
        <Source id="my-data" type="geojson" data={geojson}>
          <Layer
            id="data"
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
        <div className="check-box">
          <FilterBridgesCheckboxes
            certainBridgeShows={certainBridgeShows}
            completedChecked={completedChecked}
            setCompletedChecked={setCompletedChecked}
            rejectedChecked={rejectedChecked}
            setRejectedChecked={setRejectedChecked}
            identifiedChecked={identifiedChecked}
            setIdentifiedChecked={setIdentifiedChecked}
            confirmedChecked={confirmedChecked}
            setConfirmedChecked={setConfirmedChecked}
            prospectingChecked={prospectingChecked}
            setProspectingChecked={setProspectingChecked}
            constructionChecked={constructionChecked}
            setConstructionChecked={setConstructionChecked}
          />
        </div>

        <div className="fullScreenControl">
          <FullscreenControl />
        </div>

        <div className="navigationControl">
          <NavigationControl />
        </div>

        {detailsData && <DetailsInfo />}
      </ReactMapGL>
    </div>
  );
};

export default RenderMap;
