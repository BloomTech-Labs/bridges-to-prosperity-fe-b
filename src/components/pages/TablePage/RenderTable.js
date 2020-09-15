import React, { useRef, useState, useEffect, useContext } from 'react';
import Navigation from '../../common/Navigation';
import { BridgesContext } from '../../../state/bridgesContext';

import { Table } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { getDSData } from '../../../api/index';

function UserTable(props) {
  const [data, setData] = useState();
  const { bridgeData } = useContext(BridgesContext);
  const history = useHistory();

  const { setBridgeData } = useContext(BridgesContext);

  // useEffect(() => {
  //   getDSData('https://bridges-to-prosperity-core.herokuapp.com/bridges').then(
  //     data => {
  //       setBridgeData(data);
  //     }
  //   );
  // }, [setBridgeData]);

  /*{
        "id": 1,
        "b2p_bridge_id": null,
        "country": "Rwanda",
        "province": "Western Province",
        "district": "Rusizi",
        "sector": "Giheke",
        "cell": "Gakomeye",
        "project_code": 1014107,
        "project_stage": "Completed",
        "sub_stage": "Technical",
        "bridge_type": "Suspended",
        "span": "8 Meters",
        "lat": -2.42056,
        "long": 28.9662,
        "communities_served": [
          {
            "id": 1,
            "name": "Buzi"
          }
        ]
      }*/

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'B2P Bridge ID',
      dataIndex: 'b2p_bridge_id',
      key: 'b2p_bridge_id',
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'Province',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: 'District',
      dataIndex: 'district',
      key: 'district',
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
      key: 'sector',
    },
    {
      title: 'Cell',
      dataIndex: 'cell',
      key: 'cell',
    },
    {
      title: 'Project Code',
      dataIndex: 'project_code',
      key: 'project_code',
    },
    {
      title: 'Project Stage',
      dataIndex: 'project_stage',
      key: 'project_stage',
    },
    {
      title: 'Sub Stage',
      dataIndex: 'sub_stage',
      key: 'sub_stage',
    },
    {
      title: 'Bridge Type',
      dataIndex: 'bridge_type',
      key: 'bridge_type',
    },
    {
      title: 'Span',
      dataIndex: 'span',
      key: 'span',
    },
    {
      title: 'Latitude',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: 'Longitude',
      dataIndex: 'long',
      key: 'long',
    },
  ];

  return (
    <div className="table-container">
      <Navigation />
      <h2>Table: Bridge Sites in Rwanda</h2>
      <Table
        dataSource={bridgeData}
        columns={columns}
        onRow={(record, index) => {
          return {
            onClick: event => {
              history.push(`/details/${record.id}`);
            },
          };
        }}
        pagination={{ defaultPageSize: 10 }}
      />
      ;
    </div>
  );
}

export default UserTable;
