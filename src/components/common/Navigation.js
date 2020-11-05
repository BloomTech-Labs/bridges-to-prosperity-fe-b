import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '80px',
    padding: '0 50px',
  },
  logo: {
    width: '35px',
  },
});

const Navigation = props => {
  const classes = useStyles();

  const { authService } = useOktaAuth();
  const { push } = useHistory();

  return (
    <Grid
      container
      spacing={2}
      xs={12}
      justify="space-between"
      className={classes.root}
      alignItems="center"
    >
      <Grid
        item
        container
        alignItems="center"
        spacing={1}
        xs={6}
        onClick={() => {
          push('/');
        }}
      >
        <Grid item>
          <img
            src={require('../../styles/imgs/B2P_Symbol_Green.png')}
            alt="Bridges of Prosperity Logo"
            className={classes.logo}
          />
        </Grid>
        <Grid item>
          <Typography variant="h4">Bridges to Prosperity</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        container
        xs={6}
        justify="flex-end"
        spacing={2}
        alignItems="center"
      >
        <Grid item>
          <Link to="/" className="navLinks">
            <Button variant="contained">Home</Button>
          </Link>
        </Grid>
        <Grid item>
          {!localStorage.getItem('okta-pkce-storage') ? (
            <Link to="/login" className="loginButton" color="primary">
              <Button variant="contained" color="primary">
                Login
              </Button>
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
                <Button variant="contained" color="primary">
                  Logout
                </Button>
              </Link>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navigation;
