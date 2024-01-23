import React from "react";
import featured from "../../assets/images/home3-about2.jpg";
import PrimaryButton from "../Shared/PrimaryButton";
const FeaturedService = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center max-w-7xl mx-auto px-4 mb-20 md:mb-72 md:flex-row md:px-12">
      <div className="md:w-1/2">
        <img className="" src={featured} alt="" />
      </div>
      <div className="md:w-1/2">
        <h1 className="text-accent  text-3xl font-bold uppercase">
          About Our Service
        </h1>
        <p className="text-accent text-[18px] my-5">
          Medicare, a virtual healthcare service that allows users to enjoy all
          the features of physical hospitals and medical services simply with
          the help of internet. Making Appointment & Payment, Blood Bank,
          Ambulance Service, 24/7 Emergency Service, Video Conference with
          Doctor those are our main features of our Service
        </p>
        <PrimaryButton>Read More</PrimaryButton>
      </div>
    </div>
  );
};

export default FeaturedService;
