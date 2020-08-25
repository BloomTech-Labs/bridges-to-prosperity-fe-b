import mapboxgl from 'mapbox-gl';

const popUpSetUp = bridgeData => {
  var popup = new mapboxgl.Popup({ offset: 35 }).setHTML(
    '<div style="color:red">' +
      'Country:' +
      `${bridgeData.country}` +
      '</div>' +
      `Province:${bridgeData.province}` +
      '<br/>' +
      'Communties:' +
      bridgeData.communities_served.map(data => ` ${data.name}`)
  );
  return popup;
};

export { popUpSetUp };
