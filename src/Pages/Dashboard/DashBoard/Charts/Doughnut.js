import React from 'react';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  AccumulationLegend,
  PieSeries,
  AccumulationDataLabel,
  AccumulationTooltip,
  AccumulationSelection,
  Inject,
  Selection,
  AccumulationAnnotationsDirective,
  AccumulationAnnotationDirective,
  ChartAnnotation,
  AccumulationAnnotation,
} from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';

const data1 = [
  { x: 'Order', y: 15, text: '15%' },
  { x: 'Pending', y: 30, text: '30%' },
  { x: 'Delivered', y: 15, text: '15%' },
];
const content = 'Delivered'
const SAMPLE_CSS = `
     .control-fluid {
         padding: 0px !important;
      }
         .pie-chart2 {
             align :center
         }`;

const Doughnut = () => {
  return (
    <div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <AccumulationChartComponent
          id="pie-chart2"
          title="Order Status"
          enableSmartLabels={true}
          enableAnimation={false}
          selectionMode={'Point'}
          center={{ x: '50%', y: '50%' }}
          enableBorderOnMouseMove={false}
          tooltip={{
            enable: true,
            format: '<b>${point.x}</b><br>Browser Share: <b>${point.y}%</b>',
            header: '',
          }}
        >
          <Inject
            services={[
              AccumulationLegend,
              PieSeries,
              AccumulationDataLabel,
              AccumulationTooltip,
              AccumulationSelection,
              Selection,
              ChartAnnotation,
              AccumulationAnnotation,
            ]}
          />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={data1}
              xName="x"
              yName="y"
              explode={false}
              explodeOffset="10%"
              explodeIndex={0}
              startAngle={30}
              innerRadius="43%"
              dataLabel={{
                visible: true,
                position: 'Inside',
                name: 'text',
                font: {
                  fontWeight: '600',
                  color: '#ffffff',
                },
                connectorStyle: { length: '20px', type: 'Curve' },
              }}
              radius="80%"
            ></AccumulationSeriesDirective>
          </AccumulationSeriesCollectionDirective>
          <AccumulationAnnotationsDirective>
            <AccumulationAnnotationDirective
              content={content}
              region="Series"
              x="52%"
              y="50%"
            ></AccumulationAnnotationDirective>
          </AccumulationAnnotationsDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
};

export default Doughnut;
