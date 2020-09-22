import React, { useRef, useState, useEffect, useContext } from 'react';
import Navigation from '../../common/Navigation';
import { BridgesContext } from '../../../state/bridgesContext';

import { Table, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import { getDSData } from '../../../api/index';

function UserTable(props) {
  const [currentData, setCurrentData] = useState([]);
  const [searchParam, setSearchParam] = useState('project_code');
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
    if (search === '') {
      setCurrentData(bridgeData);
    } else {
      const newData = currentData.filter(item => {
        if (item[searchParam].slice(0, search.length) === search) {
          return item;
        }
      });
      setCurrentData(newData);
    }
  }, [search]);

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

  const searchMenu = (
    <Menu>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('id');
          }}
        >
          id
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('b2p_bridge_id');
          }}
        >
          b2p_bridge_id
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('country');
          }}
        >
          country
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('province');
          }}
        >
          province
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('district');
          }}
        >
          district
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('sector');
          }}
        >
          sector
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('cell');
          }}
        >
          cell
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('project_code');
          }}
        >
          project_code
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('project_stage');
          }}
        >
          project_stage
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('sub_stage');
          }}
        >
          sub_stage
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('bridge_type');
          }}
        >
          bridge_type
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('span');
          }}
        >
          span
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('lat');
          }}
        >
          lat
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          onClick={() => {
            setSearchParam('long');
          }}
        >
          long
        </a>
      </Menu.Item>
    </Menu>
  );

  const formSubmit = e => {
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
        <form onSubmit={formSubmit}>
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
            Hover me <DownOutlined />
          </a>
        </Dropdown>
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
