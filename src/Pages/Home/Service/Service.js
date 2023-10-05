import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
// import { FaCapsules } from "react-icons/fa6";

const Service = ({ service }) => {
  const { icon, details, service_name, _id } = service;

  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="service_card">
          <div>
            <div>
              <img src={icon} alt="" srcSet="" />
            </div>
            <h2 className="service_name">{service_name}</h2>
            <p className="service_details">{details}</p>
            <Link className="flex items-center gap-2">
              <Link to={`/service/${_id}`} className="read_more">
                Read more
              </Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="8.66797" cy="8.625" r="8.39453" fill="#0FE3AF" />
                <path
                  d="M7.90101 12.466V4.78418H9.42942V12.466H7.90101ZM4.82715 9.38645V7.85804H12.509V9.38645H4.82715Z"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
