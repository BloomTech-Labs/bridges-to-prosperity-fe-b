import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import Draggable from 'react-draggable';
import axios from 'axios';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

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
      <Card className="detailsContainer">
        <CardActions>
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
        </CardActions>
        <CardContent>
          <Typography variant="h4" color="primary" paragraph>
            {detailsData.bridge_site_name}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Location:
          </Typography>
          <Typography>
            {detailsData.province} - {detailsData.district}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Status:
          </Typography>
          <Typography>{detailsData.project_stage}</Typography>
          <Typography variant="subtitle2" color="primary">
            Crossing injuries in last 3 years:
          </Typography>
          <Typography>
            {detailsData.river_crossing_injuries_in_last_3_years}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Crossing deaths in last 3 years:{' '}
          </Typography>
          <Typography>
            {detailsData.river_crossing_deaths_in_last_3_years}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Market access blocked by river:{' '}
          </Typography>
          <Typography>{detailsData.market_access_blocked_by_river}</Typography>
          <Typography variant="subtitle2" color="primary">
            Education access blocked by river:{' '}
          </Typography>
          <Typography>
            {' '}
            {detailsData.education_access_blocked_by_river}
          </Typography>
          <Typography variant="subtitle2" color="primary">
            Health access blocked by river:{' '}
          </Typography>
          <Typography paragraph>
            {detailsData.health_access_blocked_by_river}
          </Typography>
          {/* Conditional Render of Image if availible */}
          {detailsData.bridge_image ? (
            <CardMedia component="img" src={`${detailsData.bridge_image}`} />
          ) : null}
          <Typography variant="subtitle2">{detailsData.bridge_type}</Typography>
          {/* Conditional render of substage if known */}
          {detailsData.sub_stage !== '?' ? (
            <p>{detailsData.sub_stage}</p>
          ) : null}
          {/* Conditional Render of GDP Button */}
          {detailsData.project_stage === 'Prospecting' ? (
            <p className="info">
              <span className="infoLabel"> GDP per Capita: </span>
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
        </CardContent>
      </Card>
    </Draggable>
  );
};

export default DetailsInfo;
