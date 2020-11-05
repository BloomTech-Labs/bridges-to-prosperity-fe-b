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
        //Shaping data for echarts

        let shapedData = {
          x: [],
          y: [],
        };

        let keys = Object.keys(response.data[0]);

        keys.sort();

        for (let i = 0; i < keys.length; i++) {
          shapedData.x[i] = parseInt(keys[i]);
          shapedData.y[i] = response.data[0][keys[i]];
        }

        setDetailsData({ ...detailsData, gdpData: shapedData });
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

          <div>
            <p>
              {detailsData.province} - {detailsData.district}
            </p>
          </div>

          <div></div>

          <div className="bridge-image">
            {detailsData.bridge_image ? (
              <div className="bridge-image">
                <img alt="bridge_image" src={`${detailsData.bridge_image}`} />
              </div>
            ) : (
              <div className="bridge-image">No Bridge Image</div>
            )}
          </div>

          <div className="bridge_info">
            <p className="info">
              <span className="infoLabel">Project Stage:</span>
              {detailsData.project_stage}
            </p>
            {/* <p className="info">
              <span className="infoLabel">Province:</span>
              {detailsData.province}
            </p>
            <p className="info">
              <span className="infoLabel">District:</span>
              {detailsData.district}
            </p> */}
            <p className="info">
              <span className="infoLabel">Bridge Type:</span>{' '}
              {detailsData.bridge_type}
            </p>
            <p className="info">
              <span className="infoLabel">Project Sub Stage:</span>{' '}
              {detailsData.sub_stage}
            </p>
            {detailsData.project_stage === 'Prospecting' ? (
              <p className="info">
                <span className="infoLabel"> GDP per Capita:</span>
                <button
                  className="dataIcon"
                  role="img"
                  style={{ fontSize: '1.2rem' }}
                  onClick={event => openData(event)}
                >
                  <span role="img" aria-label="graph">
                    📊
                  </span>
                </button>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </Draggable>
  );
};

export default DetailsInfo;
