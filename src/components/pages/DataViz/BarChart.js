import React, { useState, useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import { Bar } from 'react-chartjs-2';

const BarChart = () => {
  const { bridgeData } = useContext(BridgesContext);

  let complete = 0;
  let rejected = 0;
  let confirmed = 0;
  let identified = 0;
  let prospecting = 0;
  let underConstruction = 0;

  bridgeData &&
    bridgeData.forEach(bridge => {
      // eslint-disable-next-line default-case
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
      }
    });
  console.log(`copmplete: ${complete}`);
  console.log(`rejected: ${rejected}`);
  console.log(`conformed: ${confirmed}`);
  console.log(`identified: ${identified}`);
  console.log(`prospecting: ${prospecting}`);
  console.log(`Under Construction: ${underConstruction}`);
  console.log(`totla ${bridgeData && bridgeData.length}`);

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
        title: { display: true, text: 'Whole' },
      }}
    />
  ) : null;
  return <>{barChar}</>;
};

export default BarChart;
