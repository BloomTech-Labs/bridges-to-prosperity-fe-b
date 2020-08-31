import React, { useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/contexts/bridgesContext';
import { DataVizReact } from '../DataViz-react/index';
// import DetailsSection from './DetailsSection';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import { getDSData } from '../../../api/index';

const HomePageReact = () => {
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
        <DataVizReact />
        {/* <DetailsSection /> */}
      </div>
      <Footer />
    </div>
  );
};

export default HomePageReact;
