import React from "react";
import "./OurTeam.css";
import { useGetDoctorsQuery } from "../../redux/features/api/doctorsApi/doctorsApi";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";

const OurTeam = () => {
  const { data } = useGetDoctorsQuery();

  const doctors = data?.data;
  console.log(doctors);
  // https://i.ibb.co/YZbJTKm/Photo-20.png
  // https://i.ibb.co/nRBzGfZ/Photo-19.png
  return (
    <div>
      <div>
        <div className=" w-[1744px] mx-auto team-background mt-[30px] mb-[150px] flex items-center justify-center">
          <h1 className="text-[2.5rem] text-[#1c1c1c] font-semibold font-sans  ">The Doctorate Crew</h1>
        </div>

        <div>
          <div className=" w-[1200px] grid grid-cols-3 mx-auto gap-[60px]">
            {doctors?.map((doctor) => (
              <>
                <div className="w-[360px] bg-[#F1F1F1]">
                  <div className="flex flex-col justify-center items-center py-8">
                    <img src={doctor.image} alt="" srcset="" />

                    <div className="py-[23px] text-center">
                      <h1 className="text-[1.25rem] font-semibold font-sans py-2">{doctor.name}</h1>
                      <h1 className="text-[0.875rem] text-[#545454] font-semibold font-sans">{doctor.category}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-[27px]">
                      <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                          <path
                            d="M16.4706 1.78447C17.6994 1.788 18.8768 2.25929 19.7457 3.09541C20.6146 3.93152 21.1044 5.06453 21.1081 6.24697V15.171C21.1044 16.3535 20.6146 17.4865 19.7457 18.3226C18.8768 19.1587 17.6994 19.63 16.4706 19.6335H7.19672C5.96792 19.63 4.7905 19.1587 3.9216 18.3226C3.05271 17.4865 2.56294 16.3535 2.55927 15.171V6.24697C2.56294 5.06453 3.05271 3.93152 3.9216 3.09541C4.7905 2.25929 5.96792 1.788 7.19672 1.78447H16.4706ZM16.4706 -0.000244141H7.19672C3.62597 -0.000244141 0.70459 2.81093 0.70459 6.24697V15.171C0.70459 18.6071 3.62597 21.4182 7.19672 21.4182H16.4706C20.0414 21.4182 22.9627 18.6071 22.9627 15.171V6.24697C22.9627 2.81093 20.0414 -0.000244141 16.4706 -0.000244141Z"
                            fill="#0152A8"
                          />
                          <path
                            d="M17.8617 6.24738C17.5865 6.24738 17.3176 6.16887 17.0888 6.02177C16.86 5.87468 16.6817 5.66561 16.5764 5.421C16.4711 5.1764 16.4436 4.90724 16.4973 4.64757C16.5509 4.38789 16.6834 4.14937 16.878 3.96215C17.0725 3.77494 17.3204 3.64744 17.5903 3.59579C17.8601 3.54414 18.1398 3.57065 18.394 3.67197C18.6482 3.77329 18.8655 3.94487 19.0184 4.16501C19.1712 4.38515 19.2528 4.64396 19.2528 4.90872C19.2532 5.08462 19.2175 5.25887 19.1477 5.42145C19.0779 5.58404 18.9755 5.73176 18.8462 5.85614C18.717 5.98052 18.5635 6.07911 18.3945 6.14625C18.2255 6.21339 18.0445 6.24776 17.8617 6.24738ZM11.8336 7.1395C12.5673 7.1395 13.2846 7.34887 13.8947 7.74113C14.5048 8.1334 14.9803 8.69094 15.261 9.34326C15.5418 9.99557 15.6153 10.7134 15.4722 11.4059C15.329 12.0983 14.9757 12.7344 14.4568 13.2337C13.938 13.733 13.277 14.073 12.5573 14.2107C11.8377 14.3485 11.0918 14.2778 10.4139 14.0076C9.736 13.7374 9.15659 13.2798 8.74895 12.6927C8.34131 12.1057 8.12373 11.4155 8.12373 10.7094C8.12478 9.76291 8.51597 8.85548 9.21148 8.18621C9.90699 7.51695 10.85 7.14051 11.8336 7.1395ZM11.8336 5.35478C10.733 5.35478 9.65718 5.66882 8.74209 6.2572C7.82701 6.84557 7.11379 7.68185 6.69262 8.66028C6.27145 9.63871 6.16126 10.7153 6.37597 11.754C6.59068 12.7927 7.12065 13.7468 7.89886 14.4957C8.67708 15.2445 9.66858 15.7545 10.748 15.9611C11.8274 16.1677 12.9463 16.0617 13.963 15.6564C14.9798 15.2511 15.8489 14.5648 16.4603 13.6843C17.0718 12.8037 17.3981 11.7684 17.3981 10.7094C17.3981 9.28927 16.8119 7.9273 15.7683 6.92311C14.7248 5.91893 13.3094 5.35478 11.8336 5.35478Z"
                            fill="#0152A8"
                          />
                        </svg>
                      </Link>
                      <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M23.9629 10.7738C23.9629 4.82536 18.8136 0.00219727 12.4629 0.00219727C6.11222 0.00219727 0.962891 4.82536 0.962891 10.7738C0.962891 16.1499 5.16758 20.6062 10.666 21.415V13.8884H7.74532V10.7738H10.666V8.40066C10.666 5.70151 12.3833 4.20936 15.0098 4.20936C16.2682 4.20936 17.5845 4.41999 17.5845 4.41999V7.07104H16.1336C14.7059 7.07104 14.2593 7.90103 14.2593 8.7541V10.7738H17.4484L16.9392 13.8884H14.2598V21.416C19.7582 20.6076 23.9629 16.1514 23.9629 10.7738Z"
                            fill="#0152A8"
                          />
                        </svg>
                      </Link>
                      <Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                          <path
                            d="M22.4339 2.16054C21.6285 2.51025 20.7764 2.74064 19.9044 2.84444C20.8208 2.30822 21.5099 1.45633 21.8426 0.448552C20.9762 0.954814 20.0299 1.31003 19.0442 1.49899C18.6291 1.0643 18.13 0.718494 17.577 0.482589C17.024 0.246683 16.4288 0.125606 15.8276 0.126717C13.3933 0.126717 11.4233 2.06667 11.4233 4.45809C11.4216 4.79073 11.4597 5.12237 11.5369 5.44595C9.79138 5.36417 8.08212 4.9192 6.51852 4.1395C4.95491 3.35979 3.57139 2.26253 2.45647 0.917896C2.06533 1.57682 1.85847 2.32863 1.85752 3.09476C1.85752 4.59666 2.64166 5.92423 3.8257 6.702C3.12419 6.68536 2.43705 6.49982 1.82263 6.16114V6.21478C1.82263 8.31565 3.34349 10.0634 5.35641 10.4612C4.97788 10.5621 4.58782 10.6131 4.19607 10.6132C3.9181 10.6137 3.64077 10.5867 3.3681 10.5327C3.92769 12.2537 5.55636 13.5052 7.48562 13.541C5.91795 14.7483 3.99327 15.4008 2.01408 15.396C1.66277 15.3955 1.31178 15.3746 0.962891 15.3335C2.97633 16.6182 5.31679 17.2978 7.7057 17.2913C15.8182 17.2913 20.2502 10.6892 20.2502 4.96319C20.2502 4.77545 20.2452 4.58772 20.2363 4.40445C21.0965 3.79299 21.8407 3.03312 22.4339 2.16054Z"
                            fill="#0152A8"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mx-auto py-[150px]">
          <div className="w-[985px] bg-[#0152A8] flex justify-end pr-20">
            <div className="w-[535px] h-[449px] flex flex-col justify-center">
              <button className="lato w-3/4  text-white">BOOK AN APPOINTMENT</button>
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
                <div className="text-white text-center font-semibold font-sans">(OR)</div>
                <button className="bg-[#0152A8] text-[#1C1C1C] font-[1rem]  py-[1rem]  px-[2rem] flex mx-auto  font-sans font-semibold text-white border ">
                  Call: 1-800-123-9999
                </button>
              </div>
            </div>
          </div>
          <div>
            <img className="w-[935px] h-[449px] " src="https://i.ibb.co/nRBzGfZ/Photo-19.png" alt="" srcset="" />
          </div>
        </div>

        {/* appointment modal */}
        {/* The button to open modal */}
        {/* <label htmlFor="my_modal_6" className="btn">
        open modal
      </label> */}

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal ">
          <div className="modal-box bg-[#DCEDFE] rounded-none max-w-5xl flex justify-center items-center gap-[20px] ">
            <div>
              <img className="w-[468px] h-[560px]" src="https://i.ibb.co/RC16frr/Photo-9.png" alt="" srcset="" />
            </div>
            <div className="bg-white p-5 mx-5">
              <h3 className="font-bold font-sans text-[#1c1c1c] text-[2rem]">Book an appoinment</h3>
              <p className="py-2 font-semibold font-sans text-[#545454] ">
                Lorem Ipsum is simply dummy text of printing and typesetting industry standard dummy text the with the
                release.
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

                <button className="bg-[#0152A8] text-white px-[214px] py-[17px]"> Booking Now</button>
              </form>

              <div className="modal-action fixed top-[-1rem] left-0 right-1">
                <label htmlFor="my_modal_6" className="bg-error rounded-full p-2 text-white cursor-pointer">
                  <FaXmark />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
