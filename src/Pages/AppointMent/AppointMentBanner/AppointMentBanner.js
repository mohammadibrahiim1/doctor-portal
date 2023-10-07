import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
// import { DayPicker } from "react-day-picker";
// import { format } from "date-fns";
import { useForm } from "react-hook-form";
import {
  useGetDoctorByCategoryQuery,
  useGetDoctorsQuery,
} from "../../../redux/features/api/doctorsApi/doctorsApi";

// const options = [
//   "Cardiologist",
//   "Pediatrician",
//   "Dermatologist",
//   "Obstetrician",
//   "Orthopedic Surgeon",
//   "Orthopedic Surgeon",
// ];

const AppointMentBanner = ({ selectedDate, setSelectedDate }) => {
  const [open, setOpen] = React.useState(1);

  const [selectedValue, setSelectedValue] = useState("");
  console.log(selectedValue);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const { data } = useGetDoctorsQuery();
  const doctors = data?.data;
  console.log(doctors);

  const { data: doctorsByCategory } =
    useGetDoctorByCategoryQuery(selectedValue);
  console.log(doctorsByCategory);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
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

        <div className="w-[1200px] mx-auto bg-[#F1F1F1] relative bottom-24">
          <form
            className="py-[100px] px-[200px]"
            onSubmit={handleSubmit(onSubmit)}
          >
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
                value={selectedValue}
                onChange={handleChange}
                className="input input-bordered border-[#DCDCDC] w-[490px] rounded my-2 font-sans"
                // {...register('category', { required: true })}
              >
                <option value="">Select a Category</option>
                {doctors?.map((item) => (
                  <option key={item._id} value={item?.category}>
                    {item?.category}
                  </option>
                ))}
              </select>
              {/* <select
                value={selectedValue}
                // onClick={handleChange}
                className="input input-bordered border-[#DCDCDC] w-[490px] rounded my-2 font-sans"
                {...register(`${selectedValue}`, { required: true })}
              >
                {doctors?.map((doctor) => (
                  <>
                    <option
                      key={doctor._id}
                      onClick={() => setSelectedValue(doctor?.category)}
                      value={doctor?.category}
                    >
                      <p>{doctor?.category}</p>
                    </option>
                  </>
                ))}
              </select> */}
              <select
                // name="selectedDepartment"
                // defaultValue="Choose a Department"
                className="input input-bordered border-[#DCDCDC] w-[490px] rounded my-2 font-sans
              "
                // {...register("Title", { required: true })}
              >
                {doctorsByCategory?.data?.map((doctor) => (
                  <>
                    <option value="selected">{doctor?.name}</option>
                  </>
                ))}
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
                // {...register("Title", { required: true })}
              >
                {doctorsByCategory?.data?.map((doctor) => (
                  <>
                    <option>
                      {doctor?.availability?.map((available) => (
                        <div>
                          <option value={available.slot}>
                            {available.slot}
                          </option>
                          <br />
                        </div>
                      ))}
                    </option>
                  </>
                ))}
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

        <div>
          <div>
            <button className="lato flex justify-center mx-auto">FAQ</button>
            <h1 className="text-[30px] font-bold text-[#1c1c1c] font-sans py-2 text-center">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="w-[1200px] mx-auto flex items-center gap-12 py-7">
            <div>
              <Accordion open={open === 1}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                  Does a rinse or mouthwash help?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 2}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                  How can I fix my teeth and smile?
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Diam in arcu cursus euismod quis viverra.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 3}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                  Why do I need dental exams?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
            <div>
              <Accordion open={open === 4}>
                <AccordionHeader onClick={() => handleOpen(4)}>
                  Does a rinse or mouthwash help?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 5}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                  How can I fix my teeth and smile?
                </AccordionHeader>
                <AccordionBody>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Diam in arcu cursus euismod quis viverra.
                </AccordionBody>
              </Accordion>
              <Accordion open={open === 6}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                  Why do I need dental exams?
                </AccordionHeader>
                <AccordionBody>
                  We&apos;re not always in the position that we want to be at.
                  We&apos;re constantly growing. We&apos;re constantly making
                  mistakes. We&apos;re constantly trying to express ourselves
                  and actualize our dreams.
                </AccordionBody>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppointMentBanner;
