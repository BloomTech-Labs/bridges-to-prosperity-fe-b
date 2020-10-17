import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import Draggable from 'react-draggable';
import axios from 'axios';

const DetailsInfo = props => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);

  const openData = event => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/bridges/gdp/${detailsData.id}`)
      .then(response => {
        setDetailsData({ ...detailsData, gdpData: response.data[0] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <Draggable>
      <div className="detailsContainer">
        <div
          className="closeButton"
          onKeyDown={e => {
            console.log(e);
          }}
          onClick={() => {
            setDetailsData(null);
          }}
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="detailsInfo">
          <h2>
            <strong>{detailsData.bridge_site_name}</strong>
          </h2>
          <div className="bridge-image">
            {detailsData.bridge_image ? (
              <div className="bridge-image">
                <img alt="bridge_image" src={`${detailsData.bridge_image}`} />
              </div>
            ) : (
              <div className="bridge-image">
                <img
                  alt="bridge_image_needed"
                  src={require('../../../styles/imgs/bridgeIconGreenBig.png')}
                />
                Bridge image is unavailiable
              </div>
            )}
          </div>

          {/* <p>Bridge Site Name: {detailsData.bridge_site_name}</p> */}
          <div>
            <p>Project Stage: {detailsData.project_stage}</p>
            <p>Province: {detailsData.province}</p>
            <p>District: {detailsData.district}</p>
            <p>Bridge Type: {detailsData.bridge_type}</p>
            <p>Project Sub Stage: {detailsData.sub_stage}</p>
            <span role="img" onClick={event => openData(event)}>
              📊
            </span>
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DetailsInfo;
