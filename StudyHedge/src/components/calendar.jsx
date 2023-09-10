import "./calendar.css";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useState, useEffect } from "react";
import { db, auth, storage } from ".././config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
  Firestore,
} from "firebase/firestore";
import React, { useRef } from "react";

export const Calendar = () => {
  const calendarRef = useRef();

  const [data, setData] = useState({});
  const eventsPlsWork = [
    {
      title: "Programming Assignment",
      date: new Date("2023-09-10T16:20:00"),
    },
    {
      title: "L7 section 2.4",
      date: new Date(2023, 8, 11, 9, 30, 0o0),
    },
    {
      title: "Lecture Quiz 7",
      date: new Date(2023, 8, 11, 22, 30, 0o0),
    },
    {
      title: "HW 2",
      start: new Date(2023, 8, 12, 2, 0o0, 0o0),
      end: new Date(2023, 8, 12, 4, 0o0, 0o0),
    },
    {
      title: "HW 2_F23",
      date: new Date(2023, 8, 12, 22, 30, 0o0),
    },
    {
      title: "Quiz2 (L4-L6)",
      date: new Date(2023, 8, 13, 22, 30, 0o0),
    },
    {
      title: "Examlet",
      start: new Date(2023, 8, 14, 18, 30, 0o0),
      end: new Date(2023, 8, 14, 20, 30, 0o0),
    },
    {
      title: "L9 section 2.6",
      start: new Date(2023, 8, 15, 2, 0o0, 0o0),
      end: new Date(2023, 8, 15, 4, 0o0, 0o0),
    },
    {
      title: "Lecture Quiz 9",
      start: new Date(2023, 8, 15, 10, 30, 0o0),
      end: new Date(2023, 8, 15, 12, 30, 0o0),
    },
  ];

  const fetchData = async () => {
    const userUID = auth.currentUser.uid;
    const eventsRef = collection(db, `/calendars/${userUID}/events/`);
    getDocs(eventsRef)
      .then((snapshot) => {
        const events = snapshot.docs.map((event) => event.data());
        setData(eventsRef);
        console.log(events);
      })
      .catch((e) => {
        console.log(e + "fetching error");
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <FullCalendar
      ref={calendarRef}
      plugins={[timeGridPlugin]}
      events={eventsPlsWork}
      editable={true}
      selectable={true}
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
