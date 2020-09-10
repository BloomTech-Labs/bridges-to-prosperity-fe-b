import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';

const DetailsInfo = () => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);
  return (
    <div className="detailsContainer">
      <div onClick={() => setDetailsData(null)}>
        <i className="fas fa-times"></i>
      </div>

      <div className="detailsInfo">
        <p>Province: {detailsData['Province']}</p>
        <p>District: {detailsData['District']}</p>
        <p>Status: {detailsData['Project Stage']}</p>
      </div>
    </div>
  );
};

export default DetailsInfo;
