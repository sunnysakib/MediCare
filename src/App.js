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
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyReview from "./Pages/Dashboard/MyReview";
import MyHistory from "./Pages/Dashboard/MyHistory";
import MyAppointments from "./Pages/Dashboard/MyAppointments";

import BloodBank from "./Pages/BloodBank/BloodBank";
import AmbulanceService from "./Pages/AmbulanceService/AmbulanceService";
import Payment from "./Component/Payment/Payment";
import Users from "./Pages/Dashboard/Users";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddDoctor from "./Pages/Dashboard/AddDoctor";
import ManageDoctors from "./Pages/Dashboard/ManageDoctors";
import Helpline from "./Pages/Helpline/Helpline";
import ContactPage from "./Pages/ContactPage/ContactPage";
function App() {
  return (
    // max-w-7xl mx-auto px-12
    <div className=""> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/helpline" element={<Helpline/>} />

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
          <Route index element={<MyAppointments />}></Route>
          <Route path="review" element={<MyReview />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
          <Route path="users" element={<RequireAdmin><Users/></RequireAdmin>}></Route>
          <Route path="addDoctor" element={<RequireAdmin><AddDoctor/></RequireAdmin>}></Route>
          <Route path="manageDoctor" element={<RequireAdmin><ManageDoctors/></RequireAdmin>}></Route>
          <Route path="payment/:id" element={<Payment/>}></Route>
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
