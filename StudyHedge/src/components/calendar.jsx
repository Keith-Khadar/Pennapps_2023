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
} from "firebase/firestore";

export const Calendar = () => {
  const [data, setData] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: null,
    end: null,
  });

  const fetchData = async () => {
    const userUID = auth.currentUser.uid;
    console.log(`calendars/${userUID}/events`);
    const eventsRef = collection(db, `calendars/${userUID}/events`);

    try {
      const snapshot = await getDocs(eventsRef);
      const fetchedData = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(fetchedData);
      setData(fetchedData);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

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
      events={data}
    />
  );
};
