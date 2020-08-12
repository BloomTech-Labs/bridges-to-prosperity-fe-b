import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import DataViz from '../ExampleDataViz/RenderDataViz';
import { Link } from 'react-router-dom';

const Welcome = () => {
  const { bridgeData, setBridgeData } = useContext(BridgesContext);
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/login">Login</Link>
      <DataViz />
    </div>
  );
};

export default Welcome;
