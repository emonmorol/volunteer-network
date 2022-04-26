import React from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";

const Registration = () => {
  return (
    <>
      <div className="lg:flex">
        <div className="lg:w-1/2 xl:max-w-screen-sm">
          <div className="mt-8 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
            <h2
              className="text-center text-4xl text-indigo-900 font-display font-extrabold lg:text-left xl:text-5xl
                    xl:text-bold"
            >
              Registration
            </h2>
            <div className="mt-8">
              <form>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Your Name"
                  />
                  <label for="floatingInput">Your full name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="Your Email"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="password"
                    className="form-control "
                    id="floatingPassword"
                    placeholder="Password"
                  />
                  <label for="floatingPassword">Your Password</label>
                </div>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control "
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                  />
                  <label for="floatingConfirmPassword">Confirm Password</label>
                </div>
                <div className="mt-8">
                  <button className="bg-indigo-500 text-gray-100 px-4 py-2.5 w-full rounded-full tracking-wide font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600 shadow-lg">
                    Register
                  </button>
                </div>
              </form>
              <div className="mt-8 text-sm font-display font-semibold text-gray-700 text-center">
                Already Have An Account ?{" "}
                <Link
                  to="/login"
                  className="cursor-pointer text-indigo-600 hover:text-indigo-800"
                >
                  Login
                </Link>
              </div>
            </div>
            <div>
              <Social />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-[90vh]">
          <div className="max-w-lg transform duration-200 hover:scale-110 cursor-pointer ">
            <img
              src="https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
