import React from "react";
import "./VolunteerReg.css";
import logo from "../../logos/ZONE.png";

const VolunteerReg = () => {
  return (
    <div className="register-container lg:w-2/5 w-4/5 border p-5 shadow-lg mx-auto my-16">
      <div className="w-1/2 mx-auto">
        <img src={logo} alt="" />
      </div>
      <h1 className="my-8 text-center font-extrabold uppercase text-4xl text-teal-600">
        Register as Volunteer
      </h1>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Full Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Date</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Description</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control "
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Organize books at the library.</label>
        </div>
        <div className="my-10">
          <button className="bg-indigo-500 text-gray-100 px-4 py-2.5 w-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
            Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default VolunteerReg;
