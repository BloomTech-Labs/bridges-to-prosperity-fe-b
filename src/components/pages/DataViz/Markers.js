import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import BridgeImage from './BridgeImage';

const Markers = ({ bridgeData, setViewport }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(0);

  return (
    <>
      {bridgeData &&
        bridgeData.map((marker, index) => {
          return (
            <div key={index}>
              <Marker latitude={marker.lat} longitude={marker.long}>
                <BridgeImage
                  setViewport={setViewport}
                  marker={marker}
                  setSelected={setSelected}
                  setShowPopup={setShowPopup}
                  index={index}
                />
              </Marker>
            </div>
          );
        })}
      {showPopup &&
        bridgeData.map((marker, index) => {
          if (index === selected.index) {
            return (
              <div key={index}>
                <Popup
                  key={index}
                  latitude={marker.lat}
                  longitude={marker.long}
                  anchor="bottom-right"
                >
                  <div className="popup">
                    {/* This is the information where stackholder found them most valuable*/}
                    <p>Province: {marker.province}</p>
                    <p>District: {marker.district}</p>
                    <p>Status: {marker.project_stage}</p>
                    {/* bridge site name is coming soon */}
                  </div>
                </Popup>
              </div>
            );
          }
          return null;
        })}
    </>
  );
};

export default Markers;
