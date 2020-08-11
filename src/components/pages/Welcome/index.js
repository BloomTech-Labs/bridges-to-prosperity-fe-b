import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';

const Welcome = () => {
  const { bridgeData, setBridgeData } = useContext(BridgesContext);
  return <h1>Welcome!</h1>;
};

export default Welcome;
