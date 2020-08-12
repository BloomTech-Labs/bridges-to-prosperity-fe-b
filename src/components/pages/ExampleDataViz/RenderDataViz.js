import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import './map.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const initialState = {
  lat: -1.9444,
  lng: 30.0616,
  zoom: 12.5,
};

// .map-container {
//   width: 1000px;
//   height: 1000px;
// }

function DataViz(props) {
  const [data, setData] = useState(initialState);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [data.lng, data.lat],
      zoom: data.zoom,
    });

    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove();
  }, []);

  return (
    <>
      <div className="map-container" ref={mapContainerRef} />
    </>
  );
}

export default DataViz;
