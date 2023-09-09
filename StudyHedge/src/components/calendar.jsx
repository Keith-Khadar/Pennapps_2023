import "./calendar.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState } from "react";
import interactionPlugin from "@fullcalendar/interaction";
import { INITIAL_EVENTS, createEventId } from "./event-utils";

export const Calendar = () => {
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    this.setState({
      currentEvents: events,
    });
  };

  function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }
  return (
    <FullCalendar
      editable={true}
      selectable={true}
      selectMirror={true}
      dayMaxEvents={true}
      initialEvents={INITIAL_EVENTS}
      select={handleDateSelect}
      eventContent={renderEventContent}
      eventClick={handleEventClick}
      eventsSet={handleEvents}
      plugins={[timeGridPlugin, interactionPlugin]}
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
