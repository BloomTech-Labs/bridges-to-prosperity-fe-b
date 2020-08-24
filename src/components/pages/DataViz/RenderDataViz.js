/*eslint no-unused-vars: 0 */
import React, { useRef, useState, useEffect, useContext } from 'react';
import { BridgesContext } from '../../../state/contexts/bridgesContext';
import { DetailsContext } from '../../../state/contexts/detailsContext';
import {
  popUpSetUp,
  mapSetUp,
  markerSetUp,
} from '../../../utils/helper-functions/index';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

const initialState = {
  lng: 30.0616,
  lat: -1.9444,
  zoom: 7.8,
};

function DataViz() {
  const [initalCoordinates] = useState(initialState);
  const [search, setSearch] = useState('Yes');
  const mapContainerRef = useRef(null);
  const { bridgeData } = useContext(BridgesContext);
  const { setDetailsData } = useContext(DetailsContext);

  useEffect(() => {
    let map = mapSetUp(initalCoordinates, mapContainerRef);

    if (bridgeData) {
      let markerColor;

      for (let i = 0; i < bridgeData.length; i++) {
        let newPopUp = popUpSetUp(bridgeData[i]);

        if (bridgeData[i].project_stage === 'Completed') {
          markerColor = '#009149';
        } else {
          markerColor = '#EA7149';
        }

        markerSetUp(map, newPopUp, markerColor, bridgeData[i], setDetailsData);
      }
    }

    return () => map.remove();
  }, [bridgeData, initalCoordinates]);

  return (
    <div className="map-container">
      <h2>Bridge Sites in Rwanda</h2>
      <div id="map" className="map" ref={mapContainerRef} />
    </div>
  );
}

export default DataViz;
