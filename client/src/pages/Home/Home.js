import React from "react";
import "./Home.css";
import header_img from "../../images/rectangle.png";
import ProductLists from "../../components/ProductLists/ProductLists";
import HeaderBottom from "../../components/HeaderBottom/HeaderBottom";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-container">
        <img src={header_img} alt="header-img" />
        <h1>MAKE SPACE FOR</h1>
        <h1>nature</h1>
      </div>
      <ProductLists />

      <Pagination />

      <HeaderBottom />
    </div>
  );
};

export default Home;
