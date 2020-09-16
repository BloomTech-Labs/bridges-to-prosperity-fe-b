import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <div className="nav">
      <div className="logo">
        <img
          src={require('../../styles/imgs/B2P_Symbol_Green.png')}
          alt="Bridges of Prosperity Logo"
        />
        <h1>Bridges to Prosperity</h1>
      </div>
      <div className="links">
        <Link to="/" className="navLinks">
          Home
        </Link>
        <Link to="/table" className="navLinks">
          Table
        </Link>
        <Link to="/login" className="loginButton">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
