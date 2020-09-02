import React, { useState, useContext } from 'react';
import ReactMapGL, { Popup, LinearInterpolator } from 'react-map-gl';
import { DetailsContext } from '../../../state/contexts/detailsContext';

const BridgeImage = ({
  marker,
  setShowPopup,
  index,
  setViewport,
  setSelected,
}) => {
  const { detailsDate, setDetailsData } = useContext(DetailsContext);

  const [changeSize, setChangeSize] = useState(false);

  return (
    <>
      {changeSize ? (
        <>
          <img
            alt="bridge-icon"
            onClick={() => {
              setDetailsData(marker);
              setViewport({
                latitude: marker.lat,
                longitude: marker.long,
                transitionDuration: 2000,
                transitionInterpolator: new LinearInterpolator(),
                zoom: 11,
              });
            }}
            onMouseLeave={() => {
              setChangeSize(false);
              setShowPopup(false);
            }}
            width={'45px'}
            height={'45px'}
            //#48914A
            src={require('../../../styles/imgs/bridgeIconGreen.png')}
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
            src={require('../../../styles/imgs/bridgeIconGreen.png')}
          />
        </>
      )}
    </>
  );
};

export default BridgeImage;
