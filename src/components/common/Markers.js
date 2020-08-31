import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import BridgeImage from './BridgeImage';
const Markers = ({ bridgeData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(0);
  console.log({ selected });
  return (
    <>
      {showPopup &&
        bridgeData.map((marker, index) => {
          if (index === selected.index) {
            console.log(index, '===', selected);
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
                  <div>HIIIII</div>
                </Popup>
              </div>
            );
          }

          return <></>;
        })}
      {bridgeData &&
        bridgeData.map((marker, index) => {
          console.log(marker.id);
          return (
            <div key={marker.project_code + 4}>
              <Marker
                key={marker.project_code}
                latitude={marker.lat}
                longitude={marker.long}
                onClick={() => {}}
              >
                <BridgeImage
                  setSelected={setSelected}
                  setShowPopup={setShowPopup}
                  index={index}
                  marker={marker}
                />
              </Marker>
            </div>
          );
        })}
    </>
  );
};

export default Markers;
