import React, { useContext, useState } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import DataViz from '../ExampleDataViz/RenderDataViz';
import DetailsSection from '../../common/DetailsSection';
import Navigation from '../../common/Navigation';
import { Link } from 'react-router-dom';

const initialState = {
  name: 'Test Title',
  details: 'Details Testing',
};

const Welcome = () => {
  const { bridgeData, setBridgeData } = useContext(BridgesContext);
  const [details, setDetails] = useState(initialState);
  return (
    <div>
      <Navigation />
      <h1>Welcome!</h1>
      <DataViz />
      <DetailsSection props={details} />
    </div>
  );
};

export default Welcome;
