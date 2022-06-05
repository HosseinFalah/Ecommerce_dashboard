import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { ordersData, ordersGrid } from '../data/dummy'
import { Header } from '../Components'
import { v4 as uuidv4 } from 'uuid';

const Orders = () => {
  return (
    <div className="pt-2 dark:bg-zinc-800 h-full">
      <div className="m-2 md:m-10 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
        <Header category="Page" title="Orders"/>
        <GridComponent
          id="gridcomp" 
          dataSource={ordersData}
          allowPaging 
          allowSorting
          >
          <ColumnsDirective>
            {ordersGrid.map((item) => (
              <ColumnDirective key={uuidv4()} {...item}/>
            ))}
          </ColumnsDirective>
          <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
        </GridComponent>
      </div>
    </div>
  )
}

export default Orders;