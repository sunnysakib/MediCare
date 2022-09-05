import './App.css';
import Navbar from './Pages/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';

import BloodBank from './Pages/BloodBank/BloodBank';
import AmbulanceService from './Pages/AmbulanceService/AmbulanceService';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="blood-bank" element={<BloodBank />} />
        <Route path="ambulance-service" element={<AmbulanceService />} />
      </Routes>

    </div>
  );
}

export default App;