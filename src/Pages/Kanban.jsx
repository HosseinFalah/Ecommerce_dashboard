import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';
import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../Components';
import { v4 as uuidv4 } from 'uuid';

const Kanban = () => {
  return (
    <div className="pt-2 dark:bg-zinc-800 h-full">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
        <Header category="App" title="Kanban"/>
        <KanbanComponent id="kanban" dataSource={kanbanData} cardSettings={{contentField: "Summary", headerField: "Id"}} keyField="Status">
          <ColumnsDirective>
            {kanbanGrid.map((item) => 
              <ColumnDirective key={uuidv4()} {...item}/>
            )}
          </ColumnsDirective>
        </KanbanComponent>
      </div>
    </div>
  )
}

export default Kanban