import React, { useState, useEffect } from "react";
import { Auth } from "@firebase/auth";
import { db, auth, storage } from "./config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { ref, uploadBytres } from "firebase/storage";
import { start } from "repl";

const FirebaseScheduling = () => {
  const [data, setData] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: "",
    description: "",
    start: null,
    end: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const userUID = "";
      const eventsRef = db.collection(`calendars/${userUID}/events`);

      try {
        const snapshot = await eventsRef.get();
        const fetchedData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  const handleAddEvent = async () => {
    const db = firebase.firestore();
    const userUID = "";
    const eventsRef = db.collection(`calendars/${userUID}/events`);

    try {
      await eventsRef.add(newEvent);
      console.log("Event added sucessfully!");
      // Add more logic here
    } catch (error) {
      console.error("Error adding Event:", error);
    }
  };
};