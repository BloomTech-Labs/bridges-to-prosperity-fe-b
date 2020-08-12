/*eslint no-unused-vars: 0 */
import React, { useState, useEffect } from 'react';
// import Plot from 'react-plotly.js';
import { getDSData } from '../../../api';
import ReactMapGL from 'react-map-gl';

function DataViz(props) {
  const [data, setData] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '100vw',
    height: '100vh',
    zoom: 10,
  });
  // const [figure, setFigure] = useState(null);

  // useEffect(() => {
  //   function fetchDSData() {
  //     getDSData(props.url, props.authState)
  //       .then(res => {
  //         setData(res);
  //       })
  //       .catch(err => {
  //         setData({});
  //       });
  //   }
  //   fetchDSData();
  // }, [props.url, props.authState]);
  console.log(process.env.REACT_APP_MAPBOX_TOKEN);
  return (
    <ReactMapGL
      {...data}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKKEN}
      // className="DataViz"
      // data={data.data}
      // layout={data.layout}
      // frames={data.frames}
      // config={data.config}
      // onInitialized={figure => setFigure(figure)}
      // onUpdate={figure => setFigure(figure)}
    >
      Markers here
    </ReactMapGL>
  );
}

export default DataViz;
