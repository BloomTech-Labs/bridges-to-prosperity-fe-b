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
          <h2>{detailsData.bridge_site_name}</h2>

          <p>
            {detailsData.province} - {detailsData.district}
          </p>
          <p>{detailsData.project_stage}</p>

          {/* Conditional Render of Image if availible */}
          <div className="bridge-image">
            {detailsData.bridge_image ? (
              <div className="bridge-image">
                <img alt="bridge_image" src={`${detailsData.bridge_image}`} />
              </div>
            ) : null}
          </div>

          <p>{detailsData.bridge_type}</p>

          {/* Conditional render of substage if known */}
          {detailsData.sub_stage !== '?' ? (
            <p>{detailsData.sub_stage}</p>
          ) : null}

          {/* Conditional Render of GDP Button */}
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
    </Draggable>
  );
};

export default DetailsInfo;
