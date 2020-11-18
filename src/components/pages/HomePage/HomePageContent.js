import React, { useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { RenderMap } from '../DataViz/index';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
//import { getDSData } from '../../../api/index';
import BridgesStatusChart from '../DataViz/BridgeStatusChart';
import Axios from 'axios';

function rename(data) {
  //this function is to rename key so the DS api can connect to the exsiting components.
  data['id'] = data['project_code'];
  data['country'] = 'Rwanda';
  data['bridge_site_name'] = data['bridge_name'];
  data['lat'] = data['latitude'];
  data['long'] = data['longitude'];
  delete data['bridge_name'];
  delete data['latitude'];
  delete data['longitude'];
  return data
}

const HomePageReact = () => {
  const { setBridgeData } = useContext(BridgesContext);

  useEffect(() => {
    //getDSData(`${process.env.REACT_APP_API_URI}/bridges`).then(data => {
    //  setBridgeData(data);
   // });
    //This axios call is to get data from DS api instead of the web backend
    //it also renames the keys to fit in the existing code
    Axios.get(process.env.REACT_APP_DS_API).then(res => {
      const renamedData = res.data.map(item => rename(item))
     setBridgeData(renamedData);
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
