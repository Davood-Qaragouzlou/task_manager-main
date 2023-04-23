import React, { useEffect, useState } from "react";
import { Calendar, DayCellContentArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import faLocale from "@fullcalendar/core/locales/fa";
import { useContextDate } from "@/contexts/Date";
import FullCalendar from "@fullcalendar/react";
import icons from "@/data/icons";

interface Props {
  // props here...
}

const MyCalendar: React.FC<Props> = (
  {
    /* props here */
  }
) => {
  const calendarEl = React.useRef<any | null>(null);
  const useContext = useContextDate();

  useEffect(() => {
    return () => {
      useContext?.setTime("");
    };
  }, []);

  return (
    <div className="w-full mx-auto">
      <div className="pt-[25px]">
        <div className="bg-white ml-[50px]">
          <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            dayCellContent={(props) => {
              return (
                <div className="w-full flex flex-col justify-between h-full group">
                  <div className="mt-auto flex justify-between">
                    <button className="bg-[#208d8e] rounded-[3px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 h-max w-max">
                      {icons.plusSquare("#ffff")}
                    </button>
                    <div className="">{props.dayNumberText}</div>
                  </div>
                </div>
              );
            }}
            headerToolbar={false}
            locale={faLocale}
            contentHeight={"700px"}
            fixedWeekCount={false}
            ref={calendarEl}
            dayCellClassNames={"relative right-0"}
            weekNumberClassNames={"bg-red-100"}
            // dayHeaderClassNames={"bg-red-100"}
            datesSet={(args) => useContext?.setTime(args.view.title)}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
