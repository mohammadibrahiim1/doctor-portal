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
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                {/* <li tabIndex={0}>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li> */}
                <li>
                  <Link to="/appointment">Appointment</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="normal-case text-xl">
              <div className="flex justify-center items-center gap-1">
                <img src="https://i.ibb.co/jRpnpcB/Icon.png" alt="" srcSet="" className="h-10 w-10 " /> <p>Pharma</p>
              </div>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 hover:bg-none">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* <li tabIndex={0}>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <Link>Submenu 1</Link>
                    </li>
                    <li>
                      <Link>Submenu 2</Link>
                    </li>
                  </ul>
                </details>
              </li> */}
              <li>
                <Link to="/appointment">Appointment</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/login" className="btn btn-secondary px-8">
              Login
            </Link>
            {/* <Link className="btn">Button</Link> */}
          </div>
        </div>
        {/* https://i.ibb.co/jRpnpcB/Icon.png https://i.ibb.co/SfS541t/Photo-6.png https://i.ibb.co/dk3kdz2/Photo-5.png
        https://i.ibb.co/2PgJdsQ/Photo-4.png https://i.ibb.co/bgfKQKm/Photo-3.png https://i.ibb.co/Wk83VrS/Photo-2.png
        https://i.ibb.co/1mphkDs/Photo-1.png https://i.ibb.co/mqswrdc/Photo.png */}
      </section>
    </div>
  );
};

export default Header;
