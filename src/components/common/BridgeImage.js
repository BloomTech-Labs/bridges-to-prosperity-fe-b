import React, { useState } from 'react';

const BridgeImage = () => {
  const [changeSize, setChangeSize] = useState(false);
  return (
    <>
      {changeSize ? (
        <img
          onClick={() => {
            setChangeSize(false);
          }}
          width={'35px'}
          height={'35px'}
          src="https://img.icons8.com/ios-filled/50/000000/bridge.png"
        />
      ) : (
        <img
          onClick={() => {
            setChangeSize(true);
          }}
          width={'25px'}
          height={'25px'}
          src="https://img.icons8.com/ios-filled/50/000000/bridge.png"
        />
      )}
    </>
  );
};

export default BridgeImage;
