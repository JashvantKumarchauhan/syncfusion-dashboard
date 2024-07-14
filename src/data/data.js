// src/data/data.js
export const areaPrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };
  
  export const areaPrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };
  
  export const areaCustomSeries = [
    {
      dataSource: [
        { x: new Date(2000, 0, 1), y: 4 },
        { x: new Date(2001, 0, 1), y: 3.0 },
        { x: new Date(2002, 0, 1), y: 3.8 },
        { x: new Date(2003, 0, 1), y: 2.1 },
        { x: new Date(2004, 0, 1), y: 4 },
        { x: new Date(2005, 0, 1), y: 4.1 },
        // Legg til flere data etter behov
      ],
      xName: 'x',
      yName: 'y',
      name: 'Inflation',
      opacity: '0.8',
      type: 'SplineArea',
      width: '2',
    },
  ];
  