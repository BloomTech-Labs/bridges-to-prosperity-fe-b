import React, { useContext } from 'react';
import Draggable from 'react-draggable';

const DetailsInfo = props => {
  return (
    <Draggable>
      <div className="detailsContainer">
        <div className="closeButton">
          <i className="fas fa-times"></i>
        </div>

        <div className="detailsInfo">
          <h2>
            <strong>Bridge X's Data</strong>
            <p>
              {props.gdpData
                ? 'Data loaded into state.'
                : 'Failed to load data.'}
            </p>
          </h2>
        </div>
      </div>
    </Draggable>
  );
};

export default DetailsInfo;
