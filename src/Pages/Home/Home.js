import React from "react";
import ContactUs from "./Contactus/ContactUs";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import PatientFeedback from "./PatientFeedback/PatientFeedback";
import Services from "./Services/Services";

{/* <a href="https://ibb.co/pjr2Ff4"><img src="https://i.ibb.co/Sw7NCtV/bg-blue-1.png" alt="bg-blue-1" border="0"></a> */}

// <a href="https://imgbb.com/"><img src="https://i.ibb.co/DKc1tRK/cavity-1.png" alt="cavity-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/v4zhwnG/chair-1.png" alt="chair-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/4W510h7/doctor-small-1.png" alt="doctor-small-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/h2gddVR/fluoride-1.png" alt="fluoride-1" border="0"></a>
// <a href="https://ibb.co/GFBF4X7"><img src="https://i.ibb.co/3kGk9w1/footer-bg-1-1-1.png" alt="footer-bg-1-1-1" border="0"></a>
// <a href="https://ibb.co/GFBF4X7"><img src="https://i.ibb.co/3kGk9w1/footer-bg-1-1-1.png" alt="footer-bg-1-1-1" border="0"></a>
// <a href="https://ibb.co/sqn7V3S"><img src="https://i.ibb.co/KWdnryZ/landing-bg.png" alt="landing-bg" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/sydR76B/Path-7196.png" alt="Path-7196" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/C5Y5QDx/Path-7197.png" alt="Path-7197" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/9rW1Msc/Path-7199.png" alt="Path-7199" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/Wp4KfSN/people-1-1-1.png" alt="people-1-1-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/Wp4KfSN/people-1-1-1.png" alt="people-1-1-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/Wp4KfSN/people-1-1-1.png" alt="people-1-1-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/7vYTVkb/treatment-1.png" alt="treatment-1" border="0"></a>
// <a href="https://imgbb.com/"><img src="https://i.ibb.co/XbQjbdZ/whitening-1.png" alt="whitening-1" border="0"></a>
{
  /* <a href="https://imgbb.com/"><img src="https://i.ibb.co/dr9SwhS/Path-7198.png" alt="Path-7198" border="0"></a><br /><a target='_blank' href='https://imgbb.com/'>upload pictures internet</a><br /> */
}

const Home = () => {
  return (
    <div>
      <div className="mx-5 bg-[url('https://i.ibb.co/KWdnryZ/landing-bg.png')] bg-cover">
        <div className="hero min-h-[700px] max-w-[1363px] mx-auto">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://i.ibb.co/v4zhwnG/chair-1.png"
              alt=""
              className=" rounded-lg  shadow-2xl"
            />
            <div>
              <h1 className="text-4xl font-extrabold text-[#3A4256]">
                Your New Smile Starts Here
              </h1>
              <p className="py-5 text-xs  ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the
              </p>
              <button className="btn text-white btn-primary bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
          <div className="stats bg-primary bg-gradient-to-r from-secondary to-primary text-primary-content min-h-[190px] max-w-[450px] ">
            <div className="flex items-center px-5 ">
              <img
                className=""
                src="https://i.ibb.co/C5Y5QDx/Path-7197.png"
                style={{ height: "86px", width: "86px" }}
                alt=""
              />
              <img
                className="relative right-9 bottom-1  "
                src="https://i.ibb.co/dr9SwhS/Path-7198.png"
                style={{ height: "25.8px", width: "25.8px" }}
                alt=""
              />
              <div className="text-white ">
                <div>
                  <h2 className="text-small pb-2 ">Opening Hours</h2>
                  <p className="text-xs">
                    Lorem Ipsum is simply dummy text of the pri
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="stats bg-[#3A4256] text-primary-content min-h-[190px] max-w-[450px] ">
            <div className="flex items-center px-5 ">
              <img
                className=""
                src="https://i.ibb.co/9rW1Msc/Path-7199.png"
                style={{ height: "86px", width: "62px" }}
                alt=""
              />
              {/* <img className="relative right-9 bottom-1  " src="https://i.ibb.co/dr9SwhS/Path-7198.png"  style={{height:"25.8px",width:"25.8px"}}alt="" /> */}
              <div className="text-white  pl-5 ">
                <div>
                  <h2 className="text-small pb-2 ">Visit our location</h2>
                  <p className="text-xs">Brooklyn, NY 10036, United States</p>
                </div>
              </div>
            </div>
          </div>
          <div className="stats  bg-primary bg-gradient-to-r from-primary to-secondary text-primary-content min-h-[190px] max-w-[450px] ">
            <div className="flex items-center px-5 ">
              <img
                className=""
                src="https://i.ibb.co/sydR76B/Path-7196.png"
                style={{ height: "77.18px", width: "77.17px" }}
                alt=""
              />
              {/* <img className="relative right-9 bottom-1  " src="https://i.ibb.co/dr9SwhS/Path-7198.png"  style={{height:"25.8px",width:"25.8px"}}alt="" /> */}
              <div className="text-white  pl-5  ">
                <div>
                  <h2 className="text-small pb-2  ">Contact us now</h2>
                  <p className="text-xs">+000 123 456789</p>
                  <p className="text-xs">+000 123 456790</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <PatientFeedback></PatientFeedback>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
