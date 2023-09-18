import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link className="font-sans font-semibold" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="font-sans font-semibold" to="/about">
                    About
                  </Link>
                </li>

                <li>
                  <Link className="font-sans font-semibold" to="/appointment">
                    Appointment
                  </Link>
                </li>
                <li>
                  <Link className="font-sans font-semibold" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="normal-case text-xl">
              <div className="flex justify-center items-center gap-1">
                <img src="https://i.ibb.co/jRpnpcB/Icon.png" alt="" srcSet="" className="h-10 w-10  " />{" "}
                <p className="siteName font-sans font-semibold">Pharma</p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 hover:bg-none">
              <li>
                <Link className="font-sans font-semibold" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="font-sans font-semibold" to="/about">
                  About
                </Link>
              </li>

              <li>
                <Link className="font-sans font-semibold" to="/appointment">
                  Appointment
                </Link>
              </li>
              <li>
                <Link className="font-sans font-semibold" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/login" className="btn btn-secondary px-8 font-sans">
              Appointment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
