import React from "react";
import Service from "../../Pages/Home/Service/Service";
import { useGetServicesQuery } from "../../redux/features/api/servicesApi/servicesApi";

const OurServices = () => {
  const { data } = useGetServicesQuery();
  console.log(data);
  const services = data?.data;
 
  return (
    <div>
      <div className="max-w-[1388px] mx-auto mt-[200px] ">
        <div className="text-center">
          <button className=" lato services_title">Services</button>
          <p className="services_subtitle">Feel Like Home With Best Medical Care</p>
        </div>
        <div className="services_card_container">
          {services?.map((service) => (
            <Service key={service.id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
