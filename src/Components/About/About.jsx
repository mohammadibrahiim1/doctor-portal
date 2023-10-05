import React from "react";
import "./About.css";



const About = () => {
  return (
    <div>
      <section className="about_section container mx-auto">
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 60 60" fill="none">
                      <circle cx="30.3108" cy="30.1997" r="29.0442" stroke="#0FE3AF" />
                      <path
                        d="M37.1049 34.7286V24.1613C37.1062 23.8636 37.0484 23.5686 36.9351 23.2933C36.8217 23.018 36.655 22.7678 36.4445 22.5573C36.2339 22.3468 35.9838 22.1801 35.7085 22.0667C35.4332 21.9533 35.1382 21.8956 34.8405 21.8969H22.0088"
                        stroke="#0152A8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.0469 27.9353H34.0853"
                        stroke="#0152A8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.0469 30.9543H34.0853"
                        stroke="#0152A8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.3197 25.6709C20.0753 25.3972 19.901 25.0682 19.8119 24.7123C19.7228 24.3563 19.7216 23.9841 19.8082 23.6275C19.8949 23.271 20.067 22.9408 20.3095 22.6655C20.5521 22.3902 20.858 22.178 21.2008 22.0471C21.5436 21.9162 21.913 21.8705 22.2774 21.9141C22.6417 21.9576 22.99 22.0891 23.2923 22.2971C23.5945 22.5051 23.8417 22.7835 24.0126 23.1082C24.1834 23.433 24.2728 23.7943 24.273 24.1613V36.2382C24.2732 36.6051 24.3625 36.9665 24.5334 37.2912C24.7042 37.616 24.9514 37.8943 25.2537 38.1024C25.556 38.3104 25.9043 38.4418 26.2686 38.4854C26.6329 38.5289 27.0024 38.4833 27.3452 38.3524C27.688 38.2215 27.9938 38.0093 28.2364 37.734C28.479 37.4586 28.651 37.1285 28.7377 36.7719C28.8244 36.4154 28.8232 36.0431 28.7341 35.6872C28.645 35.3312 28.4707 35.0022 28.2263 34.7286H38.7936C39.0851 35.0545 39.276 35.4578 39.3432 35.8898C39.4105 36.3218 39.3513 36.764 39.1727 37.1631C38.9941 37.5622 38.7038 37.9011 38.3368 38.1387C37.9698 38.3764 37.5419 38.5028 37.1047 38.5026H26.5374"
                        stroke="#0152A8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="text">Multi Speciality Pharma Treatment</div>
                  </div>
                  <div className="container pt-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                      <circle cx="30.1829" cy="30.1997" r="29.0442" stroke="#0FE3AF" />
                      <path
                        d="M30.1833 38.6329C34.8409 38.6329 38.6166 34.8572 38.6166 30.1996C38.6166 25.5421 34.8409 21.7664 30.1833 21.7664C25.5257 21.7664 21.75 25.5421 21.75 30.1996C21.75 34.8572 25.5257 38.6329 30.1833 38.6329Z"
                        stroke="#0152A8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M30.1826 25.2802V30.1996H35.102"
                        stroke="#0152A8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
