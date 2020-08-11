const config = {
  issuer: process.env.REACT_APP_OKTA_ISSUER_URI,
  redirectUri: '/logged',
  clientId: process.env.REACT_APP_CLIENT_ID,
  pkce: true,
  scopes: ['openid', 'email', 'profile'],
};

export { config };
