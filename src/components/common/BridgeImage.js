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
            width={'45px'}
            height={'45px'}
            //#48914A
            src={require('../../styles/imgs/bridgeIconGreen.png')}
          />
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
            width={'35px'}
            height={'35px'}
            src={require('../../styles/imgs/bridgeIconGreen.png')}
          />
        </>
      )}
    </>
  );
};

export default BridgeImage;
