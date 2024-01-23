import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { Link } from "react-router-dom";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center h-1/2"
    >
      <div className="flex-1 hidden lg:block ">
        <img className="mt-[-200px]" src={doctor} />
      </div>
      <div className="flex-1 px-5 py-10">
        <h3 className="text-xl text-secondary font-bold">Appointment</h3>
        <h2 className="text-3xl text-white pb-5">Make an Appointment Today</h2>
        <p className="text-white text-[18px] pb-5 md:w-3/4">
          You can handle their appointment schedule for any doctor. You can make
          appointments with any available doctor simply by logging into the
          website. It is a trouble-free way choose preferred doctor according to
          health issues without going to the hospital physically.
        </p>
        <Link to="/appointment">
          <PrimaryButton>Get Appointment</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default MakeAppointment;
