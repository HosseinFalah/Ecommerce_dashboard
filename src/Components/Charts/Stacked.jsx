import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts'
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../Context/ContextProvider';

const Stacked = ({width, height}) => {
  const { currentMode } = useStateContext()
  return (
    <ChartComponent 
      width={width} 
      height={height} 
      id="charts" 
      primaryXAxis={stackedPrimaryXAxis} 
      primaryYAxis={stackedPrimaryYAxis} 
      chartArea={{border: { width: 0 }}} 
      tooltip={{ enable: true }}
      background={currentMode === "Dark" ? "#33373E" : "#fff"}
      legendSettings={{background: "white"}}
      >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]}/>
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item) => <SeriesDirective key={uuidv4()} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked;