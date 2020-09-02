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
            <div key={marker.project_code + 4}>
              <Marker
                key={marker.project_code}
                latitude={marker.lat}
                longitude={marker.long}
                onClick={() => {}}
              >
                <BridgeImage
                  setViewport={setViewport}
                  marker={marker}
                  style={{ postion: 'relative', zIndex: 3 }}
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
            // console.log(index, '===', selected);
            return (
              <div key={marker.project_code}>
                <Popup
                  key={index}
                  latitude={marker.lat}
                  longitude={marker.long}
                  closeButton={true}
                  closeOnClick={false}
                  onClose={() => setShowPopup(false)}
                  anchor="bottom-right"
                >
                  <div
                    className="popup"
                    style={{ postion: 'relative', zIndex: 2 }}
                  >
                    {/* This is the information where stackholder found them most valuable*/}
                    <p>Province: {marker.province}</p>
                    <p>District: {marker.district}</p>
                    <p>Status: {marker.project_stage}</p>
                    {/* bridge side name is coming soon */}
                  </div>
                </Popup>
              </div>
            );
          }

          return <></>;
        })}
    </>
  );
};

export default Markers;
