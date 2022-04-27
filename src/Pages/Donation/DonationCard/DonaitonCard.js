import React from "react";
import "./DonationCard.css";

const DonaitonCard = ({ donation, handleDelete }) => {
  const {
    data: { title, banner },
    name,
    email,
    _id,
  } = donation;

  return (
    <div className="donation-card flex p-4 rounded-lg relative">
      <div className="w-1/4">
        <img className="w-full" src={banner} alt="" />
      </div>
      <div className="pl-5">
        <p className="text-3xl font-bold">{title}</p>
        <p>
          Donated By :{" "}
          <span className="text-xl font-bold uppercase text-teal-500">
            {name}
          </span>
        </p>
        <p>Email : {email}</p>
      </div>
      <button onClick={() => handleDelete(_id)} className="button">
        Cancel
      </button>
    </div>
  );
};

export default DonaitonCard;
