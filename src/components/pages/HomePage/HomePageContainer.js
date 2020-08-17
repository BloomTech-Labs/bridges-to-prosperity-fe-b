import React, { useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import DataViz from '../DataViz/RenderDataViz';
import DetailsSection from './DetailsSection';
import Navigation from '../../common/Navigation';
import { getDSData } from '../../../api/index';

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

const HomePage = () => {
  const { setBridgeData } = useContext(BridgesContext);

  useEffect(() => {
    getDSData('https://bridges-to-prosperity-core.herokuapp.com/bridges').then(
      data => {
        setBridgeData(data);
      }
    );
  }, []);

  return (
    <div>
      <Navigation />
      <DataViz />
      <DetailsSection />
    </div>
  );
};

export default HomePage;
