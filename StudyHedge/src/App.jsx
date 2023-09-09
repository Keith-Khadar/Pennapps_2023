import "./App.css";
import { useEffect, useState } from "react";
import { Login } from "./components/login";
import { Settings } from "./components/settings";
import { auth } from "./config/firebase";
import { Calendar } from "./components/calendar";

function App() {
  const [user, setUser] = useState(null);

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
      ) : (
        <div>
          <Calendar></Calendar>
          <Settings></Settings>
        </div>
      )}
    </div>
  );
}

export default App;
