import React, { useContext, useState, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import DataViz from '../ExampleDataViz/RenderDataViz';
import DetailsSection from '../../common/DetailsSection';
import Navigation from '../../common/Navigation';
import { Link } from 'react-router-dom';

const bridgeSite = {
  id: 1014107,
  name: 'Buzi',
  type: 'Suspended',
  stage: 'Rejected',
  subStage: 'Technical',
  individualsDirectlyServed: 0.0,
  span: '',
  latitude: -2.42056,
  longitude: 28.9662,
  communitiesServed: [
    {
      id: 22050101,
      name: 'Agahehe',
    },
    {
      id: 22050102,
      name: 'Kabacuzi',
    },
    {
      id: 22050103,
      name: 'Kamutozo',
    },
    {
      id: 22050104,
      name: 'Kamweko',
    },
  ],
};

const Welcome = () => {
  const { setBridgeData } = useContext(BridgesContext);

  useEffect(() => {
    setBridgeData(bridgeSite);
  }, []);

  return (
    <div>
      <Navigation />
      <DataViz />
      <DetailsSection />
    </div>
  );
};

export default Welcome;
