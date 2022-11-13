import React from "react";

const Feedback = ({ feedback }) => {
  console.log(feedback);
  const { Image, description, name, address } = feedback;
  return (
    <section className="mt-20">
      <div
        className="card border shadow-xl"
        style={{ width: "440px", height: "310px" }}
      >
        <p className="text-xs p-5">{description}</p>

        <div className=" pr-5 pl-5 text-center flex items-center justify-items-center">
          <figure className="px-5 pt-10">
            <img
              src={Image}
              alt="client-img"
              className="rounded-xl"
              style={{ width: "64px", height: "64px" }}
            />
          </figure>

          <div className="mt-10 py-2 text-start">
            <h2 className="text-xs text-[#3A4256] font-bold ">{name}</h2>
            <p className="text-xs">{address}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
