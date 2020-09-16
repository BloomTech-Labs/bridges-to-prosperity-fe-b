import React, { useRef, useState, useEffect, useContext } from 'react';
import Navigation from '../../common/Navigation';
import { BridgesContext } from '../../../state/bridgesContext';

import { Table } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { getDSData } from '../../../api/index';

function UserTable(props) {
  const [currentData, setCurrentData] = useState([]);
  const [search, setSearch] = useState('');
  const { bridgeData } = useContext(BridgesContext);
  const history = useHistory();

  const { setBridgeData } = useContext(BridgesContext);

  useEffect(() => {
    getDSData('https://bridges-b-api.herokuapp.com/bridges').then(data => {
      setBridgeData(data);
      setCurrentData(data);
    });
  }, []);

  useEffect(() => {
    const newData = currentData.filter(item => {
      if (item.project_code === search) {
        return item;
      }
    });
    setCurrentData(newData);
    console.log(currentData);
  }, [search]);

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

  const formSubmit = e => {
    e.preventDefault();
    // console.log(e.target.Project_Code.value)
    setSearch(e.target.Project_Code.value);
    // console.log(setSearch.Project_Code)
  };
  const inputChange = e => {
    e.persist();
    // console.log(e.target.Project_Code.value)
    // setSearch(e.target.Project_Code.value)
    console.log(search);
    // console.log(e)
  };

  return (
    <div className="table-container">
      <Navigation />
      <div>
        <form onSubmit={formSubmit}>
          <input
            type="text"
            id="Project_Code"
            name="Project_Code"
            value={search.Project_Code}
            onChange={inputChange}
          />
        </form>
      </div>
      <Table
        dataSource={currentData}
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
