import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../Components';

const Stacked = () => (
  <div className="pt-12 dark:bg-zinc-800 h-full">
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-[#33373E] rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart/>
      </div>
    </div>
  </div>
);

export default Stacked;