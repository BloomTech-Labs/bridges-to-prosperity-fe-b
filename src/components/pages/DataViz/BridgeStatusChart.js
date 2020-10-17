import React, { useState, useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Dropdown, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const BridgeStatusChart = () => {
  const { bridgeData, setBridgeData } = useContext(BridgesContext);
  const [selectedProvince, setSelectedProvince] = useState('All');
  const [currentData, setCurrentData] = useState([]);

  if (!currentData && bridgeData) {
    setCurrentData(bridgeData);
  }
  let provinces = ['All'];
  useEffect(() => {
    if (selectedProvince === 'All') {
      setCurrentData(bridgeData);
    } else {
      let data = bridgeData.filter(bridge => {
        return bridge.province === selectedProvince;
      });
      setCurrentData(data);
    }
  }, [selectedProvince]);

  let complete = 0;
  let rejected = 0;
  let confirmed = 0;
  let identified = 0;
  let prospecting = 0;
  let underConstruction = 0;
  bridgeData &&
    bridgeData.forEach(bridge => {
      // eslint-disable-next-line default-case
      if (!provinces.includes(bridge.province)) {
        provinces.push(bridge.province);
      }
    });

  currentData &&
    currentData.forEach(bridge => {
      switch (bridge.project_stage) {
        case 'Complete':
          complete += 1;
          break;
        case 'Rejected':
          rejected += 1;
          break;
        case 'Confirmed':
          confirmed += 1;
          break;
        case 'Identified':
          identified += 1;
          break;
        case 'Prospecting':
          prospecting += 1;
          break;
        case 'Under Construction':
          underConstruction += 1;
          break;
        default:
          break;
      }
    });

  // console.log(`copmplete: ${complete}`);
  // console.log(`rejected: ${rejected}`);
  // console.log(`conformed: ${confirmed}`);
  // console.log(`identified: ${identified}`);
  // console.log(`prospecting: ${prospecting}`);
  // console.log(`Under Construction: ${underConstruction}`);
  // console.log(`totla ${bridgeData && bridgeData.length}`);

  const provinceMenu = (
    <Menu>
      {provinces.map(province => {
        return (
          <Menu.Item>
            <span
              onClick={() => {
                setSelectedProvince(province);
              }}
            >
              {province}
            </span>
          </Menu.Item>
        );
      })}
    </Menu>
  );
  const barChar = bridgeData ? (
    <Bar
      data={{
        labels: [
          'Complete',
          'Rejected',
          'Comfirmed',
          'Identified',
          'Prospecting',
          'Under Construction',
        ],
        datasets: [
          {
            label: 'Bridge',
            backgroundColor: [
              'green',
              'red',
              'purple',
              'orange',
              'blue',
              'gray',
            ],
            data: [
              complete,
              rejected,
              confirmed,
              identified,
              prospecting,
              underConstruction,
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: 'All Bridges' },
      }}
      width="30%"
      height="30%"
    />
  ) : null;
  const doughnutChar = bridgeData ? (
    <Doughnut
      data={{
        labels: [
          'Complete',
          'Rejected',
          'Comfirmed',
          'Identified',
          'Prospecting',
          'Under Construction',
        ],
        datasets: [
          {
            label: 'Bridge',
            backgroundColor: [
              'green',
              'red',
              'purple',
              'orange',
              'blue',
              'gray',
            ],
            data: [
              complete,
              rejected,
              confirmed,
              identified,
              prospecting,
              underConstruction,
            ],
          },
        ],
      }}
      options={{
        title: { display: true, text: 'All Bridges' },
        cutoutPercentage: 80,
      }}
      width="30%"
      height="30%"
    />
  ) : null;
  return (
    <div className="main">
      <h2>Data visualization</h2>
      <Dropdown overlay={provinceMenu}>
        <a className="detailsInfo" onClick={e => e.preventDefault()}>
          Pick a province: {selectedProvince} <DownOutlined />
        </a>
      </Dropdown>
      <div className="chartContainer">
        <div className="barChart">{barChar}</div>
        <div className="doughnutChart">{doughnutChar}</div>
      </div>
    </div>
  );
};

export default BridgeStatusChart;
