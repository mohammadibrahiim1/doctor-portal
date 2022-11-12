import React from "react";

const MakeAppointment = () => {
  return (
    <div>
      <section className="mt-32">
        <div
          className="hero bg-[url('https://i.ibb.co/Sw7NCtV/bg-blue-1.png')] bg-cover "
          style={{ width: "1441px", height: "525px" }}
        >
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://i.ibb.co/4W510h7/doctor-small-1.png"
              alt=""
              className="max-w-sm rounded-lg -mt-24 hidden lg:block"
              style={{ width: "606.84px", height: " 636px" }}
            />
            <div style={{ width: "533px", height: "299" }} className="ml-7">
              <h1 className="text-primary font-bold">Appointment</h1>
              <h1 className="font-bold pt-2 text-2xl text-white">
                Make an appointment Today
              </h1>
              <p className="text-xs py-4 text-white">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsumis that it has a more-or-less
                normal distribution of letters,as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page
              </p>
              <button className="btn btn-primary text-white">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MakeAppointment;
