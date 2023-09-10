import React, { useEffect, useState } from "react";
import { IonDatetime } from "@ionic/react";

// Initialization for ES Users
import { Input, Datepicker, Timepicker, initTE } from "tw-elements";
import { db, auth, storage } from ".././config/firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

export default function AddDeadline() {
  useEffect(() => {
    initTE({ Input, Timepicker, Datepicker });
  }, []);

  const [assignmentTitle, setAssignmentTitle] = useState("Event");
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showModal, setShowModal] = React.useState(false);

  const handleAddEvent = async () => {
    const userUID = auth.currentUser.uid;
    console.log(`calendars/${userUID}/events`);
    const eventsRef = collection(db, `calendars/${userUID}/events`);

    try {
      await addDoc(eventsRef, {
        title: assignmentTitle,
        date: selectedTime,
      });
    } catch (err) {
      console.err(err);
    }
  };
  // Event handler for the input field
  const handleAssignmentTitleChange = (e) => {
    setAssignmentTitle(e.target.value);
  };

  // Event handler for the IonDatetime component
  const handleDatetimeChange = (e) => {
    console.log(
      e.target.value.split("T")[0] + "-" + e.target.value.split("T")[1]
    );
    setSelectedTime(e.target.value);
  };
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg flex items-center"
      >
        {/* SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-8 h-8 mr-2" // Adjust the size and margin as needed
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Add Deadline
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Add Deadline</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <IonDatetime
                  presentation="date-time"
                  preferWheel={true}
                  onIonChange={(e) => handleDatetimeChange(e)}
                  onLoad={(e) => handleDatetimeChange(e)}
                ></IonDatetime>
                <div className="w-full max-w-sm mx-auto">
                  <label
                    htmlFor="assignmentTitle"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Assignment Title:
                  </label>
                  <input
                    type="text"
                    id="assignmentTitle"
                    name="input"
                    placeholder="Enter text..."
                    onChange={handleAssignmentTitleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => handleAddEvent()}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
