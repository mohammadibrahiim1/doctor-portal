import React from "react";

const Service = ({ service }) => {
  const { Image, description, name } = service;

  return (
    <div>
      <div
        className="card bg-gray-100 shadow-xl"
        style={{ width: "440px", height: "310px" }}
      >
        <figure className="px-10 pt-10">
          <img
            src={Image}
            alt="Shoes"
            className="rounded-xl"
            style={{ width: "116.5px", height: "115px" }}
          />
        </figure>
        <div className=" mt-4 pr-5 pl-5  items-center text-center">
          <h2 className="text-sm text-[#3A4256] font-bold ">{name}</h2>
          <p className="text-xs pt-1">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
