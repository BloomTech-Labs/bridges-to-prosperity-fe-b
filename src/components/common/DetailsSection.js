import React, { useContext } from 'react';
import { Divider } from 'antd';
import { BridgesContext } from '../../state/bridgesContext';

const Details = ({ props }) => {
  const { bridgeData } = useContext(BridgesContext);

  return (
    <div className="detailsContainer">
      <Divider />
      {bridgeData ? (
        <div className="detailsInfo">
          <h3>{bridgeData.name}</h3>
          <p>
            individuals Directly Served: {bridgeData.individualsDirectlyServed}
          </p>
          <p>Stage: {bridgeData.stage}</p>
          <p>Sub Stage: {bridgeData.subStage}</p>
          <p>CommunitiesServed:</p>
          <ul>
            {bridgeData.communitiesServed.map(community => (
              <li>{community.name}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Details;
