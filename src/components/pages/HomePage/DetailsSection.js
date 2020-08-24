import React, { useContext } from 'react';
import { DetailsContext } from '../../../state/contexts/detailsContext';

const Details = ({ props }) => {
  const { detailsData } = useContext(DetailsContext);
  return (
    <div className="detailsContainer">
      <h3>Bridge Details</h3>
      {detailsData ? (
        <div>
          {detailsData.Province ? <p>{detailsData.Province}</p> : null}
          <p>District: {detailsData.district}</p>
          <p>Project Stage: {detailsData.project_stage}</p>
          {detailsData.sub_stage ? (
            <p>Project Sub-Stage: {detailsData.sub_stage}</p>
          ) : null}
          {detailsData.type ? <p>Type: {detailsData.type}</p> : null}
          {detailsData.individuals_served ? (
            <p>individuals Served: {detailsData.individuals_served}</p>
          ) : null}
          {detailsData.communities_served ? (
            <div>
              <p>Communities Served: </p>
              <ul>
                {detailsData.communities_served.map(community => (
                  <li key={community.id}>{community.name}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {detailsData.span !== 'NaN' ? <p>Span: {detailsData.span}</p> : null}
        </div>
      ) : null}
    </div>
  );
};

export default Details;
