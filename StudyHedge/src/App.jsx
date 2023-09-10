import "./App.css";
import "@ionic/react/css/core.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useEffect, useState } from "react";
import { Login } from "./components/login";
import { Settings } from "./components/settings";
import { auth } from "./config/firebase";
import { Calendar } from "./components/calendar";
import BCalendar from "./components/bigCalendar";
import AddDeadline from "./components/addDeadline";
import { setupIonicReact } from "@ionic/react";

setupIonicReact();

function App() {
  const [user, setUser] = useState(null);
  const [canvas, setCanvas] = useState("");
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    // Set up a Firebase authentication observer
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    // Clean up the observer when the component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="App">
      {!user ? (
        <Login></Login>
      ) : !submit ? (
        <div className="container mx-auto sm px-4">
          <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <form>
                <div>
                  <label
                    htmlFor="canvas"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    API Key
                  </label>
                  <div className="mt-2 mb-2">
                    <input
                      id="api"
                      name="api"
                      type="api"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setCanvas(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full gap-2 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={(e) => {
                      setSubmit(true);
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col">
          <div className="flex flex-1">
            <main className="w-3/4 p-4">
              <div className="h-full bg-white rounded-lg p-4 shadow">
                <BCalendar></BCalendar>
              </div>
            </main>
            <aside className="w-1/4 h-screen">
              <div className="flex flex-col space-y-10 justify-around p-6">
                <div className="flex justify-around items-center content-around">
                  <div className="text-4xl font-bold text-blue-500 shadow-lg p-4 rounded-lg">
                    Study Hedge
                    <img
                      className="mx-auto h-10 w-auto"
                      src="src/assets/Hedge.png"
                      alt="Study Hedge"
                    />
                  </div>
                </div>
                <AddDeadline></AddDeadline>

                <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg flex items-center">
                  {/* SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 mr-2" // Adjust the size and margin as needed
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                    />
                  </svg>
                  Add Exam
                </button>

                <button className="bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg flex items-center">
                  {/* SVG icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 mr-2" // Adjust the size and margin as needed
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                  Edit Schedule
                </button>
              </div>
              <div className="absolute bottom-0 right-0 p-4">
                <Settings></Settings>
              </div>
            </aside>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
