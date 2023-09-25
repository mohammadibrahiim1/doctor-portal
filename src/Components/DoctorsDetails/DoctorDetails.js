import React from "react";
import "./DoctorsDetails.css";
import { useParams } from "react-router-dom";
import { useGetDoctorByIdQuery } from "../../redux/features/api/doctorsApi/doctorsApi";

const DoctorDetails = () => {
  const { id } = useParams();
  const { data } = useGetDoctorByIdQuery(id);
  console.log(data?.data);
  const doctor = data?.data;
  const { image, name, category, mail, phone, about } = doctor ? doctor : {};
  return (
    <div>
      <div className=" w-[1744px] mx-auto bg-[#DCEDFE] my-[39px] ">
        <div className="w-[1200px] bg-[#F1F1F1] mx-auto p-[27px] ">
          <div className="flex justify-between items-center gap-[50px]">
            <img className="w-[456.98px]" src={image} alt="" srcset="" />

            <div className="w-[674.953px]">
              <h1 className="text-5xl text-[#1c1c1c] font-bold font-sans">{name}</h1>
              <p className="text-2xl text-info font-semibold font-sans py-[22px]">{category}</p>

              <p className="text-sm text-[#545454] font-semibold font-sans w-[600px] text-justify">{about}</p>

              <div className="py-[40px] flex items-center gap-[50px]">
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30.2786" cy="29.6912" r="29.0442" stroke="#0FE3AF" />
                    <path
                      d="M33.903 18.6235C35.6873 19.1024 37.3142 20.0421 38.6205 21.3484C39.9268 22.6547 40.8665 24.2816 41.3453 26.0658M32.8116 22.6865C33.8848 22.9715 34.8635 23.5352 35.6486 24.3203C36.4337 25.1054 36.9973 26.0841 37.2823 27.1572M25.1063 29.7739C26.1888 32.0092 27.9963 33.8121 30.2344 34.8888C30.3995 34.967 30.5821 35.0008 30.7643 34.987C30.9464 34.9731 31.1218 34.9121 31.2732 34.8099L34.5605 32.614C34.7057 32.5155 34.8735 32.4554 35.0483 32.4393C35.223 32.4232 35.399 32.4517 35.5598 32.522L41.7135 35.1649C41.9238 35.2525 42.0995 35.4067 42.2136 35.6039C42.3276 35.8011 42.3737 36.0303 42.3447 36.2563C42.1496 37.7786 41.4066 39.1777 40.2546 40.1918C39.1025 41.2058 37.6205 41.7654 36.0857 41.7657C31.343 41.7657 26.7945 39.8817 23.4408 36.528C20.0872 33.1744 18.2031 28.6259 18.2031 23.8831C18.2035 22.3484 18.763 20.8663 19.7771 19.7143C20.7912 18.5623 22.1902 17.8192 23.7125 17.6242C23.9385 17.5952 24.1677 17.6412 24.3649 17.7553C24.5621 17.8693 24.7164 18.045 24.8039 18.2553L27.4469 24.4222C27.5156 24.5805 27.5443 24.7532 27.5306 24.9252C27.5168 25.0971 27.461 25.2631 27.368 25.4084L25.1721 28.7482C25.0743 28.8993 25.0169 29.0729 25.0054 29.2525C24.9939 29.432 25.0287 29.6115 25.1063 29.7739Z"
                      stroke="#0152A8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="">
                    <h1 className="text-lg font-sans font-semibold">CALL NOW:</h1>
                    <p className="text-lg font-semibold font-san s py-1">(+22) {phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <circle cx="30.3669" cy="29.6912" r="29.0442" stroke="#0FE3AF" />
                    <path
                      d="M35.3978 29.6884C35.3978 32.4671 33.1452 34.7196 30.3665 34.7196C27.5878 34.7196 25.3353 32.4671 25.3353 29.6884C25.3353 26.9097 27.5878 24.6571 30.3665 24.6571C33.1452 24.6571 35.3978 26.9097 35.3978 29.6884ZM35.3978 29.6884C35.3978 32.4681 36.404 34.7196 38.9196 34.7196C41.4353 34.7196 42.4415 32.4681 42.4415 29.6884C42.4409 26.9981 41.5418 24.385 39.887 22.2638C38.2322 20.1427 35.9164 18.6349 33.307 17.9797C30.6977 17.3246 27.9443 17.5596 25.4838 18.6475C23.0232 19.7353 20.9964 21.6138 19.725 23.9847C18.4536 26.3556 18.0104 29.0833 18.4657 31.7348C18.921 34.3863 20.2488 36.8098 22.2383 38.6208C24.2278 40.4318 26.7651 41.5265 29.4476 41.7312C32.1301 41.9359 34.8042 41.2389 37.0455 39.7509M35.3978 29.6884V24.6571"
                      stroke="#0152A8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="">
                    <h1 className="text-lg font-sans font-semibold">EMAIL NOW:</h1>
                    <p className="text-lg font-semibold font-san s py-1">(+22) {mail}</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#0152A8] py-[17px] px-[41px] text-white font-sans">Discover Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] mx-auto flex justify-center items-center gap-10">
        <div className="w-[691px]">
          <form className="bg-[#f1f1f1] p-[81px]">
            <h1 className="text-4xl text-[#1c1c1c] font-semibold font-sans">Book an appointment</h1>
            <p className="text-sm font-semibold text-[#515151] font-sans py-4">
              Lorem Ipsum is simply dummy text of printing and typesetting industry standard dummy text the with the
              release.
            </p>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered border-[#DCDCDC] w-[530px] rounded-none my-2 font-sans
                  "
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered border-[#DCDCDC] w-[530px] rounded-none my-2 font-sans"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone"
                className="input input-bordered border-[#DCDCDC] w-[530px] rounded-none my-2 font-sans "
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Department"
                className="input input-bordered border-[#DCDCDC] w-[530px] rounded-none my-2 font-sans "
              />
            </div>
            <div>
              <input
                type="date"
                placeholder="Date"
                className="input input-bordered border-[#DCDCDC] w-[530px] rounded-none my-2 font-sans "
              />
            </div>

            <div>
              <select
                className="input input-bordered border-[#DCDCDC] w-[530px] rounded-none my-2 font-sans"
                id="cars"
                name="cars"
                placeholder="Choose a doctor"
              >
                <option value={name}>{name}</option>
                <option value="saab">{name}</option>
                <option value="fiat">{name}</option>
                <option value="audi">{name}</option>
              </select>
            </div>

            <div>
              <textarea
                className="w-[530px] textarea-lg textarea textarea-bordered rounded-none my-2 font-sans"
                placeholder="Message..."
              ></textarea>
            </div>

            <button className="bg-[#0152A8] text-white px-[214px] py-[17px]"> Booking Now</button>
          </form>
        </div>

        <div className="flex flex-col gap-5">
          <div className="working_hours text-center py-[86px] ">
            <div className="bg-[#f1f1f1] w-[350px] mx-auto px-[31px] py-[46px] ">
              <button className="lato">Time</button>
              <h1 className="text-2xl text-[#1c1c1c] font-semibold py-4">Working Hours</h1>
              <p>Sunday To Friday 9.00 am - 10.00 pm Saturday Closed</p>
            </div>
          </div>
          <div className="text-center ">
            <div className="bg-[#0152A8] w-[500px] mx-auto px-[31px] py-[46px]  ">
              <h1 className="text-[3.125rem] text-white font-semibold leading-12">Didn’t Find a Question? </h1>
              <p className="w-[222px] mx-auto font-sm text-white pb-2">
                Donec efficitur, enim bibendum volutpat dictum, tellus risus porttitor leo.
              </p>
              <button className="bg-[#0FE3AF] py-[17px] px-[56px] ">More Questions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
