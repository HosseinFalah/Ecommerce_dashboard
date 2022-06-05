import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, SplineAreaSeries, DateTime, Legend } from '@syncfusion/ej2-react-charts';
import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';
import { Header } from '../../Components';
import { v4 as uuidv4 } from 'uuid';
import { useStateContext } from '../../Context/ContextProvider';
const Area = () => {
  const { currentMode } = useStateContext()
  return (
    <div className="pt-12 dark:bg-zinc-800 h-screen">
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-zinc-700 rounded-3xl">
        <Header category="Area" title="Inflation Rate in Percentage"/>
        <ChartComponent 
          id='area-chart' 
          height='400px' 
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis} 
          chartArea={{ border: { width: 0 }}} 
          tooltip={{enable: true}}
          background={currentMode === "Dark" ? "#3F3F46" : "#fff"}
          legendSettings={{ background: 'white' }}
          >
          <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item) => 
              <SeriesDirective key={uuidv4()} {...item} />
            )}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  )
}

export default Area