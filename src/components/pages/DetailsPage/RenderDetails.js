import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { useHistory, Link } from 'react-router-dom';
import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import bridgeIconGreen from '../../../styles/imgs/bridgeIconGreen.png';
function DetailsCard() {
  const history = useHistory();
  const { detailsData } = useContext(BridgesContext);

  if (!detailsData) {
    history.push(`/table/`);
  }
  console.log(detailsData);
  return (
    <>
      {/* 







district_id: 41
form_name: "Project Assessment - 2018.8.11"
id: 3
individuals_directly_served: "0"
lat: -1.72053
long: 30.08124
project_code: "1007651"
project_stage: "Rejected"
province: "Northern Province"
sector: "Buyoga"
sector_id: "4104"
span: 8
sub_stage: "Technical"
village: "Gipfundo"
village_id: "41040304" */}
      <Navigation />
      <div className="mainContainer">
        {detailsData && (
          <div className="cardContainer">
            <div className="top">
              <p>Project Code: {detailsData.project_code}</p>
            </div>
            <div className="title">
              {detailsData.image ? (
                <div className="bridge-image">
                  <img alt="bridge_image_needed" src={`${detailsData.image}`} />
                  Bridge image is unavailiable
                </div>
              ) : (
                <div className="bridge-image">
                  <img
                    alt="bridge_image_needed"
                    src={require('../../../styles/imgs/bridgeIconGreen.png')}
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
