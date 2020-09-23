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
              <p>Project Code: {detailsData.project_code}</p>
            </div>
            <div className="title">
              {detailsData.bridge_image ? (
                <div className="bridge-image">
                  <img
                    alt="bridge_image_needed"
                    src={`${detailsData.bridge_image}`}
                  />
                  Bridge image is unavailiable
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

              <div className="bridge-title-section">
                <div>
                  <p>Bridge Site Name: {detailsData.bridge_site_name}</p>
                  <p>Bridge Type: {detailsData.bridge_type}</p>
                  <p>Project Stage: {detailsData.project_stage}</p>
                  <p>Project Sub Stage: {detailsData.sub_stage}</p>
                  <p>Latitude: {detailsData.lat}</p>
                  <p>Longitude: {detailsData.long}</p>
                  <p>Span: {detailsData.span}</p>
                  <p>
                    Individuals Directly Served:{' '}
                    {detailsData.individuals_directly_served}
                  </p>
                </div>
              </div>
            </div>
            <div className="info">
              <div className="column">
                <p>Country: {detailsData.country}</p>
                <p>Province: {detailsData.province}</p>
                <p>District: {detailsData.district}</p>
                <p>District id: {detailsData.district_id}</p>
                <p>Sector: {detailsData.sector}</p>
                <p>Sector id: {detailsData.sector_id}</p>
              </div>

              <div className="column">
                <p>Cell: {detailsData.cell}</p>
                <p>Cell id: {detailsData.cell_id}</p>
                <p>Village: {detailsData.village}</p>
                <p>Village id: {detailsData.village_id}</p>
              </div>
            </div>
            <div className="communitiesServed">
              <p>Communities Served: Unavailiable at the moment</p>
            </div>
            <div className="internal-data">
              <p>Form name: {detailsData.form_name}</p>
              <p>Case Safeied Form: {detailsData.casesafeid_form}</p>
              <p>Bridge Opportunity Id: {detailsData.bridge_opportunity_id}</p>
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
