import React, { useContext } from 'react';
import { BridgesContext } from '../../../state/bridgesContext';
import Draggable from 'react-draggable';

//echarts
import ReactEcharts from 'echarts-for-react';
import 'echarts/lib/component/graphic';
import echarts from 'echarts/lib/echarts';

const DataCard = props => {
  const { detailsData, setDetailsData } = useContext(BridgesContext);
  return (
    <Draggable>
      <div className="dataContainer">
        <div
          className="closeButton"
          onClick={() => {
            let newData = { ...detailsData };
            delete newData['gdpData'];
            setDetailsData(newData);
          }}
        >
          <i className="fas fa-times"></i>
        </div>

        <div className="detailsInfo">
          <h2>
            <strong>{detailsData.bridge_site_name} Data</strong>
            <p>{detailsData.province}</p>
          </h2>
          <ReactEcharts
            option={{
              tooltip: {
                trigger: 'axis',
                position: function(pt) {
                  return [pt[0], '10%'];
                },
              },
              title: {
                left: 'center',
                text: 'Province GDP over time',
              },
              toolbox: {
                feature: {
                  dataZoom: {
                    yAxisIndex: 'none',
                  },
                  restore: {},
                  saveAsImage: {},
                },
              },
              xAxis: {
                type: 'category',
                boundaryGap: false,
                data: detailsData.gdpData.x,
              },
              yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
              },
              dataZoom: [
                {
                  handleSize: '80%',
                  handleStyle: {
                    color: '#fff',
                    shadowBlur: 3,
                    shadowColor: 'rgba(0, 0, 0, 0.6)',
                    shadowOffsetX: 2,
                    shadowOffsetY: 2,
                  },
                },
              ],
              series: [
                {
                  name: 'GDP Nominal',
                  type: 'line',
                  smooth: true,
                  symbol: 'none',
                  sampling: 'average',
                  itemStyle: {
                    color: 'rgb(51, 255, 153)',
                  },
                  areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                      {
                        offset: 0,
                        color: 'rgb(204, 255, 229)',
                      },
                      {
                        offset: 1,
                        color: 'rgb(51, 255, 153)',
                      },
                    ]),
                  },
                  data: detailsData.gdpData.y,
                },
              ],
            }}
          />
        </div>
      </div>
    </Draggable>
  );
};

export default DataCard;
