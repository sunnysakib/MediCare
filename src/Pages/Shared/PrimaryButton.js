import React from "react";

const PrimaryButton = ({ children, headerBtn, ...otherProps }) => {
  return (
    <button
      className={`btn ${
        headerBtn
          ? "bannerBtn uppercase text-white font-bold"
          : "btn-primary border-none uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary"
      } `}
      
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
