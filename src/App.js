import "./App.css";
import Login from "./components/pageAuth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/404NotFound";
import Register from "./components/pageAuth/Register";
import HomePage from "./components/HomePage";
import { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./components/config/firebase";
import HomeDetail from "./components/details/homeDetail";
import Search from "./components/pages/search";
// import UserRoute from "./components/routes/UserRoute";
function App() {
  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BLcvKXPyAGnI_Ok5ve105b_kxh66bcvuLEh84DtDHyT1b0-A56P6PI8vd7by_C3bD7EZfrQj_1N9PXOW7SPh0nk",
      });
      localStorage.setItem("driverToken", token);
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    requestPermission();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="*" element={<NotFound />} />
        {/* detail */}
        {/* <Route exact path="/home/:homeId" element={<HomeDetail />} /> */}

        <Route exact path="/search" element={<Search />} />
        {/* <Route
          path="/"
          element={
            <UserRoute>
              <HomePage />
            </UserRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
