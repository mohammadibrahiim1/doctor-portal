import React from "react";
import { FaXmark } from "react-icons/fa6";
import ArticlesCard from "../../Components/ArticlesCard/ArticlesCard";
import { useGetArticlesQuery } from "../../redux/features/api/articlesApi/articleApi";
import Pricing from "../Pricing/Pricing";

const Blog = () => {
  const { data } = useGetArticlesQuery();
  console.log(data);
  const articles = data?.data;
  return (
    <div>
      <div>
        <div className=" w-[1744px] mx-auto team-background mt-[30px] mb-[150px] flex items-center justify-center">
          <h1 className="text-[2.5rem] text-[#1c1c1c] font-semibold font-sans  ">
            The Doctorate Crew
          </h1>
        </div>

        <div>
          <div className=" w-[1200px] grid grid-cols-3 mx-auto gap-[60px]">
            {articles?.map((article) => (
              <ArticlesCard key={article._id} article={article}></ArticlesCard>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto py-[150px]">
          <div className="w-[985px] bg-[#0152A8] flex justify-end pr-20">
            <div className="w-[535px] h-[449px] flex flex-col justify-center">
              <button className="lato w-3/4  text-white">
                BOOK AN APPOINTMENT
              </button>
              <h1 className="text-white text-5xl font-semibold font-sans py-5">
                Our Medical Team is Ready to Help You.
              </h1>
              <div className="flex items-center justify-between gap-5 mt-5">
                <label
                  htmlFor="my_modal_6"
                  className="bg-[#0FE3AF] text-[#1C1C1C] font-[1rem]  py-[1rem] px-[2rem]  flex mx-auto  font-sans font-semibold cursor-pointer"
                >
                  Book an Appointment
                </label>
                <div className="text-white text-center font-semibold font-sans">
                  (OR)
                </div>
                <button className="bg-[#0152A8] text-[#1C1C1C] font-[1rem]  py-[1rem]  px-[2rem] flex mx-auto  font-sans font-semibold text-white border ">
                  Call: 1-800-123-9999
                </button>
              </div>
            </div>
          </div>
          <div>
            <img
              className="w-[935px] h-[449px] "
              src="https://i.ibb.co/nRBzGfZ/Photo-19.png"
              alt=""
              srcSet=""
            />
          </div>
        </div>

        {/* Put this part before </body> tag  modal*/}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box bg-[#DCEDFE] rounded-none max-w-5xl flex justify-center items-center gap-[20px] ">
            <div>
              <img
                className="w-[468px] h-[560px]"
                src="https://i.ibb.co/RC16frr/Photo-9.png"
                alt=""
                srcSet=""
              />
            </div>
            <div className="bg-white p-5 mx-5">
              <h3 className="font-bold font-sans text-[#1c1c1c] text-[2rem]">
                Book an appoinment
              </h3>
              <p className="py-2 font-semibold font-sans text-[#545454] ">
                Lorem Ipsum is simply dummy text of printing and typesetting
                industry standard dummy text the with the release.
              </p>

              <form>
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
                    placeholder="Subject"
                    className="input input-bordered border-[#DCDCDC] w-[530px] rounded-none my-2 font-sans "
                  />
                </div>
                <div>
                  <textarea
                    className="w-[530px] textarea-lg textarea textarea-bordered rounded-none my-2 font-sans"
                    placeholder="Message..."
                  ></textarea>
                </div>

                <button className="bg-[#0152A8] text-white px-[214px] py-[17px]">
                  {" "}
                  Booking Now
                </button>
              </form>

              <div className="modal-action fixed top-[-1rem] left-0 right-1">
                <label
                  htmlFor="my_modal_6"
                  className="bg-error rounded-full p-2 text-white cursor-pointer"
                >
                  <FaXmark />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pricing></Pricing>
    </div>
  );
};

export default Blog;
