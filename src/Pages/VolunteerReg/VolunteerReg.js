import React, { useEffect, useState } from "react";
import "./VolunteerReg.css";
import logo from "../../logos/ZONE.png";
import { useParams } from "react-router-dom";
import useCategories from "../../Hooks/useCategories";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import axios from "axios";

const VolunteerReg = () => {
  const [categories] = useCategories();
  const { categoryId } = useParams();
  const [category, setCategory] = useState({});
  const [user] = useAuthState(auth);
  const [volunteer, setVolunteer] = useState({});

  useEffect(() => {
    if (categories) {
      const registered = categories.find((a) => categoryId === a._id);
      if (registered) {
        setCategory(registered);
      }
    }
  }, [categories]);

  useEffect(() => {
    if (volunteer?.description) {
      fetch("http://localhost:5000/addVolunteer", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(volunteer),
      });
    }
  }, [volunteer]);
  const handleVolunteerRegistration = (e) => {
    e.preventDefault();
    const newVolunteer = {
      name: user?.displayName,
      email: user?.email,
      date: "",
      description: e.target.description.value,
      books: e.target.books.value,
    };
    if (volunteer) {
      setVolunteer(newVolunteer);
    }
    toast("registration Complete");
  };
  console.log(volunteer);

  return (
    <div className="register-container lg:w-2/5 w-4/5 border p-5 shadow-lg mx-auto my-16">
      <div className="w-1/2 mx-auto">
        <img src={logo} alt="" />
      </div>
      <h1 className="my-8 text-center font-extrabold uppercase text-4xl text-teal-600">
        Register as Volunteer of <br />{" "}
        <span className="text-blue-500">{category.title}</span>
        <br />
        <span>{}</span>
      </h1>
      <form onSubmit={handleVolunteerRegistration}>
        <div className="form-floating mb-3">
          <input
            type="text"
            value={user?.displayName}
            disabled
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            value={user?.email}
            disabled
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">Date</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            type="text"
            name="description"
            required
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Description</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            name="books"
            className="form-control "
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label htmlFor="floatingPassword">
            Organize books at the library.
          </label>
        </div>
        <div className="my-10">
          <button className="bg-indigo-500 text-gray-100 px-4 py-2.5 w-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerReg;
