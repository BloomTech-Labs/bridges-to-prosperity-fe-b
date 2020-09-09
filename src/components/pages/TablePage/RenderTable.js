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

  useEffect(() => {
    getDSData('https://bridges-to-prosperity-core.herokuapp.com/bridges').then(
      data => {
        setBridgeData(data);
      }
    );
  }, [setBridgeData]);

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
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'b2p_bridge_id',
      dataIndex: 'b2p_bridge_id',
      key: 'b2p_bridge_id',
    },
    {
      title: 'country',
      dataIndex: 'country',
      key: 'country',
    },
    {
      title: 'province',
      dataIndex: 'province',
      key: 'province',
    },
    {
      title: 'district',
      dataIndex: 'district',
      key: 'district',
    },
    {
      title: 'sector',
      dataIndex: 'sector',
      key: 'sector',
    },
    {
      title: 'cell',
      dataIndex: 'cell',
      key: 'cell',
    },
    {
      title: 'project_code',
      dataIndex: 'project_code',
      key: 'project_code',
    },
    {
      title: 'project_stage',
      dataIndex: 'project_stage',
      key: 'project_stage',
    },
    {
      title: 'sub_stage',
      dataIndex: 'sub_stage',
      key: 'sub_stage',
    },
    {
      title: 'bridge_type',
      dataIndex: 'bridge_type',
      key: 'bridge_type',
    },
    {
      title: 'span',
      dataIndex: 'span',
      key: 'span',
    },
    {
      title: 'lat',
      dataIndex: 'lat',
      key: 'lat',
    },
    {
      title: 'long',
      dataIndex: 'long',
      key: 'long',
    },
    // {
    //     title: 'communities_served',
    //     dataIndex: 'communities_served',
    //     key: 'communities_served',
    // },
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
        pagination={{ defaultPageSize: 1 }}
      />
      ;
    </div>
  );
}

export default UserTable;
