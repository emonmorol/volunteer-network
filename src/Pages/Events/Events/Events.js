import React from "react";
import { Link } from "react-router-dom";
import AddEvent from "../AddEvent/AddEvent";
import "./Events.css";

const Events = () => {
  return (
    <div className="event-container">
      <div className="side-nav">
        <p>
          <Link to="/events/volunteer-list">Volunteer List</Link>
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
