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
  Grid,
  Typography,
  Button,
  Paper,
} from '@material-ui/core/';
import ReactEcharts from 'echarts-for-react';
import GridChart from './GridChart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    padding: '0 50px',
    marginBottom: '100px',
  },
  logo: {
    width: '35px',
  },
  bar: {
    width: '450px',
    height: '450px',
    padding: '10px',
  },
  pie: {
    padding: '10px',
    width: '450px',
    height: '450px',
    paddingTop: '75px',
  },
});

const BridgeStatusChart = () => {
  const classes = useStyles();

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

  const ProvinceSelect = () => {
    return (
      <Grid
        item
        spacing={1}
        container
        direction="column"
        justify="space-between"
        spacing={3}
      >
        <Grid item>
          <Typography variant="h6">Select a province:</Typography>
        </Grid>
        <Grid item>
          <RadioGroup
            name="provinceSelect"
            aria-label="provinceSelect"
            value={selectedProvince}
            onChange={e => setSelectedProvince(e.target.value)}
          >
            <FormControlLabel
              key="All Bridges"
              value="All Bridges"
              control={<Radio color="primary" />}
              label="All Bridges"
            />
            {provinces.map(value => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio color="primary" />}
                label={value}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
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
    <Grid
      className={classes.root}
      container
      direction="column"
      spacing={2}
      xs={12}
    >
      <Grid item>
        {/* <Typography variant="h4" align="center">
          Data Visualization
        </Typography> */}
      </Grid>
      <Grid item container spacing={2}>
        {/* Radio buttons to select a province */}
        <Grid item className="radioButtons" md={4}>
          <ProvinceSelect />
        </Grid>
        <Grid item md={8} className={classes.data}>
          <GridChart
            complete={complete}
            rejected={rejected}
            confirmed={confirmed}
            identified={identified}
            prospecting={prospecting}
            underConstruction={underConstruction}
          />
        </Grid>
      </Grid>

      {/* <div className="grid">{grid}</div> */}
      <Grid
        item
        container
        className="chartContainer"
        alignItems="center"
        spacing={2}
      >
        <Grid item md={6} xs={12}>
          <Paper className={classes.bar}>{barChar}</Paper>
        </Grid>
        <Grid item md={6} xs={12}>
          <Paper className={classes.pie}>
            <ReactEcharts option={option} />
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BridgeStatusChart;
