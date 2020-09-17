import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { useHistory, Link } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';

function DetailsCard() {
  const history = useHistory();
  const { detailsData } = useContext(BridgesContext);

  if (!detailsData) {
    history.push(`/table/`);
  }

  return (
    <>
      <Navigation />
      <div className="mainContainer">
        {detailsData && (
          <div className="cardContainer">
            <div className="top">
              <p>Id: {detailsData.id}</p>
              <p>Bridge Opportunity Id: {detailsData.bridge_opportunity_id}</p>
              <p>Project Code: {detailsData.project_code}</p>
            </div>
            <div className="title">
              <div>
                <p>Bridge Site Name: {detailsData.bridge_site_name}</p>
                <p>Bridge Type: {detailsData.bridge_type}</p>
              </div>
              <div>
                <p>Project Stage: {detailsData.project_stage}</p>
                <p>Project Sub Stage: {detailsData.project_sub_stage}</p>
              </div>
            </div>
            <div className="info">
              <p>Country: {detailsData.country}</p>
              <p>District: {detailsData.district}</p>
              <p>Province: {detailsData.province}</p>
              <p>Sector: {detailsData.sector}</p>
              <p>Latitude: {detailsData.lat}</p>
              <p>Longitude: {detailsData.long}</p>
              <p>Span: {detailsData.span}</p>
              <p>
                Inpiduals Directly Served:{' '}
                {detailsData.inpiduals_directly_served}
              </p>
            </div>
            <div className="communitiesServed">
              <p>Communities Served: </p>
            </div>
            <div className="links">
              <Link to="/form">Edit</Link>
              <Link to="/table">Back</Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default DetailsCard;
