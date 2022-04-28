import React, { useEffect, useState } from "react";
import "./AddEvent.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddEvent = () => {
  const [categoryInfo, setCategoryInfo] = useState({
    title: "",
    date: "",
    description: "",
    banner: "",
  });

  useEffect(() => {
    if (categoryInfo.title) {
      axios.post(
        "https://volunteer-zone-patrified.herokuapp.com/category",
        categoryInfo
      );
      toast("This Category Added");
    }
  }, [categoryInfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("opps", e.target.title);
    const title = e?.target?.title?.value;
    const description = e?.target?.description?.value;
    const banner = e?.target?.banner?.value;
    const addedCategory = {
      ...categoryInfo,
      title,
      description,
      banner,
    };
    setCategoryInfo(addedCategory);
  };
  console.log(categoryInfo);

  return (
    <div className="add-event-content">
      <h1 className="my-5 text-center font-extrabold uppercase text-teal-500">
        Add Event Category
      </h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="form-floating">
            <input
              type="text"
              name="title"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Event Title</label>
          </div>

          <div className="form-floating">
            <input
              type="date"
              name="data"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Event Date</label>
          </div>
          <div className="form-floating">
            <textarea
              type="text"
              name="description"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              required
            />
            <label htmlFor="floatingInput">Event Description</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="banner"
              className="form-control "
              id="floatingPassword"
              placeholder="Password"
              required
            />
            <label htmlFor="floatingPassword">Event Banner</label>
          </div>
        </div>
        <div type="submit" className="my-10 flex justify-center">
          <button className="bg-indigo-500 text-gray-100 px-4 py-2.5 w-1/4 rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
            Add Event
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddEvent;
