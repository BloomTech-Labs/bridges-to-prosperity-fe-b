import React, { useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { RenderMap } from '../DataViz/index';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import { getDSData } from '../../../api/index';
import { Link } from 'react-router-dom';

const HomePageReact = () => {
  const { setBridgeData } = useContext(BridgesContext);

  useEffect(() => {
    getDSData('https://bridges-b-api.herokuapp.com/bridges').then(data => {
      setBridgeData(data);
    });
  }, [setBridgeData]);

  return (
    <div className="container">
      <Link to="/table">table</Link>
      <Navigation />
      <RenderMap />
      <Footer />
    </div>
  );
};

export default HomePageReact;
