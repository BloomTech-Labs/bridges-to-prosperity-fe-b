import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback, useContext } from 'react';
import ReactMapGL, {
  FullscreenControl,
  NavigationControl,
  Layer,
} from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { BridgesContext } from '../../../state/contexts/bridgesContext';
import { DetailsContext } from '../../../state/contexts/detailsContext';
import Markers from '../../common/Markers';

const DataVizReact = props => {
  const [viewport, setViewport] = useState({
    latitude: -1.9444,
    longitude: 30.0616,
    zoom: 7.8,
    bearing: 0,
    pitch: 0,
  });
  const parkLayer = {
    id: 'landuse_park',
    type: 'fill',
    source: 'mapbox',
    // 'source-layer': 'landuse',
    // filter: ['==', 'class', 'park'],
  };
  const { parkColor = '#dea' } = props;
  const { detailsData, setDetailsData } = useContext(DetailsContext);
  const { bridgeData, setBridgeData } = useContext(BridgesContext);
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    newViewport => setViewport(newViewport),
    []
  );
  console.log(detailsData);
  return (
    <div className="mapbox-react">
      <ReactMapGL
        id="map"
        ref={mapRef}
        {...viewport}
        width="90%"
        height="800px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        {detailsData && (
          <div className="descriptionContainer">
            <div onClick={() => setDetailsData(null)}>
              <i class="fas fa-times"></i>
            </div>

            <p className="descriptionBox">{detailsData.district} </p>
          </div>
        )}
        <div
          ref={geocoderContainerRef}
          style={{ position: 'absolute', left: 10, top: 10, zIndex: 0 }}
        >
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
        <div style={{ position: 'absolute', right: 10, top: 10 }}>
          <FullscreenControl onClick={() => console.log('yes?')} />
        </div>{' '}
        <div style={{ position: 'absolute', right: 10, top: 50 }}>
          <NavigationControl />
        </div>
        <Markers style={{ position: 'relative' }} bridgeData={bridgeData} />
      </ReactMapGL>
    </div>
  );
};

export default DataVizReact;
