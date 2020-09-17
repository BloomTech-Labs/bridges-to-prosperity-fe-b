import React, { useContext } from 'react';
import Navigation from '../../common/Navigation';
import { BridgesContext } from '../../../state/bridgesContext';
import { Table } from 'antd';
import { useHistory } from 'react-router-dom';
import { getDSData } from '../../../api/index';

function UserTable() {
  const history = useHistory();
  const { bridgeData, setBridgeData, setDetailsData } = useContext(
    BridgesContext
  );

  if (!bridgeData) {
    getDSData('https://bridges-b-api.herokuapp.com/bridges').then(data => {
      setBridgeData(data);
    });
  }

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
        onRow={record => {
          return {
            onClick: () => {
              setDetailsData(record);
              history.push(`/details/${record.id}`);
            },
          };
        }}
        pagination={{ defaultPageSize: 10 }}
      />
    </div>
  );
}

export default UserTable;
