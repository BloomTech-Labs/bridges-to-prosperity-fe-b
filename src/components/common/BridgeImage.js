import React, { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';

const BridgeImage = ({ marker }) => {
  console.log(marker);
  const [changeSize, setChangeSize] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      {changeSize ? (
        <>
          <img
            alt="bridge-icon"
            onClick={() => {
              setChangeSize(false);
              console.log('yes/');
            }}
            width={'35px'}
            height={'35px'}
            src="https://img.icons8.com/ios-filled/50/000000/bridge.png"
          />
          {/* <Popup
            latitude={marker.lat}
            longitude={marker.long}
            closeButton={true}
            closeOnClick={false}
            onClose={() => setShowPopup(false)}
            anchor="top"
          >
            <div>You are here</div>
          </Popup> */}
        </>
      ) : (
        <>
          <img
            alt="bridge-icon"
            onClick={() => {
              setChangeSize(true);
            }}
            width={'25px'}
            height={'25px'}
            src="https://img.icons8.com/ios-filled/50/000000/bridge.png"
          />
        </>
      )}
    </>
  );
};

export default BridgeImage;
