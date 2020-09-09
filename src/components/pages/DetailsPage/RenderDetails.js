import React, { useRef, useState, useEffect, useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';

import Navigation from '../../common/Navigation';
import Footer from '../../common/Footer';
import { Link } from 'react-router-dom';

function DetailsCard(props) {
  const communities_served = [];
  const [data, setData] = useState({ communities_served: communities_served });
  const { bridgeData } = useContext(BridgesContext);

  useEffect(() => {
    bridgeData.map(item => {
      console.log(props.match.params.cardId);
      let myID = parseInt(props.match.params.cardId);

      if (item.id === myID) {
        setData(item);
      }
    });
  }, []);

  console.log(data);
  return (
    <div>
      <Link to="/table" style={{ fontColor: 'black' }}>
        to table
      </Link>
      <Navigation />
      <div>{data.b2p_bridge_id}</div>
      <div>{data.id}</div>
      <div>{data.project_code}</div>
      <div>{data.country}</div>
      <div>{data.district}</div>
      <div>{data.province}</div>
      <div>{data.sector}</div>
      <div>{data.lat}</div>
      <div>{data.long}</div>
      <div>{data.project_stage}</div>
      <div>{data.bridge_type}</div>
      <div>{data.span}</div>
      <div>communities_served</div>
      <div>
        {data.communities_served.map(item => {
          console.log(item);
          return (
            <div>
              <div>
                id:{item.id} name:{item.name}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}
export default DetailsCard;

// b2p_bridge_id: null
// bridge_type: "Suspended"
// cell: "Gakomeye"
// communities_served: Array(1)
// 0: {id: 1, name: "Buzi"}
// length: 1
// __proto__: Array(0)
// country: "Rwanda"
// district: "Rusizi"
// id: 1
// lat: -2.42056
// long: 28.9662
// project_code: 1014107
// project_stage: "Completed"
// province: "Western Province"
// sector: "Giheke"
// span: "8 Meters"
// sub_stage: null
