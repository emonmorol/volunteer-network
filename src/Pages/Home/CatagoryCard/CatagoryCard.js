import React from "react";
import { Link } from "react-router-dom";
import "./CatagoryCard.css";

const CatagoryCard = ({ category }) => {
  const { title, banner, _id } = category;
  return (
    <Link to={`/donation/${_id}`} className="category-card-content relative">
      <div className="bg-black hover:scale-110 transition-transform duration-500">
        <img className="opacity-80" src={banner} alt="" />
      </div>
      <div className="card-bottom">
        <p className="uppercase">{title}</p>
      </div>
    </Link>
  );
};

export default CatagoryCard;
