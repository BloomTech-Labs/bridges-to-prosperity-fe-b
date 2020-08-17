import React, { useState } from 'react';
import { Menu, Input } from 'antd';
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;
const { Search } = Input;

const initalState = {
  current: 'mail',
};

const Navigation = props => {
  const [navData, setNavData] = useState(initalState);

  const handleClick = e => {
    // console.log('click ', e);
    setNavData({ current: e.key });
  };

  return (
    <>
      <Menu
        onClick={e => handleClick(e)}
        selectedKeys={navData.current}
        mode="horizontal"
      >
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Navigation;
