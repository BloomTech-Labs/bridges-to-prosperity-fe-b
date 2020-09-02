import React, { useContext } from 'react';
import { LinearInterpolator } from 'react-map-gl';
import { BridgesContext } from '../../../state/bridgesContext';

const BridgeImage = ({
  marker,
  setShowPopup,
  index,
  setViewport,
  setSelected,
}) => {
  const { setDetailsData } = useContext(BridgesContext);

  return (
    <>
      <img
        alt="bridge-icon"
        className="bridgeImg"
        onClick={() => {
          setDetailsData(marker);
          setViewport({
            latitude: marker.lat,
            longitude: marker.long,
            transitionDuration: 1500,
            transitionInterpolator: new LinearInterpolator(),
            zoom: 11,
          });
        }}
        onMouseLeave={() => {
          setShowPopup(false);
        }}
        onMouseEnter={() => {
          setShowPopup(true);
          setSelected({ index });
        }}
        src={require('../../../styles/imgs/bridgeIconGreen.png')}
      />
    </>
  );
};

export default BridgeImage;
