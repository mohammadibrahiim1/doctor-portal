import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <section className="about_section">
        <div>
          <div className="hero">
            <div className="hero-content flex-col  lg:flex-row-reverse">
              <div className="ml-[600px] bg-white w-[460px] px-8 py-10 mt-12 ">
                <h1 className="text-sm text-primary font-bold">About Us</h1>
                <h1 className="text-2xl text-[#143450] font-bold mt-2">The Heart And Science Of Medicate Test</h1>
                <p className="py-6 text-xs text-[#1C1C1C]">
                  Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the
                  digital divide with information highway will close.
                </p>
                <div className="about_container">
                  <div className="container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30.1829" cy="30.1997" r="29.0442" stroke="#0FE3AF" />
                      <path
                        d="M30.1833 38.6329C34.8409 38.6329 38.6166 34.8572 38.6166 30.1996C38.6166 25.5421 34.8409 21.7664 30.1833 21.7664C25.5257 21.7664 21.75 25.5421 21.75 30.1996C21.75 34.8572 25.5257 38.6329 30.1833 38.6329Z"
                        stroke="#0152A8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.1826 25.2802V30.1996H35.102"
                        stroke="#0152A8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="text">Multi Speciality Pharma Treatment</div>
                  </div>
                  <div className="container">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30.1829" cy="30.1997" r="29.0442" stroke="#0FE3AF" />
                      <path
                        d="M30.1833 38.6329C34.8409 38.6329 38.6166 34.8572 38.6166 30.1996C38.6166 25.5421 34.8409 21.7664 30.1833 21.7664C25.5257 21.7664 21.75 25.5421 21.75 30.1996C21.75 34.8572 25.5257 38.6329 30.1833 38.6329Z"
                        stroke="#0152A8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M30.1826 25.2802V30.1996H35.102"
                        stroke="#0152A8"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div className="text">24 Hours Medical Service</div>
                  </div>
                </div>
                <button className="btn btn-primary radius-none">More About Us</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
