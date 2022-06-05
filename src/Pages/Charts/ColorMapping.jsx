import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { ChartsHeader } from '../../Components';
import { useStateContext } from '../../Context/ContextProvider';

const ColorMapping = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="pt-2 dark:bg-zinc-800 h-full">
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-zinc-700 rounded-3xl">
        <ChartsHeader category="Color Mappping" title="USA CLIMATE - WEATHER BY MONTH" />
        <div className="w-full">
          <ChartComponent
            id="charts"
            primaryXAxis={ColorMappingPrimaryXAxis}
            primaryYAxis={ColorMappingPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            legendSettings={{ mode: 'Range', background: 'white' }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#3F3F46' : '#fff'}
          >
            <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={colorMappingData[0]}
                name="USA"
                xName="x"
                yName="y"
                type="Column"
                cornerRadius={{
                  topLeft: 10,
                  topRight: 10,
                }}
              />
            </SeriesCollectionDirective>
            <RangeColorSettingsDirective>
              {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
            </RangeColorSettingsDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default ColorMapping;