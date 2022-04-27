import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddEvent from "../AddEvent/AddEvent";
import VolunteerList from "../VolunteerList/VolunteerList";
import "./Events.css";

const Events = () => {
  return (
    <div className="event-container">
      <div>
        <p>
          <Link to="/events/">Volunteer List</Link>
        </p>
        <p>
          <Link to="/events/">Add Event</Link>
        </p>
      </div>
      <div className="event-content">
        <AddEvent />
      </div>
    </div>
  );
};

export default Events;
