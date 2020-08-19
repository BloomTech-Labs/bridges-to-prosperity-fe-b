import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <div className="nav">
      <img
        src={require('../../styles/imgs/B2P_PrimaryLockup_Green-Navy.svg')}
        alt="Bridges of Prosperity Logo"
      />
      <Link to="/login" className="loginButton">
        Login
      </Link>
    </div>
  );
};

export default Navigation;
