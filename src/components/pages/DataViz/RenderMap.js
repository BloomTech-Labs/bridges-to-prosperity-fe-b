import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { MenuOutlined } from '@ant-design/icons';
import useKeypress from '../../common/UseKeypress';
import bridgeIconGreen from '../../../styles/imgs/bridgeIconGreen.png';
import bridgeIconRed from '../../../styles/imgs/bridgeIconRed.png';
import bridgeIconPurple from '../../../styles/imgs/bridgeIconPurple.png';
import bridgeIconBlue from '../../../styles/imgs/bridgeIconBlue.png';
import bridgeIconGray from '../../../styles/imgs/bridgeIconGray.png';
import bridgeIconOrange from '../../../styles/imgs/bridgeIconOrange.png';

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
  const { bridgeData, detailsData, setDetailsData } = useContext(
    BridgesContext
  );
  const [fullscreen, setFullscreen] = useState(false);

  const [viewport, setViewport] = useState({
    latitude: -1.9444,
    longitude: 30.0616,
    zoom: 7.8,
    bearing: 0,
    pitch: 0,
  });
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const [rejectedChecked, setRejectedChecked] = useState(false);
  const [identifiedChecked, setIdentifiedChecked] = useState(false);
  const [completedChecked, setCompletedChecked] = useState(true);
  const [confirmedChecked, setConfirmedChecked] = useState(false);
  const [prospectingChecked, setProspectingChecked] = useState(false);
  const [constructionChecked, setConstructionChecked] = useState(false);

  useKeypress('Escape', () => {
    setFullscreen(false);
    setDetailsData(null);
  });

  let geojsonComplete = {
    type: 'FeatureCollection',
    features: [],
  };
  let geojsonRejected = {
    type: 'FeatureCollection',
    features: [],
  };
  let geojsonConfirmed = {
    type: 'FeatureCollection',
    features: [],
  };
  let geojsonIdentified = {
    type: 'FeatureCollection',
    features: [],
  };
  let geojsonProspecting = {
    type: 'FeatureCollection',
    features: [],
  };
  let geojsonUnderConstruction = {
    type: 'FeatureCollection',
    features: [],
  };

  //this will run function after brindges will be filtered
  function certainBridgeShows(bridges) {
    bridges.forEach(bridge => {
      if (bridge.project_stage === 'Complete') {
        geojsonComplete.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
        });
      }
      if (bridge.project_stage === 'Rejected') {
        geojsonRejected.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
        });
      }
      if (bridge.project_stage === 'Confirmed') {
        geojsonConfirmed.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
        });
      }
      if (bridge.project_stage === 'Identified') {
        geojsonIdentified.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
        });
      }
      if (bridge.project_stage === 'Prospecting') {
        geojsonProspecting.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
        });
      }
      if (bridge.project_stage === 'Under Construction') {
        geojsonUnderConstruction.features.push({
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [bridge.long, bridge.lat],
          },
        });
      }
    });
  }

  // bridges are now being filtered by the bidge stages
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
      features &&
      features.find(
        f =>
          f.layer.id === 'complete' ||
          f.layer.id === 'rejected' ||
          f.layer.id === 'identified' ||
          f.layer.id === 'prospecting' ||
          f.layer.id === 'underConstruction' ||
          f.layer.id === 'confirmed'
      );

    if (features.length > 0) {
      var coordinates = features[0].geometry.coordinates.slice();
      coordinates[0] = parseFloat(coordinates[0]);
      coordinates[1] = parseFloat(coordinates[1]);
    }

    let bridge;
    let minD = Number.MAX_VALUE;

    if (clickedFeature) {
      bridgeData.map(f => {
        let distance = calculateDistance(
          f.lat,
          f.long,
          coordinates[1],
          coordinates[0]
        );
        if (distance <= minD) {
          bridge = f;
          minD = distance;
        }
      });
    }
    setDetailsData(bridge);
  };

  function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371000; // metres
    var φ1 = (lat1 * Math.PI) / 180;
    var φ2 = (lat2 * Math.PI) / 180;
    var Δφ = ((lat2 - lat1) * Math.PI) / 180;
    var Δλ = ((lon2 - lon1) * Math.PI) / 180;

    var a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;
    return d;
  }
  let screenHeight = '90vh';
  let screenWidth = '90%';
  let disappear = '';
  if (window.innerWidth < 600) {
    screenHeight = '70vh';
    screenWidth = '100%';
    disappear = 'hidden';
  }

  function myFunction() {
    var x = document.getElementById('show');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }
  function handleClose(e) {
    console.log(e);
    if (e.key === 'Escape') {
      setFullscreen(false);
    }
  }

  return (
    <div className="mapbox-react">
      <ReactMapGL
        id="map"
        className="map"
        ref={mapRef}
        {...viewport}
        width={screenWidth}
        height={screenHeight}
        mapStyle="mapbox://styles/jgertig/ckeughi4a1plr19qqsarcddky"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        interactiveLayerIds={[
          'complete',
          'rejected',
          'identified',
          'confirmed',
          'prospecting',
          'underConstruction',
        ]}
        onClick={handleClick}
        maxZoom={16}
        minZoom={6.5}
        onLoad={() => {
          if (!mapRef) return;
          const map = mapRef.current.getMap();
          map.loadImage(bridgeIconGreen, (error, image) => {
            if (error) return;
            map.addImage('greenPin', image);
          });
          map.loadImage(bridgeIconRed, (error, image) => {
            if (error) return;
            map.addImage('redPin', image);
          });
          map.loadImage(bridgeIconPurple, (error, image) => {
            if (error) return;
            map.addImage('purplePin', image);
          });
          map.loadImage(bridgeIconOrange, (error, image) => {
            if (error) return;
            map.addImage('orangePin', image);
          });
          map.loadImage(bridgeIconGray, (error, image) => {
            if (error) return;
            map.addImage('grayPin', image);
          });
          map.loadImage(bridgeIconBlue, (error, image) => {
            if (error) return;
            map.addImage('bluePin', image);
          });
        }}
      >
        {geojsonComplete.features && (
          <Source id="completeData" type="geojson" data={geojsonComplete}>
            <Layer
              id="complete"
              type="symbol"
              layout={{ 'icon-image': 'greenPin', 'icon-size': 0.35 }}
            />
          </Source>
        )}
        {geojsonRejected.features && (
          <Source id="rejectedData" type="geojson" data={geojsonRejected}>
            <Layer
              id="rejected"
              type="symbol"
              layout={{ 'icon-image': 'redPin', 'icon-size': 0.35 }}
            />
          </Source>
        )}
        {geojsonConfirmed.features && (
          <Source id="confirmedData" type="geojson" data={geojsonConfirmed}>
            <Layer
              id="confirmed"
              type="symbol"
              layout={{ 'icon-image': 'purplePin', 'icon-size': 0.35 }}
            />
          </Source>
        )}
        {geojsonIdentified.features && (
          <Source id="identifiedData" type="geojson" data={geojsonIdentified}>
            <Layer
              id="identified"
              type="symbol"
              layout={{ 'icon-image': 'orangePin', 'icon-size': 0.35 }}
            />
          </Source>
        )}
        {geojsonProspecting.features && (
          <Source id="prospectingData" type="geojson" data={geojsonProspecting}>
            <Layer
              id="prospecting"
              type="symbol"
              layout={{ 'icon-image': 'bluePin', 'icon-size': 0.35 }}
            />
          </Source>
        )}
        {geojsonUnderConstruction.features && (
          <Source
            id="underConstructionData"
            type="geojson"
            data={geojsonUnderConstruction}
          >
            <Layer
              id="underConstruction"
              type="symbol"
              layout={{ 'icon-image': 'grayPin', 'icon-size': 0.35 }}
            />
          </Source>
        )}

        <div className="toggle">
          <MenuOutlined
            onClick={() => {
              myFunction();
            }}
            style={{ fontSize: '20px' }}
          />
        </div>
        <div
          className="fullScreenControl"
          onClick={() => setFullscreen(!fullscreen)}
        >
          <FullscreenControl />
        </div>
        <div className="navigationControl">
          <NavigationControl />
        </div>
        <div className={`desktop ${disappear}`} id="show">
          <div ref={geocoderContainerRef} className="search-bar">
            <Geocoder
              mapRef={mapRef}
              countries="rw"
              marker={false}
              onViewportChange={handleViewportChange}
              // width="10%"
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
        </div>
        {fullscreen && detailsData && <DetailsInfo />}
      </ReactMapGL>
      {!fullscreen && detailsData && <DetailsInfo />}
    </div>
  );
};

export default RenderMap;
