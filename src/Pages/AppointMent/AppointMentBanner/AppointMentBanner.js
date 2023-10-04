import React from "react";
// import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";
import { useForm } from "react-hook-form";

const AppointMentBanner = ({ selectedDate, setSelectedDate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div>
      <section className="py-5">
        <header className=" w-[1744px] py-[140px] bg-indigo-200 mx-auto ">
          <h1 className="text-[#1C1C1C] text-[40px] font-bold font-sans text-center w-[590px] mx-auto">
            Wide network of healthcare solutions
          </h1>
        </header>

        <div className="w-[1000px] mx-auto bg-[#F1F1F1] relative bottom-24">
          <form className="p-[100px]" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-3 items-center py-5 ">
              <input
                type="text"
                placeholder="Enter your name here"
                {...register("First name", { required: true, maxLength: 80 })}
                className="input input-bordered border-[#DCDCDC] w-[490px] rounded my-2 font-sans
              "
              />

              <input
                type="text"
                placeholder="Your Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
                className="input input-bordered border-[#DCDCDC] w-[490px] rounded my-1 font-sans
                "
              />
            </div>
            <div className="flex items-center gap-3">
              <select
                className="input input-bordered border-[#DCDCDC] w-[490px] rounded my-2 font-sans"
                {...register("Title", { required: true })}
              >
                <option value="selected">Choose a Department</option>
                <option value="M">Mr</option>
                <option value="Mr">Mrs</option>
                <option value="Mis">Miss</option>
                <option value="D">Dr</option>
              </select>
              <select
                // name="selectedDepartment"
                // defaultValue="Choose a Department"
                className="input input-bordered border-[#DCDCDC] w-[490px] rounded my-2 font-sans
              "
                {...register("Title", { required: true })}
              >
                <option value="selected">Choose Doctor</option>
                <option value="M">Mr</option>
                <option value="Mr">Mrs</option>
                <option value="Mis">Miss</option>
                <option value="D">Dr</option>
              </select>
            </div>

            <div className="flex items-center gap-4 py-5">
              <input
                type="tel"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
                className="input input-bordered border-[#DCDCDC] w-[320px]  rounded my-2 font-sans
                "
              />
              <input
                className="input input-bordered border-[#DCDCDC] w-[320px]  rounded my-2 font-sans
               "
                type="date"
                placeholder="Mobile number"
                {...register("Mobile number", {
                  required: true,
                  minLength: 6,
                  maxLength: 12,
                })}
              />

              <select
                className="input input-bordered border-[#DCDCDC] w-[320px]  rounded my-2 font-sans
              "
                {...register("Title", { required: true })}
              >
                <option value="selected">Select Time</option>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
              </select>
            </div>

            <input
              className="bg-[#0152A8] w-full text-white font-sans font-semibold  py-3 cursor-pointer my-3"
              type="submit"
            />
            <h6 className="text-[#0152A8] font-sans font-semibold text-[15px] py-5">
              Tahnk you for your booking. we will call you shortly
            </h6>
          </form>
        </div>
      </section>

      {/* <div
        className="hero mx-auto bg-[url('https://i.ibb.co/KWdnryZ/landing-bg.png')] bg-cover"
        style={{ height: "700px", width: "1363px" }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://i.ibb.co/v4zhwnG/chair-1.png" alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="border rounded shadow-xl">
            <DayPicker mode="single" selected={selectedDate} onSelect={setSelectedDate} />
          </div>
        </div>
      </div>
      <div className="text-center text-primary text-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">
        <p>Available Appointments on {format(selectedDate, "PPPP")} </p>
      </div> */}
    </div>
  );
};

export default AppointMentBanner;
