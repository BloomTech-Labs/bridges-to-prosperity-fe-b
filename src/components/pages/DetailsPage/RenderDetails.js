import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { useHistory } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';

function DetailsCard() {
  const history = useHistory();
  const { detailsData } = useContext(BridgesContext);

  if (!detailsData) {
    history.push(`/table/`);
  }

  return (
    <div>
      <Navigation />
      {detailsData && (
        <div>
          <div>{detailsData.b2p_bridge_id}</div>
          <div>{detailsData.id}</div>
          <div>{detailsData.project_code}</div>
          <div>{detailsData.country}</div>
          <div>{detailsData.district}</div>
          <div>{detailsData.province}</div>
          <div>{detailsData.sector}</div>
          <div>{detailsData.lat}</div>
          <div>{detailsData.long}</div>
          <div>{detailsData.project_stage}</div>
          <div>{detailsData.bridge_type}</div>
          <div>{detailsData.span}</div>
          <div>Communities Served: </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default DetailsCard;
