import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="link-list">
          <a href="https://bridgestoprosperity.org/" target="_">
            Bridges To Prosperity
          </a>
          <a href="https://bridgestoprosperity.org/join-us/" target="_">
            Join Us
          </a>
          <a href="https://bridgestoprosperity.org/faqs/" target="_">
            FAQS
          </a>
        </div>
        <div className="link-list">
          <a href="https://bridgestoprosperity.org/contact/" target="_">
            Contact Us
          </a>
          <a href="https://bridgestoprosperity.org/financials/" target="_">
            Financials
          </a>
          <a
            href="https://bridgestoprosperity.org/donor-privacy-policy/"
            target="_"
          >
            Donor Privacy Policy
          </a>
        </div>
        <img
          src={require('../../styles/imgs/charity_logo.png')}
          alt="Four Star Charity Logo"
        ></img>
      </div>
      <div className="info">
        <img
          src={require('../../styles/imgs/B2P_PrimaryLockup_Green-White.png')}
          alt="Bridges of Prosperity Logo"
        />
        <p className="bodyParagraph">
          Bridges to Prosperity envisions a world where poverty caused by rural
          isolation no longer exists. Rural isolation is a root cause of
          poverty, and we believe that connection is the foundation to
          opportunity. We work with local communities, partners and foundations,
          to build footbridges that connect residents to education, health care
          and economic opportunity. With a sophisticated data collection and
          evaluation program, we’re able to prove that the value and impact of
          our work is sustained long after the opening celebration.
        </p>
        <p className="address">
          3858 Walnut St., Suite 219
          <br />
          Denver, Colorado 80205
          <br /> EIN: 54-2031102
        </p>
        <p className="reserved">
          2018 © Bridges to Prosperity. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
