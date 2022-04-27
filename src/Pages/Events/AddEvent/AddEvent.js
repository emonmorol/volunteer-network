import React from "react";
import "./AddEvent.css";

const AddEvent = () => {
  return (
    <div className="add-event-content">
      <h1 className="my-5 text-center font-extrabold uppercase text-teal-500">
        Add Event Component
      </h1>
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Event Title</label>
          </div>

          <div className="form-floating">
            <input
              type="date"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Event Date</label>
          </div>
          <div className="form-floating">
            <textarea
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Event Description</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control "
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Event Banner</label>
          </div>
        </div>
        <div className="my-10 flex justify-center">
          <button className="bg-indigo-500 text-gray-100 px-4 py-2.5 w-1/4 rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
