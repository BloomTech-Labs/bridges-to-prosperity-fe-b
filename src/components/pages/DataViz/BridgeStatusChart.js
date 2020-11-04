import React, { useState, useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { Bar } from 'react-chartjs-2';
import { Dropdown, Menu, Row, Col } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
} from '@material-ui/core/';
import ReactEcharts from 'echarts-for-react';
import GridChart from './GridChart';

const BridgeStatusChart = () => {
  const { bridgeData } = useContext(BridgesContext);
  const [selectedProvince, setSelectedProvince] = useState('All Bridges');
  const [currentData, setCurrentData] = useState([]);

  if (!currentData && bridgeData) {
    setCurrentData(bridgeData);
  }
  let provinces = [];
  useEffect(() => {
    if (selectedProvince === 'All Bridges') {
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

  const grid = (
    <>
      <Row className="row" gutter={[8, 8]}>
        <Col
          className="gutter-row"
          style={{ color: 'gray' }}
          span={3}
          order={7}
        >
          Under Construction
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'blue' }}
          span={3}
          order={6}
        >
          Prospecting
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'orange' }}
          span={3}
          order={5}
        >
          Identified
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'purple' }}
          span={3}
          order={4}
        >
          Confirmed
        </Col>
        <Col className="gutter-row" style={{ color: 'red' }} span={3} order={3}>
          Rejected
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'green' }}
          span={3}
          order={2}
        >
          Complete
        </Col>
        <Col className="gutter-row" span={3} order={1}></Col>
      </Row>
      <Row className="row" gutter={[8, 8]}>
        <Col
          className="gutter-row"
          style={{ color: 'gray' }}
          span={3}
          order={7}
        >
          {underConstruction}
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'blue' }}
          span={3}
          order={6}
        >
          {prospecting}
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'orange' }}
          span={3}
          order={5}
        >
          {identified}
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'purple' }}
          span={3}
          order={4}
        >
          {confirmed}
        </Col>
        <Col className="gutter-row" style={{ color: 'red' }} span={3} order={3}>
          {rejected}
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'greem' }}
          span={3}
          order={2}
        >
          {complete}
        </Col>
        <Col
          className="gutter-row"
          style={{ color: 'black' }}
          span={3}
          order={1}
        >
          {selectedProvince}
        </Col>
      </Row>
    </>
  );

  // console.log(`copmplete: ${complete}`);
  // console.log(`rejected: ${rejected}`);
  // console.log(`conformed: ${confirmed}`);
  // console.log(`identified: ${identified}`);
  // console.log(`prospecting: ${prospecting}`);
  // console.log(`Under Construction: ${underConstruction}`);
  // console.log(`totla ${bridgeData && bridgeData.length}`);

  const ProvinceMenu = () => {
    return (
      // <Menu>
      //   <Menu.Item className="menuItem">
      //     <span
      //       onClick={() => {
      //         setSelectedProvince('All Bridges');
      //       }}
      //     >
      //       All
      //     </span>
      //   </Menu.Item>

      //   {provinces.map(province => {
      //     return (
      //       <Menu.Item className="menuItem">
      //         <span
      //           onClick={() => {
      //             setSelectedProvince(province);
      //           }}
      //         >
      //           {province}
      //         </span>
      //       </Menu.Item>
      //     );
      //   })}
      // </Menu>
      <div>
        <FormLabel>Select a province:</FormLabel>
        <RadioGroup name="provinceSelect" aria-label="provinceSelect" row>
          {provinces.map(value => (
            <FormControlLabel
              key={value}
              value={value}
              control={<Radio />}
              label={value}
            />
          ))}
        </RadioGroup>
      </div>
    );
  };

  const barChar = bridgeData ? (
    <Bar
      data={{
        labels: [
          'Complete',
          'Rejected',
          'Confirmed',
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
        title: { display: true, text: selectedProvince },
      }}
      width="30%"
      height="30%"
    />
  ) : null;

  const option = bridgeData
    ? {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 10,
          data: [
            'Complete',
            'Rejected',
            'Confirmed',
            'Identified',
            'Prospecting',
            'Under Construction',
          ],
        },
        series: [
          {
            name: selectedProvince,
            type: 'pie',
            radius: ['100%', '60%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '30',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              {
                value: complete,
                name: 'Complete',
                itemStyle: { color: 'green' },
              },
              {
                value: rejected,
                name: 'Rejected',
                itemStyle: { color: 'red' },
              },
              {
                value: confirmed,
                name: 'Confirmed',
                itemStyle: { color: 'purple' },
              },
              {
                value: identified,
                name: 'Identified',
                itemStyle: { color: 'orange' },
              },
              {
                value: prospecting,
                name: 'Prospecting',
                itemStyle: { color: 'blue' },
              },
              {
                value: underConstruction,
                name: 'Under Construction',
                itemStyle: { color: 'gray' },
              },
            ],
          },
        ],
      }
    : {};

  return (
    <div className="main">
      <h2 className="header">Data Visualization</h2>

      {/* <Dropdown className="dropDown" overlay={provinceMenu}>
        <a className="detailsInfo" onClick={e => e.preventDefault()}>
          <span className="label"> Pick A Province: </span>
          {selectedProvince} <DownOutlined />
        </a>
      </Dropdown> */}

      {/* Was a dropdown */}
      <div className="radioButtons">
        <ProvinceMenu />
      </div>

      <div className="grid">
        /*{grid}*/
        <GridChart
          complete={complete}
          rejected={rejected}
          confirmed={confirmed}
          identified={identified}
          prospecting={prospecting}
          underConstruction={underConstruction}
        />
      </div>
      <div className="chartContainer">
        <div className="barChart">{barChar}</div>
        <div className="doughnutChart">
          <ReactEcharts option={option} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default BridgeStatusChart;
