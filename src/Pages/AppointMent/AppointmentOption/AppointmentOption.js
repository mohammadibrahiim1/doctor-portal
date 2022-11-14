import React from "react";

const AppointmentOption = ({ appointment,setTreatMent }) => {

  console.log(appointment);
  const { name, slots } = appointment;
  return (
    <div
      className="card py-3 bg-base-100 shadow-xl"
      style={{ width: "425px", height: "230px" }}
    >
      <div className="card-body">
        <div className="text-center">
          <h2 className=" text-base font-bold text-primary">{name}</h2>
          <p className="text-[14px] text-secondary">
            {" "}
            {slots.length > 0 ? slots[0] : "Try another day"}
          </p>
          <p className="text-[14px] text-accent">
            {" "}
            {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
          </p>
        </div>
        <div className="card-actions justify-end">
          <label
          onClick={()=>setTreatMent(appointment)}
            className=" text-center pt-2 border rounded text-[14px] bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary text-white  mx-auto cursor-pointer"  htmlFor="booking-modal" 
            style={{ width: "190px", height: "2.2rem" }}
          >
            Book Appointment
          </label> 
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
