import React from "react";
import Feedback from "../Feedback/Feedback";
import "./PatientFeedback.css";

const PatientFeedback = () => {
  const patientFeedbacks = [
    {
      id: 1,
      name: "Robert Devis",
      type: "Dental Patient",
      img: "https://i.ibb.co/xhWT0KS/Photo-3.png",
      description:
        "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
    },
    {
      id: 2,
      name: "Vanseena Adams",
      type: "Dental patient",
      img: "https://i.ibb.co/g4CWtKL/Photo-2.png",
      description:
        "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
    },
    {
      id: 3,
      name: "Mark Brown",
      type: "Dental patient",
      img: "https://i.ibb.co/8xSyL1C/Photo-1.png",
      description:
        "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
    },
    {
      id: 4,
      name: "Vanseena Adams",
      type: "Dental patient",
      img: "https://i.ibb.co/Yb6vRgn/Photo.png",
      description:
        "Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate.",
    },
  ];
  return (
    <div className="py-[10rem]">
      <div className="w-[31rem] mx-auto flex justify-center items-center flex-col">
        <h2 className="text-[#1C1C1C] font-family text-center border py-[0.188rem] px-[0.438rem]">Feedback</h2>
        <p className="text-[2rem] font-sans text-center font-semibold">
          Feedbacks about our service from the bottom of heart
        </p>
      </div>

      <div className=" w-[74.25rem] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 mx-auto gap-[1.375rem] py-[2.563rem] ">
        {patientFeedbacks.map((feedback) => (
          <Feedback key={feedback.id} feedback={feedback}></Feedback>
        ))}
      </div>
    </div>
  );
};

export default PatientFeedback;
