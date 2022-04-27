import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import DonaitonCard from "../DonationCard/DonaitonCard";

const Donation = () => {
  const [user] = useAuthState(auth);
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const getDonations = async () => {
      await fetch(`http://localhost:5000/donations?email=${user?.email}`)
        .then((res) => res.json())
        .then((data) => setDonations(data));
    };
    getDonations();
  }, []);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are Your Sure ??");
    if (proceed) {
      fetch(`http://localhost:5000/donate/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = donations.filter((service) => service._id !== id);
          setDonations(remaining);
        });
    }
  };
  return (
    <div>
      <h2 className="text-center text-2xl text-teal-500 my-10 font-extrabold uppercase">
        So Far You have Donated.
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mx-20">
        {donations.map((donation) => (
          <DonaitonCard
            key={donation._id}
            donation={donation}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Donation;
