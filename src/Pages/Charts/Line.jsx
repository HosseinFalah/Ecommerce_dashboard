import React from 'react';
import { Header, LineChart } from '../../Components'
const Line = () => {
  return (
    <div className="pt-12 dark:bg-zinc-800 h-full">      
      <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-zinc-700 rounded-3xl">
        <Header category="Chart" title="InflationRate"/>
        <div className="w-full">
          <LineChart/>
        </div>
      </div>
    </div>
  )
}

export default Line