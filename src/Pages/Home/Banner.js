import React from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import Navbar from "../Shared/Navbar";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="banner">
      <Navbar navbarType="banner"/>
      <div className="banner-header max-w-7xl mx-auto px-4 text-[12px] h-[580px] md:px-12 ">
        <div >
          <TypeAnimation
            sequence={[
              "WE PROVIDE BEST HEALTHCARE",
              1000,
              "WE PROVIDE BEST AMBULANCE",
              1000,
              "WE PROVIDE BEST DOCTOR",
              1000,
            ]}
            speed={50} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: "3em" }}
            className='type-animation'
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely
          />
          <p className="py-6 text-[#F6F7F9] w-100 text-[18px] text-left  md:w-50">
          Medicare, a virtual healthcare service that allows users to enjoy all the features of 
          physical hospitals and medical services simply with the help of internet. you can make Appointment and
          Payment, get blood from Blood Bank, get  Ambulance Service, There is 24/7 Emergency Service, Video Conference 
          with Doctor and many more services provided here.
          </p>
          <Link to="/appointment"><PrimaryButton headerBtn = 'headerBtn'>Get Appointment</PrimaryButton></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
