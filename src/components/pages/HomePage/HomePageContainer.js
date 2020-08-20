import React, { useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/contexts/bridgesContext';
import DataViz from '../DataViz/RenderDataViz';
import DetailsSection from './DetailsSection';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import { getDSData } from '../../../api/index';

const HomePage = () => {
  const { setBridgeData } = useContext(BridgesContext);

  useEffect(() => {
    getDSData('https://bridges-to-prosperity-core.herokuapp.com/bridges').then(
      data => {
        setBridgeData(data);
      }
    );
  }, [setBridgeData]);

  return (
    <div>
      <Navigation />
      <div className="homeContainer">
        <DataViz />
        <DetailsSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
