import mapboxgl from 'mapbox-gl';

const markerSetUp = (
  map,
  popUp,
  markerColor,
  bridgeDataObj,
  setDetailsData
) => {
  let marker = new mapboxgl.Marker({
    color: markerColor,
  })
    .setLngLat([bridgeDataObj.long, bridgeDataObj.lat])
    .setPopup(popUp) // sets a popup on this marker
    .addTo(map); // add the marker to the map
  marker.getElement().addEventListener('click', () => {
    setDetailsData(bridgeDataObj);
  });
  return marker;
};

export { markerSetUp };
