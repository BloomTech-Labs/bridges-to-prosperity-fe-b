import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/contexts/bridgesContext';

const Details = ({ props }) => {
  const { bridgeData } = useContext(BridgesContext);

  return (
    <div className="detailsContainer">
      <h3>Bridge Details</h3>
      <ul>
        <li>Item</li>
      </ul>
    </div>
  );
};

export default Details;
