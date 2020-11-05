import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

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
      spacing={3}
      xs={12}
      direction="column"
      justify="space-between"
      className={classes.data}
    >
      <Grid item>
        <Typography variant="h6">Data:</Typography>
      </Grid>
      {/* <Grid container> */}
      <Grid
        item
        container
        xs={12}
        justify="flex-start"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="subtitle1" style={{ color: 'greem' }}>
            Complete
          </Typography>
          <Typography variant="h6">{complete}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ color: 'red' }}>
            Rejected
          </Typography>
          <Typography variant="h6" style={{ color: 'red' }}>
            {rejected}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ color: 'purple' }}>
            Confirmed
          </Typography>
          <Typography variant="h6" style={{ color: 'purple' }}>
            {confirmed}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ color: 'orange' }}>
            Identified
          </Typography>
          <Typography variant="h6" style={{ color: 'orange' }}>
            {identified}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ color: 'blue' }}>
            Prospecting
          </Typography>
          <Typography variant="h6" style={{ color: 'blue' }}>
            {prospecting}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" style={{ color: 'gray' }}>
            Under Construction
          </Typography>
          <Typography variant="h6">{underConstruction}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default GridChart;
