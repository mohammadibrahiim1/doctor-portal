import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
              >
                <li>
                  <Link>Home</Link>
                </li>

                <li>
                  <Link to="about" className="justify-between">
                    About
                  </Link>
                </li>

                <li>
                  <Link to="/appointment">Appointment</Link>
                </li>
                <li>
                  <Link to="/reviews">Reviews</Link>
                </li>

                <li>
                  <Link to="/contactUs">Contact Us</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className=" normal-case text-lg">
              Doctors Portal
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 ">
              <li className=" hover:bg-accent hover:text-white">
                <Link to="/about">About</Link>
              </li>
              <li tabIndex={0} className="hover:bg-accent hover:text-white">
                <Link to="/appointment">Appointment</Link>
              </li>
              <li className=" hover:bg-accent hover:text-white">
                <Link to="/reviews">Reviews</Link>
              </li>
              <li className=" hover:bg-accent hover:text-white">
                <Link to="/contactUs">Contact Us</Link>
              </li>
              <li className=" hover:bg-accent hover:text-white">
                <Link to="login">Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
