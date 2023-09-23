import React from "react";
const values = [
  {
    id: 1,
    title: "Bio Technology",
    subtitle: "Our team of highly trained professionals uses the latest healing technologies.",
    image: "https://i.ibb.co/SwRpkYw/Icon.png",
  },
  {
    id: 2,
    title: "Vaccine",
    subtitle: "Our team of highly trained professionals uses the latest healing technologies.",
    image: "https://i.ibb.co/NyqZD8B/Icon-1.png",
  },
  {
    id: 3,
    title: "Latest Technology",
    subtitle: "Our team of highly trained professionals uses the latest healing technologies.",
    image: "https://i.ibb.co/F8gZg3S/Icon-2.png",
  },
  {
    id: 4,
    title: "Expert Doctors",
    subtitle: "Our team of highly trained professionals uses the latest healing technologies.",
    image: "https://i.ibb.co/pWKYzht/Icon-3.png",
  },
];

const AboutUs = () => {
  return (
    <div>
      <section>
        <header>
          <div className="container mx-auto py-5">
            <img src="https://i.ibb.co/CtNtVbT/Photo-7.png" alt="" srcset="" />
          </div>

          <div className="w-[550px] mx-auto ">
            <h1 className=" font-sans text-[#1c1c1c] text-center  font-semibold text-[2.5rem] pt-10">
              Our team helps you get your life back on track.
            </h1>
            <p className="text-[#545454] text-xs text-center font-sans py-3">
              Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free
              health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to
              your issue. Includes, but is not limit, your work and home stressors.
            </p>
          </div>
          <img className="flex mx-auto pt-5" src="https://i.ibb.co/LzZDxL1/Photo-8.png" alt="" srcset="" />
        </header>
      </section>

      <div>
        <div className="h-[502px] mx-auto bg-[#0152A8] p-[8rem] mt-[20px]">
          <div className="w-[710px]  text-[#ffffff] mx-auto text-center text-[3.125rem] font-semibold montserrat">
            Online consultations with Certified doctors
          </div>
          <div className=" w-[537px] mx-auto flex items-center justify-between gap-5 mt-5">
            <button className="bg-[#0FE3AF] text-[#1C1C1C] font-[1rem]  py-[1rem] px-[2rem]  flex mx-auto  font-sans font-semibold ">
              Book an Appointment
            </button>
            <div className="text-white text-center font-semibold font-sans">(OR)</div>
            <button className="bg-[#0152A8] text-[#1C1C1C] font-[1rem]  py-[1rem]  px-[2rem] flex mx-auto  font-sans font-semibold text-white border ">
              Call: 1-800-123-9999
            </button>
          </div>
        </div>
      </div>

      <div className="w-[1200px] mx-auto  py-[140px] ">
        <div className="flex justify-between items-center py-[2.75rem] gap-[13.5rem]">
          <h1 className="text-[#1c1c1c] font-sans text-[2.5rem] font-bold leading-10">Our values that drive success</h1>
          <p className="w-[536px] font-sans text-[#545454] text-justify">
            Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free
            health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to
            your issue. Includes, but is not limit, your work and home stressors.
          </p>
        </div>
        <div className="grid grid-cols-4 justify-center items-center gap-[46px]">
          {values.map((value) => (
            <>
              <div className="border px-[40px] py-[30px]">
                <img className="w-[124px] h-[124px] mx-auto " src={value.image} alt="" srcset="" />
                <div className="text-center">
                  <h1 className="text-[#1c1c1c] text-[1.25rem] font-semibold font-sans py-4">{value.title}</h1>
                  <p className="text-sm font-semibold text-[#545454] font-sans">
                    Our team of highly trained professionals uses the latest healing technologies.
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
