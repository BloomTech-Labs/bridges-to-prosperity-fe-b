import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Navigation = props => {
  const { authState, authService } = useOktaAuth();

  const loggingButton = authState.isAuthenticated ? (
    <button
      className="loginButton"
      onClick={() => {
        authService.logout();
      }}
    >
      Logout
    </button>
  ) : (
    <button
      className="loginButton"
      onClick={() => {
        authService.login();
      }}
    >
      Login
    </button>
  );

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
        {loggingButton}
      </div>
    </div>
  );
};

export default Navigation;
