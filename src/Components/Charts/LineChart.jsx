import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts'
import { lineCustomSeries, LinePrimaryYAxis, LinePrimaryXAxis } from '../../data/dummy'
import { v4 as uuidv4 } from 'uuid';
import { useStateContext } from '../../Context/ContextProvider';
const LineChart = () => {
  const { currentMode } = useStateContext()
  return (
    <ChartComponent 
      id='line-chart' 
      height='400px' 
      primaryXAxis={LinePrimaryXAxis}
      primaryYAxis={LinePrimaryYAxis} 
      chartArea={{ border: { width: 0 }}} 
      tooltip={{enable: true}}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{ background: 'white' }}
      >
      <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item) => 
          <SeriesDirective key={uuidv4()} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default LineChart