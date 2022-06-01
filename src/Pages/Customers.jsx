import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import Header from './../Components/Header';
import { v4 as uuidv4 } from 'uuid';

const Customers = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers"/>
      <GridComponent 
        dataSource={customersData} 
        allowPaging 
        allowSorting 
        toolbar={['Delete', "Add", "Edit", "Search"]} 
        editSettings={{allowDeleting: true, allowEditing: true, allowAdding: true}}
        width="auto">
        <ColumnsDirective>
          {customersGrid.map((item) => (
            <ColumnDirective key={uuidv4()} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers;