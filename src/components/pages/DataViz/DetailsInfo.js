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
        <p>Province: {detailsData.province}</p>
        <p>District: {detailsData.district}</p>
        <p>Status: {detailsData.project_stage}</p>
      </div>
    </div>
  );
};

export default DetailsInfo;
