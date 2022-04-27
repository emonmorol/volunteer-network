import React from "react";
import SearchBar from "../../Shared/Header/SearchBar/SearchBar";
import Catagories from "../Catagories/Catagories";
// import logo from "../../../logos/banner.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <SearchBar />
        <Catagories />
      </div>
    </div>
  );
};

export default Home;
