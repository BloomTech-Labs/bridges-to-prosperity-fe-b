import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import Draggable from 'react-draggable';

const DetailsInfo = () => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);
  return (
    <Draggable>
      <div className="detailsContainer">
        <div
          className="closeButton"
          onKeyDown={e => {
            console.log(e);
          }}
          onClick={() => setDetailsData(null)}
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="detailsInfo">
          <strong>{detailsData.bridge_site_name}</strong>
          <div className="bridge-image">
            <img
              alt="bridge_image_needed"
              src={require('../../../styles/imgs/bridgeIconGreenBig.png')}
            />
          </div>

          {/* <p>Bridge Site Name: {detailsData.bridge_site_name}</p> */}
          <div>
            <p>Bridge Type: {detailsData.bridge_type}</p>
            <p>Project Stage: {detailsData.project_stage}</p>
            <p>Project Sub Stage: {detailsData.sub_stage}</p>
            <p>Province: {detailsData.province}</p>
            <p>District: {detailsData.district}</p>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DetailsInfo;
