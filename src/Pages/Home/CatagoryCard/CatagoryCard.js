import React from "react";
import "./CatagoryCard.css";

const CatagoryCard = ({ category }) => {
  const { title, banner } = category;
  return (
    <div className="category-card-content relative">
      <div>
        <img src={banner} alt="" />
      </div>
      <div className="card-bottom">
        <p className="uppercase">{title}</p>
      </div>
    </div>
  );
};

export default CatagoryCard;
