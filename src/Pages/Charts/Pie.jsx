import React from 'react';

import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../Components';

const Pie = () => (
  <div className="pt-2 dark:bg-zinc-800 h-screen">
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-zinc-700 rounded-3xl">
      <ChartsHeader category="Pie" title="Project Cost Breakdown" />
      <div className="w-full">
        <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
      </div>
    </div>
  </div>
);

export default Pie;