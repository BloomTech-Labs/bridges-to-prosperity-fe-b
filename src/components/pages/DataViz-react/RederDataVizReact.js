import React, { useState, useEffect, useContext } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import { BridgesContext } from '../../../state/contexts/bridgesContext';
import { DetailsContext } from '../../../state/contexts/detailsContext';
import Markers from '../../common/Markers';
import { getDSData } from '../../../api/index';

const DataVizReact = () => {
  const { bridgeData, setBridgeData } = useContext(BridgesContext);

  const [viewport, setViewport] = useState({
    latitude: -1.9444,
    longitude: 30.0616,
    zoom: 7.8,
    bearing: 0,
    pitch: 0,
  });

  useEffect(() => {
    getDSData('https://bridges-to-prosperity-core.herokuapp.com/bridges').then(
      data => {
        setBridgeData(data);
      }
    );
  }, []);
  return (
    <ReactMapGL
      {...viewport}
      width="1000px"
      height="500px"
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
    >
      <Markers bridgeData={bridgeData} />
    </ReactMapGL>
  );
};

export default DataVizReact;
