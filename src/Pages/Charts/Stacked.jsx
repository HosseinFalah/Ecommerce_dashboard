import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../Components';

const Stacked = ({currentMode}) => (
  <div className="pt-12 dark:bg-zinc-800 h-full">
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-zinc-700 rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart currentMode={currentMode}/>
      </div>
    </div>
  </div>
);

export default Stacked;