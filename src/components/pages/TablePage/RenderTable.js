import React, { useContext, useState, useEffect, useRef } from 'react';
import Navigation from '../../common/Navigation';
import { BridgesContext } from '../../../state/bridgesContext';

import { Table, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { getDSData } from '../../../api/index';

function UserTable() {
  const [currentData, setCurrentData] = useState([]);
  const [searchParam, setSearchParam] = useState('project_code');
  const [search, setSearch] = useState('');
  const history = useHistory();
  const { bridgeData, setBridgeData, setDetailsData } = useContext(
    BridgesContext
  );
  if (!bridgeData) {
    getDSData('https://bridges-b-api.herokuapp.com/bridges').then(data => {
      setBridgeData(data);
      setCurrentData(data);
    });
  }
  useEffect(() => {
    if (search === '') {
      setCurrentData(bridgeData);
    } else {
      const newData = currentData.filter(item => {
        if (item[searchParam].toString().slice(0, search.length) === search) {
          return item;
        }
      });
      setCurrentData(newData);
    }
  }, [search]);

  const columns = [
    {
      title: 'Project Code',
      dataIndex: 'project_code',
      key: 'project_code',
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
    {
      title: 'Village Id',
      dataIndex: 'village_id',
      key: 'village_id',
    },
    {
      title: 'Village',
      dataIndex: 'village',
      key: 'village',
    },
  ];

  const searchMenu = (
    <Menu>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('project_code');
          }}
        >
          Project Code
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('country');
          }}
        >
          Country
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('province');
          }}
        >
          Province
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('district');
          }}
        >
          District
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('sector');
          }}
        >
          Sector
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('cell');
          }}
        >
          Cell
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('project_stage');
          }}
        >
          Project Stage
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('sub_stage');
          }}
        >
          Sub Stage
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('bridge_type');
          }}
        >
          Bridge Type
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('span');
          }}
        >
          Span
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('lat');
          }}
        >
          Latitude
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('long');
          }}
        >
          Longitude
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('village_id');
          }}
        >
          Village Id
        </span>
      </Menu.Item>
      <Menu.Item>
        <span
          onClick={() => {
            setSearchParam('village');
          }}
        >
          Village
        </span>
      </Menu.Item>
    </Menu>
  );

  const searchSubmit = e => {
    e.preventDefault();
    setCurrentData(bridgeData);
    setSearch(e.target.Project_Code.value);
  };
  const inputChange = e => {
    e.persist();
  };

  return (
    <div className="table-container">
      <Navigation />
      <div>
        <form onSubmit={searchSubmit}>
          <input
            type="text"
            id="Project_Code"
            name="Project_Code"
            value={search.Project_Code}
            onChange={inputChange}
          />
        </form>
        <Dropdown overlay={searchMenu}>
          <a className="detailsInfo" onClick={e => e.preventDefault()}>
            Search by: {searchParam} <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <Table
        dataSource={currentData}
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
