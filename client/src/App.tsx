import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Dash/Home";
import "./App.css";

function App(): JSX.Element {
  const [user, setUser] = useState<null>(null);

  const getUser = async () => {
    try {
      const url = `${process.env.REACT_APP_API_URL}/auth/login/success`;
      const { data } = await axios.get(url, { withCredentials: true });
      setUser(data.user); // Assuming data.user contains the user object from Google OAuth
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route
          exact
          path="/dashboard"
          element={user ? <Home user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  );
}

export default App;
