import React, { useContext } from 'react';
import { DetailsContext } from '../../../state/contexts/detailsContext';

const Details = ({ props }) => {
  const { detailsData } = useContext(DetailsContext);
  console.log(detailsData);
  return (
    <div className="detailsContainer">
      <h3>Bridge Details</h3>
      {detailsData ? (
        <div>
          {detailsData.Province ? <p>{detailsData.Province}</p> : null}
          <p>District: {detailsData.district}</p>
          <p>Project Stage: {detailsData.project_stage}</p>
        </div>
      ) : null}
    </div>
  );
};

export default Details;
