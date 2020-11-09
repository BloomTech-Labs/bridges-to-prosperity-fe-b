import React, { useState, useContext, useEffect } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { Bar } from 'react-chartjs-2';
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Grid,
  Typography,
  Paper,
  Box,
  AppBar,
  Tabs,
  Tab,
} from '@material-ui/core/';
import ReactEcharts from 'echarts-for-react';
import GridChart from './GridChart';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AssessmentOutlinedIcon from '@material-ui/icons/AssessmentOutlined';
import PieChartOutlinedIcon from '@material-ui/icons/PieChartOutlined';

const useStyles = makeStyles(theme => ({
  tabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  root: {
    marginBottom: '50px',
    marginTop: '50px',
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
}));

const BridgeStatusChart = () => {
  const classes = useStyles();

  const { bridgeData } = useContext(BridgesContext);
  const [selectedProvince, setSelectedProvince] = useState('All Bridges');
  const [currentData, setCurrentData] = useState([]);
  const [value, setValue] = React.useState(0);

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
  }, [selectedProvince, bridgeData]);

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
      <Grid item spacing={1} container direction="column">
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

  const TabPanel = props => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  };

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={1} lg={2}></Grid>
      <Grid item xs={10} lg={8}>
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
          <Grid item container spacing={2} alignItems="center">
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
            md={12}
          >
            <Grid item container justify="center">
              <Paper position="static" color="transparent">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="DataViz"
                  centered
                >
                  <Tab icon={<AssessmentOutlinedIcon />} {...a11yProps(0)} />
                  <Tab icon={<PieChartOutlinedIcon />} {...a11yProps(1)} />
                </Tabs>

                <TabPanel value={value} index={0}>
                  <Paper elevation={0} className={classes.bar}>
                    {barChar}
                  </Paper>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Paper elevation={0} className={classes.pie}>
                    <ReactEcharts option={option} />
                  </Paper>
                </TabPanel>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} lg={2}></Grid>
    </Grid>
  );
};

export default BridgeStatusChart;
