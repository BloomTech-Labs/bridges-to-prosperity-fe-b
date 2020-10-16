import React, { useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { RenderMap } from '../DataViz/index';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import { getDSData } from '../../../api/index';
import BridgesStatusChart from '../DataViz/BridgeStatusChart';

const HomePageReact = () => {
  const { setBridgeData } = useContext(BridgesContext);

  useEffect(() => {
    getDSData(`${process.env.REACT_APP_API_URI}/bridges`).then(data => {
      setBridgeData(data);
    });
  }, [setBridgeData]);

  return (
    <div className="container">
      <Navigation />
      <RenderMap />
      <BridgesStatusChart />
      <Footer />
    </div>
  );
};

export default HomePageReact;
