import React from 'react';
import { Link } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Navigation = props => {
  const { authService } = useOktaAuth();
  console.log(localStorage);
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

        {!localStorage.getItem('okta-pkce-storage') ? (
          <Link to="/login" className="loginButton">
            Login
          </Link>
        ) : (
          <>
            <Link to="/table" className="navLinks">
              Table
            </Link>
            <Link
              to="/"
              onClick={() => {
                authService.logout();
                localStorage.removeItem('okta-cache-storage');
                localStorage.removeItem('okta-pkce-storage');
              }}
              className="loginButton"
            >
              Logout
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navigation;
