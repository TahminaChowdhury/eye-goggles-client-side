import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  Highlight,
  SeriesDirective,
  ChartTheme,
  Inject,
  ILoadedEventArgs,
  LineSeries,
  Tooltip,
  DateTime,
  SplineAreaSeries,
  Legend,
} from '@syncfusion/ej2-react-charts';

const data1 = [
  { x: new Date(2001, 0, 1), y: 2.1 },
  { x: new Date(2002, 0, 1), y: 2.2 },
  { x: new Date(2003, 0, 1), y: 3.4 },
  { x: new Date(2004, 0, 1), y: 2.8 },
  { x: new Date(2005, 0, 1), y: 1.6 },
  { x: new Date(2006, 0, 1), y: 2.3 },
  { x: new Date(2007, 0, 1), y: 2.5 },
  { x: new Date(2008, 0, 1), y: 2.9 },
  { x: new Date(2009, 0, 1), y: 1.1 },
  { x: new Date(2010, 0, 1), y: 1.4 },
  { x: new Date(2011, 0, 1), y: 1.1 },
  { x: new Date(2012, 0, 1), y: 1.5 },
];

const AreaChart = () => {
  return (
    <ChartComponent
      id="charts"
      style={{ textAlign: 'center' }}
      primaryXAxis={{
        valueType: 'DateTime',
        labelFormat: 'y',
        majorGridLines: { width: 0 },
        intervalType: 'Years',
        minimum: new Date(2001, 0, 1),
        maximum: new Date(2012, 0, 1),
        edgeLabelPlacement: 'Shift',
      }}
      primaryYAxis={{
        labelFormat: '{value}%',
        lineStyle: { width: 0 },
        maximum: 4,
        interval: 1,
        majorTickLines: { width: 0 },
        minorTickLines: { width: 0 },
      }}
      chartArea={{ border: { width: 0 } }}
      title="Product Sales"
      tooltip={{ enable: true }}
    >
        
      <Inject
        services={[SplineAreaSeries, DateTime, Tooltip, Legend, Highlight]}
      />
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={data1}
          xName="x"
          yName="y"
          marker={{
            visible: true,
            isFilled: true,
            height: 6,
            width: 6,
            shape: 'Circle',
          }}
          opacity={0.5}
          type="SplineArea"
          width={2}
          border={{ width: 2 }}
        ></SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default AreaChart;
