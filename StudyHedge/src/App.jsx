import "./App.css";
import { useEffect, useState } from "react";
import { isSignedIn } from "./components/auth";
import { Login } from "./components/login";
import { Logout } from "./components/logout";

function App() {
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    // Check if the user is signed in asynchronously
    isSignedIn().then((signedIn) => {
      setUserSignedIn(signedIn);
    });
  }, []);

  return (
    <div className="App">
      {!userSignedIn ? <Login></Login> : <Logout></Logout>}
    </div>
  );
}

export default App;
