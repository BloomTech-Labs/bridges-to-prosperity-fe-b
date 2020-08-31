import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import React, { useState, useRef, useCallback, useContext } from 'react';
import ReactMapGL, { FullscreenControl, NavigationControl } from 'react-map-gl';
import Geocoder from 'react-map-gl-geocoder';
import { BridgesContext } from '../../../state/contexts/bridgesContext';
import Markers from '../../common/Markers';

const DataVizReact = () => {
  const [viewport, setViewport] = useState({
    latitude: -1.9444,
    longitude: 30.0616,
    zoom: 7.8,
    bearing: 0,
    pitch: 0,
  });

  const { bridgeData, setBridgeData } = useContext(BridgesContext);
  const geocoderContainerRef = useRef();
  const mapRef = useRef();
  const handleViewportChange = useCallback(
    newViewport => setViewport(newViewport),
    []
  );
  return (
    <div className="mapbox-react">
      <div
        ref={geocoderContainerRef}
        // style={{ position: 'absolute', left: 10, top: 10, zIndex: 0 }}
      />
      <ReactMapGL
        ref={mapRef}
        {...viewport}
        width="1000px"
        height="800px"
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={handleViewportChange}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <div style={{ position: 'absolute', right: 10, top: 10 }}>
          <FullscreenControl onClick={() => console.log('yes?')} />
        </div>{' '}
        <div style={{ position: 'absolute', right: 10, top: 50 }}>
          <NavigationControl />
        </div>
        <Markers onClick={() => console.log('yes')} bridgeData={bridgeData} />
        <Geocoder
          mapRef={mapRef}
          countries="rw"
          marker={false}
          containerRef={geocoderContainerRef}
          onViewportChange={handleViewportChange}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          position="top-left"
        />
      </ReactMapGL>
    </div>
  );
};

export default DataVizReact;
