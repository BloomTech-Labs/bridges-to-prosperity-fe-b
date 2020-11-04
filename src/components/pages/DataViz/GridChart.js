import { Grid } from '@material-ui/core';
import React from 'react';

const GridChart = props => {
  const {
    complete,
    rejected,
    confirmed,
    identified,
    prospecting,
    underConstruction,
  } = props;

  return (
    <>
      <Grid
        container
        spacing={1}
        xs={12}
        direction="column"
        justify="space-between"
      >
        {/* <Grid container> */}
        <Grid item container xs={8} justify="space-between">
          <Grid item>Complete</Grid>
          <Grid item>Rejected</Grid>
          <Grid item>Confirmed</Grid>
          <Grid item>Identified</Grid>
          <Grid item>Prospecting</Grid>
          <Grid item>Under Construction</Grid>
        </Grid>
        <Grid item container xs={8} justify="space-between">
          <Grid item>{complete}</Grid>
          <Grid item>{rejected}</Grid>
          <Grid item>{confirmed}</Grid>
          <Grid item>{identified}</Grid>
          <Grid item>{prospecting}</Grid>
          <Grid item>{underConstruction}</Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default GridChart;
