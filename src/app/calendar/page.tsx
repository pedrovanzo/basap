"use client";

import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from "@syncfusion/ej2-react-schedule";

export default function Page() {
  const data = [
    {
      Id: 1,
      Subject: 'Meeting',
      StartTime: new Date(2023, 1, 15, 9, 0),
      EndTime: new Date(2023, 1, 15, 10, 30),
    },
  ];
  return (
  <>
    <div className="flex flex-row p-2 bg-fuchsia-900 text-fuchsia-200 text-xl">This is a page for the main calendar component</div>
    <div>
      <ScheduleComponent
      width={'100%'}
      height={'400px'}
      currentView="Day"
        selectedDate={data[0].StartTime}
        eventSettings={{
          dataSource: data,
        }}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
      </ScheduleComponent>
    </div>
  </>
  )
}
