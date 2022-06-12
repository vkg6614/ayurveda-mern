import React from "react";
import "./HeaderBottom.css";
import logo2 from "../../images/logo2.png";
import bottom_header from "../../images/bottom-header.png";

const HeaderBottom = () => {
  return (
    <div className="bottom-header-container">
      <img width="100%" src={bottom_header} alt="bottom-header-img" />
      <div className="bottom-header-div">
        <div>
          <img src={logo2} alt="logo2-img" />
          <p>ARSH</p>
        </div>
        <p>
          At ARSH, we provide all-natural products that
          <br /> your plant needs to grow, be it your home plant,
          <br />
          backyard garden, or farm.
        </p>
      </div>
    </div>
  );
};

export default HeaderBottom;
