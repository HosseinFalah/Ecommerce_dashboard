import React from 'react';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { scheduleData } from '../data/dummy';
import { Header } from '../Components';

const Calendar = () => {
  return (
    <div className="pt-2 dark:bg-zinc-800 h-full">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-[#33373E] rounded-3xl">
        <Header category="App" title="Calender"/>
        <ScheduleComponent height="650px" eventSettings={{dataSource: scheduleData}} selectedDate={new Date(2021, 0, 10)}>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]}/>
        </ScheduleComponent>
      </div>
    </div>
  )
}

export default Calendar;