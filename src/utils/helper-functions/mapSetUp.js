import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';

const mapSetUp = (initalCoordinates, mapContainerRef) => {
  const map = new mapboxgl.Map({
    container: mapContainerRef.current,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [initalCoordinates.lng, initalCoordinates.lat],
    zoom: initalCoordinates.zoom,
  });
  map.addControl(new mapboxgl.NavigationControl(), 'top-right');
  map.addControl(new mapboxgl.FullscreenControl());
  map.addControl(
    new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,

      zoom: 14,
      countries: 'rw',
      placeholder: 'Enter search e.g. Completed',
    }),
    'top-left'
  );
  return map;
};

export { mapSetUp };
