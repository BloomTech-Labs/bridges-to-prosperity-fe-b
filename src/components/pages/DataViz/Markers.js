import React, { useState } from 'react';
import { Marker, Popup } from 'react-map-gl';
import BridgeImage from './BridgeImage';

const Markers = React.memo(({ bridgeData, setViewport }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(0);
  return (
    <>
      {bridgeData &&
        bridgeData.map((marker, index) => {
          return marker['GPS (Latitude)'] & marker['GPS (Longitude)'] ? (
            <div key={index}>
              <Marker
                latitude={marker['GPS (Latitude)']}
                longitude={marker['GPS (Longitude)']}
              >
                <BridgeImage
                  setViewport={setViewport}
                  marker={marker}
                  setSelected={setSelected}
                  setShowPopup={setShowPopup}
                  index={index}
                />
              </Marker>
            </div>
          ) : null;
        })}
      {showPopup &&
        bridgeData.map((marker, index) => {
          if (index === selected.index) {
            return (
              <div key={index}>
                <Popup
                  key={index}
                  latitude={marker['GPS (Latitude)']}
                  longitude={marker['GPS (Longitude)']}
                  anchor="bottom-right"
                >
                  <div className="popup">
                    {/* This is the information where stackholder found them most valuable*/}
                    <p>Province: {marker['Province']}</p>
                    <p>District: {marker['District']}</p>
                    <p>Status: {marker['Project Stage']}</p>
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
});

export default Markers;
