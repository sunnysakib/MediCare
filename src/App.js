import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import Appointment from "./Pages/Appointment/Appointment";
import RequireAuth from "./Pages/Login/RequireAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyAppointments from "./Pages/Dashboard/MyAppointments";

import BloodBank from './Pages/BloodBank/BloodBank';
import AmbulanceService from './Pages/AmbulanceService/AmbulanceService';
function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyAppointments/>}></Route>
          <Route path="review" element={<MyReview/>}></Route>
          <Route path="history" element={<MyHistory/>}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="blood-bank" element={<BloodBank />} />
        <Route path="ambulance-service" element={<AmbulanceService />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
