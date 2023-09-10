import "./calendar.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";

export const Calendar = () => {
  return (
    <FullCalendar
      plugins={[timeGridPlugin]}
      contentHeight={"70vh"}
      initialView="timeGridWeek"
      headerToolbar={{
        left: "",
        center: "custom1,custom2,custom3,custom4,custom5",
        right: "prev,next",
      }}
      customButtons={{
        custom1: {
          text: "Class",
          click: function () {
            alert("should probably make this do something");
          },
        },
        custom2: {
          text: "Deadline",
          click: function () {
            alert("should probably make this do something");
          },
        },
        custom3: {
          text: "Exam",
          click: function () {
            alert("should probably make this do something");
          },
        },
        custom4: {
          text: "Study Block",
          click: function () {
            alert("should probably make this do something");
          },
        },
        custom5: {
          text: "Extracurricular",
          click: function () {
            alert("So a Horse walks into a bar");
          },
        },
      }}
    />
  );
};
