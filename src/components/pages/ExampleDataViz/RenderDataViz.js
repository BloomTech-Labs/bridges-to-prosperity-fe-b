/*eslint no-unused-vars: 0 */
import React, { useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const initialState = {
  lng: 29.8805778,
  lat: -1.9437057,
  zoom: 7.8,
};

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

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');

    return () => map.remove();
  }, []);

  return (
    <div className="map-container">
      <div className="map" ref={mapContainerRef} />
    </div>
  );
}

export default DataViz;
