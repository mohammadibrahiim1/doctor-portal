import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";
import ProfessionalDoctors from "../../../Components/ProfessionalDoctors/ProfessionalDoctors";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  return (
    <div>
      <div className=" w-[1744px] mx-auto background mt-[30px] mb-[150px] flex items-center justify-center">
        <h1 className="text-[2.5rem] text-[#1c1c1c] font-semibold font-sans  ">Our Services</h1>
      </div>
      {/* <div className="text-center">
        <button className=" lato services_title">Services</button>
        <p className="services_subtitle">Feel Like Home With Best Medical Care</p>
      </div> */}
      <div className="services_card_container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>

      <div className="w-[1200px] mx-auto background-img my-[130px] flex items-center justify-center ">
        <div className="w-[328px] mx-auto bg-white  self-center flex flex-col justify-center items-center px-[31px] py-[41px] ">
          <button className="lato">TIME</button>
          <h1 className="text-[30px] text-[#1c1c1c] font-semibold font-sans ">Working Hours</h1>
          <p className="text-sm font-semibold font-sans text-[#545454] text-center">
            Sunday To Friday 9.00 am - 10.00 pm Saturday Closed
          </p>
        </div>
      </div>
      <ProfessionalDoctors></ProfessionalDoctors>
    </div>
  );
};

export default Services;
