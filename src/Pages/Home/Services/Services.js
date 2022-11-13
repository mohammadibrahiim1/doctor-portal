import React from "react";
import Service from "../Service/Service";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Fluoride Treatment",
      Image: "https://i.ibb.co/h2gddVR/fluoride-1.png",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 2,
      name: "Cavity Filling",
      Image: "https://i.ibb.co/DKc1tRK/cavity-1.png",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
    {
      id: 3,
      name: "Teeth Whitening",
      Image: "https://i.ibb.co/XbQjbdZ/whitening-1.png",
      description:
        "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
    },
  ];
  return (
    <div className="min-h-[1193px] max-w-[1388px] mx-auto mt-[200px] ">
        <div className="text-center">
            <h2 className="text-primary font-bold">OUR SERVICES</h2>
            <p className="text-accent pt-1">Services We Provide</p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-auto gap-4 mt-10 ">
        {services.map((service) => (
          <Service
           key={service.id} 
           service={service}>

           </Service>
        ))}
      </div>
      <div>
      <div className="hero mt-20">
  <div className="hero-content flex-col lg:flex-row md:flex-col">
    <img src="https://i.ibb.co/7vYTVkb/treatment-1.png" alt="treatment" style={{width:'458px',height:'576px'}} className=" rounded-lg " />
    <div style={{width:'497px',height:'347px',color:'#3A4256'}} className="ml-10 mb-7">
      <h1 className="text-3xl font-bold">Exceptional Dental <br /> Care, on Your Terms</h1>
      <p className="py-6 text-xs">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">Get Started</button>
    </div>
  </div>
</div>
      </div>


    </div>
  );
};

export default Services;
