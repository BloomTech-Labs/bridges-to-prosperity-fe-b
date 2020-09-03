import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <a href="https://bridgestoprosperity.org/join-us/">Join Us</a>
        <a href="https://bridgestoprosperity.org/faqs/">FAQS</a>
        <a href="https://bridgestoprosperity.org/contact/">Contact Us</a>
        <a href="https://bridgestoprosperity.org/financials/">Financials</a>
        <a href="https://bridgestoprosperity.org/donor-privacy-policy/">
          Donor Privacy Policy
        </a>
        <img
          src={require('../../styles/imgs/charity_logo.png')}
          alt="Four Star Charity Logo"
        ></img>
      </div>
      <div className="form">
        <p>Subscribe to our newsletter</p>
        <input type="text" name="FNAME" placeholder="First Name" />
        <input type="text" name="LNAME" placeholder="Last Name" />
        <input type="text" name="EMAIL" placeholder="Your email address" />
        <div className="social-media">
          <a
            href="https://www.facebook.com/BridgestoProsperity/"
            target="blank"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.facebook.com/BridgestoProsperity/"
            target="blank"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/bridgestoprosperity/"
            target="blank"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/bridges-to-prosperity/"
            target="blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
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
