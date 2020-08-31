import React, { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';

const BridgeImage = ({ marker, setShowPopup, index, setSelected }) => {
  // console.log(marker);
  const [changeSize, setChangeSize] = useState(false);
  // const [showPopup, setShowPopup] = useState(true);
  return (
    <>
      {changeSize ? (
        <>
          <img
            alt="bridge-icon"
            onMouseLeave={() => {
              setChangeSize(false);
              setShowPopup(false);
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
            onMouseEnter={() => {
              setChangeSize(true);
              setShowPopup(true);
              setSelected({ index });
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
