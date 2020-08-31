import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import BridgeImage from './BridgeImage';
const Markers = ({ bridgeData }) => {
  return (
    <>
      {bridgeData &&
        bridgeData.map(marker => {
          return (
            <Marker
              key={marker.id}
              latitude={marker.lat}
              longitude={marker.long}
              onClick={() => {}}
            >
              <BridgeImage marker={marker} />
            </Marker>
          );
        })}
    </>
  );
};

export default Markers;
