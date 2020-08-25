import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <img
        style={{ height: '100px', width: '200px' }}
        src={require('../../styles/imgs/B2P_PrimaryLockup_Green-White.png')}
        alt="Bridges of Prosperity Logo"
      />
      <p>
        Bridges to Prosperity envisions a world where poverty caused by rural
        isolation no longer exists. Rural isolation is a root cause of poverty,
        and we believe that connection is the foundation to opportunity. We work
        with local communities, partners and foundations, to build footbridges
        that connect residents to education, health care and economic
        opportunity. With a sophisticated data collection and evaluation
        program, we’re able to prove that the value and impact of our work is
        sustained long after the opening celebration.
      </p>
      <p>
        3858 Walnut St., Suite 219
        <br />
        Denver, Colorado 80205
        <br /> EIN: 54-2031102
      </p>
      <div className="social-media">
        <a href="https://www.facebook.com/BridgestoProsperity/" target="blank">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.facebook.com/BridgestoProsperity/" target="blank">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/bridgestoprosperity/" target="blank">
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
  );
};

export default Footer;
