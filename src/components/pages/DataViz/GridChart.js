import { Grid, Typography, Paper } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  data: {
    padding: '10px',
  },
});

const GridChart = props => {
  const classes = useStyles();

  const {
    complete,
    rejected,
    confirmed,
    identified,
    prospecting,
    underConstruction,
  } = props;

  return (
    <Grid
      item
      container
      spacing={2}
      direction="column"
      className={classes.data}
    >
      <Grid item>
        <Typography variant="h6">Data:</Typography>
      </Grid>
      {/* <Grid container> */}
      <Grid item container justify="flex-start" alignItems="center">
        <Paper elevation={0} className={classes.data}>
          <Grid
            item
            container
            justify="flex-start"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <Typography variant="subtitle1" style={{ color: 'greem' }}>
                Complete
              </Typography>
              <Typography align="center" variant="h6">
                {complete}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: 'red' }}>
                Rejected
              </Typography>
              <Typography align="center" variant="h6" style={{ color: 'red' }}>
                {rejected}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: 'purple' }}>
                Confirmed
              </Typography>
              <Typography
                align="center"
                variant="h6"
                style={{ color: 'purple' }}
              >
                {confirmed}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: 'orange' }}>
                Identified
              </Typography>
              <Typography
                align="center"
                variant="h6"
                style={{ color: 'orange' }}
              >
                {identified}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: 'blue' }}>
                Prospecting
              </Typography>
              <Typography align="center" variant="h6" style={{ color: 'blue' }}>
                {prospecting}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{ color: 'gray' }}>
                Under Construction
              </Typography>
              <Typography align="center" variant="h6">
                {underConstruction}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default GridChart;
