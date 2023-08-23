import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

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
    <div className=" max-w-[1388px] mx-auto mt-[200px] ">
      <div className="text-center">
        <h2 className="services_title">Services</h2>
        <p className="services_subtitle">Feel Like Home With Best Medical Care</p>
      </div>
      <div className="services_card_container">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
