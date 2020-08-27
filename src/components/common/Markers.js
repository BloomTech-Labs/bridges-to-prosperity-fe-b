import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import BridgeImage from './BridgeImage';
const Markers = ({ bridgeData }) => {
  console.log({ bridgeData });

  return (
    <>
      {bridgeData &&
        bridgeData.map(marker => {
          return (
            <Marker
              key={marker.id}
              latitude={marker.lat}
              longitude={marker.long}
            >
              <BridgeImage />
            </Marker>
          );
        })}
    </>
  );
};

export default Markers;
