import React from "react";
import "./HomePageHeader.css";

const HomePageHeader = () => {
  return (
    <div>
      <section className="home_page_header">
        <div>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img
                src="https://i.ibb.co/mqswrdc/Photo.png"
                className="h-[501px] mt-11 rounded-lg"
                alt="lady doctor img"
                srcSet=""
              />
              <div className="pl-16">
                <h1 className="text-sm text-primary  font-bold">MEDICAL PROFESSIONALS</h1>
                <h1 className="text-3xl text-[#143450] font-bold">Makes Your Health Better Will Makes Us Better</h1>
                <p className="py-6 text-sm text-[#1C1C1C]">
                  Our team of highly trained professionals uses the latest healing technologies to restore you to
                  pain-free health quickly and easily.
                </p>
                <button className="btn btn-primary radius-none">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePageHeader;
