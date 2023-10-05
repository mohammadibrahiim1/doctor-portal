import React from "react";

const WhyChoosePharma = () => {
  const lists = [
    { id: 1, text: "Blood clotting disorder" },
    { id: 2, text: "Blood clotting disorder" },
    { id: 3, text: "Blood clotting disorder" },
    { id: 4, text: "Blood clotting disorder" },
    { id: 5, text: "Blood clotting disorder" },
    { id: 6, text: "Blood clotting disorder" },
    { id: 7, text: "Blood clotting disorder" },
  ];
  return (
    <div>
      <div className="bg-[#DCEDFE]">
        <div className="pt-[7.5rem] pb-[15.375rem] ">
          <div>
            <button className="lato text-center flex mx-auto">WHY CHOOSING PHARMA</button>{" "}
            <div className=" w-[663px] mx-auto text-center text-[1rem] font-sans text-[#545454] pt-[1rem]">
              Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate
              one-to-one customer service with robust ideas. Dynamically innovate.
            </div>
          </div>
          <div className="w-[60.973rem] grid grid-cols-4 mx-auto justify-center items-center gap-5">
            {lists.map((list) => (
              <>
                <div className="flex  items-center gap-1 pt-[2.5rem] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path
                      d="M15.3755 8.56079L9.35679 14.3027L6.35254 11.4317"
                      stroke="#0152A8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10.8638 20.865C16.3001 20.865 20.707 16.458 20.707 11.0217C20.707 5.58544 16.3001 1.17847 10.8638 1.17847C5.42749 1.17847 1.02051 5.58544 1.02051 11.0217C1.02051 16.458 5.42749 20.865 10.8638 20.865Z"
                      stroke="#0152A8"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-[1rem] font-sans text-[#0152A8]">{list.text}</span>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePharma;
