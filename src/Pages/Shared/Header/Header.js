import { faBars, faSignOut, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../logos/ZONE.png";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent text-black z-10">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link className="w-1/12" to="/">
              <img className="w-1/4" src={logo} alt="" />
            </Link>
            <button
              className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col items-center lg:flex-row list-none">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="mt-3 ml-2">Home</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/donations"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="mt-3 ml-2">Donations</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/events"
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="mt-3 ml-2">Events</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75"
                  href="#pablo"
                >
                  <span className="mt-3 ml-2">Blogs</span>
                </a>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <Link
                      to="/profile"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="mt-3 ml-2">
                        {user?.displayName ? user.displayName : "Volunteer"}
                      </span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={() => {
                        signOut(auth);
                        navigate("/login");
                      }}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75 cursor-pointer"
                      href="#pablo"
                    >
                      <span className="mt-3 ml-2">
                        <FontAwesomeIcon icon={faSignOut} />
                      </span>
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      to="/registration"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="mt-3 ml-2">Register</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/admin"
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug no-underline text-black hover:opacity-75"
                      href="#pablo"
                    >
                      <span className="mt-3 ml-2">Admin</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
