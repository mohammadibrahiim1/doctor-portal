import React from "react";
import "./ProfessionalDoctors.css";
import { Link } from "react-router-dom";

const doctors = [
  {
    id: 1,
    title: "Vanseena Adams",
    category: "Dental Patient",
    image: "https://i.ibb.co/bsR6JxZ/Photo.png",
  },
  {
    id: 2,
    title: "Dr.Helen Wilmore",
    category: "Dental Patient",
    image: "https://i.ibb.co/r5CRg2L/Photo-1.png",
  },
  {
    id: 3,
    title: "Dr. Kate Winslot",
    category: "Dental Patient",
    image: "https://i.ibb.co/LxBWvY8/Photo-2.png",
  },
];

const statistics = [
  {
    id: 1,
    title: "Years experience",
    number: 25,
  },
  {
    id: 2,
    title: "Medicament Invented",
    number: 893,
  },
  {
    id: 1,
    title: "Awards Winned",
    number: 75,
  },
  {
    id: 1,
    title: "Happy clients",
    number: "673k",
  },
  {
    id: 1,
    title: "Pharmacies Patients",
    number: 751,
  },
];

const ProfessionalDoctors = () => {
  return (
    <div className="bg-[#0152A8]">
      <div className="w-[75rem] mx-auto py-[9.188rem]">
        <div className="flex justify-between items-center">
          <div>
            <button className="medical_experts text-center">MEDICAL EXPERTs </button>
            <h1 className="title py-5">The Professional Doctors</h1>
          </div>
          <button className="btn bg-[#0FE3AF] hover:bg-[#0fe3af] hover:border-[#0fe3af] border-[#0FE3AF] text-[#2b78ca] px-[1.938rem] py-[1.063rem] font-sans rounded-none ">
            View All Doctors
          </button>
        </div>

        <div className="grid grid-cols-3 justify-between items-center gap-[3.75rem] pt-[3.875rem]">
          {doctors.map((doctor) => (
            <>
              <div>
                <div class=" flex justify-center items-center ">
                  <div class=" flex flex-col items-center justify-center ">
                    <div class="container">
                      <div class="h-[31.813rem] w-[22.5rem] bg-[#004A99] shadow-lg  p-6">
                        <div class="flex flex-col ">
                          <div class="">
                            <div class="relative mb-3">
                              <img
                                src={doctor.image}
                                alt="Just a flower"
                                class=" w-[300px] h-[331px] mx-auto  object-fill "
                              />
                            </div>
                            <div class="flex-auto justify-evenly">
                              <div class="flex flex-wrap ">
                                <div class="flex items-center justify-center mx-auto pt-[1.238rem]">
                                  <h2 class="text-xl cursor-pointer text-gray-200 hover:text-[#0FE3AF] duration-300 truncate font-sans ">
                                    {doctor.title}
                                  </h2>
                                </div>
                              </div>
                              <div class="text-sm text-center text-white font-semibold mt-1">{doctor.category}</div>

                              <div className="flex justify-center items-center gap-[2rem] py-[1.563rem]">
                                <Link to={"/"}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="22"
                                    viewBox="0 0 23 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M16.4789 2.1917C17.7077 2.19523 18.8851 2.66652 19.754 3.50263C20.6229 4.33875 21.1127 5.47175 21.1164 6.6542V15.5782C21.1127 16.7607 20.6229 17.8937 19.754 18.7298C18.8851 19.5659 17.7077 20.0372 16.4789 20.0407H7.20502C5.97622 20.0372 4.7988 19.5659 3.9299 18.7298C3.06101 17.8937 2.57124 16.7607 2.56757 15.5782V6.6542C2.57124 5.47175 3.06101 4.33875 3.9299 3.50263C4.7988 2.66652 5.97622 2.19523 7.20502 2.1917H16.4789ZM16.4789 0.406982H7.20502C3.63427 0.406982 0.712891 3.21816 0.712891 6.6542V15.5782C0.712891 19.0143 3.63427 21.8255 7.20502 21.8255H16.4789C20.0497 21.8255 22.971 19.0143 22.971 15.5782V6.6542C22.971 3.21816 20.0497 0.406982 16.4789 0.406982Z"
                                      fill="white"
                                    />
                                    <path
                                      d="M17.87 6.6546C17.5948 6.6546 17.3259 6.57609 17.0971 6.429C16.8683 6.28191 16.69 6.07284 16.5847 5.82823C16.4794 5.58362 16.4519 5.31447 16.5056 5.05479C16.5592 4.79512 16.6917 4.55659 16.8863 4.36938C17.0808 4.18216 17.3287 4.05467 17.5986 4.00302C17.8684 3.95137 18.1481 3.97787 18.4023 4.07919C18.6565 4.18051 18.8738 4.35209 19.0267 4.57223C19.1795 4.79237 19.2611 5.05119 19.2611 5.31595C19.2615 5.49185 19.2258 5.66609 19.156 5.82868C19.0862 5.99126 18.9838 6.13898 18.8545 6.26337C18.7253 6.38775 18.5718 6.48634 18.4028 6.55348C18.2338 6.62062 18.0528 6.65498 17.87 6.6546ZM11.8419 7.54672C12.5756 7.54672 13.2929 7.75609 13.903 8.14836C14.5131 8.54063 14.9886 9.09817 15.2693 9.75048C15.5501 10.4028 15.6236 11.1206 15.4805 11.8131C15.3373 12.5056 14.984 13.1417 14.4651 13.6409C13.9463 14.1402 13.2853 14.4802 12.5656 14.6179C11.846 14.7557 11.1001 14.685 10.4222 14.4148C9.7443 14.1446 9.1649 13.687 8.75725 13.1C8.34961 12.5129 8.13203 11.8227 8.13203 11.1166C8.13308 10.1701 8.52428 9.26271 9.21978 8.59344C9.91529 7.92417 10.8583 7.54773 11.8419 7.54672ZM11.8419 5.76201C10.7413 5.76201 9.66548 6.07605 8.75039 6.66442C7.83531 7.2528 7.12209 8.08907 6.70092 9.0675C6.27975 10.0459 6.16956 11.1226 6.38427 12.1613C6.59898 13.2 7.12895 14.1541 7.90716 14.9029C8.68538 15.6518 9.67688 16.1617 10.7563 16.3684C11.8357 16.575 12.9546 16.4689 13.9713 16.0637C14.9881 15.6584 15.8572 14.9721 16.4686 14.0915C17.0801 13.2109 17.4064 12.1757 17.4064 11.1166C17.4064 9.69649 16.8202 8.33453 15.7766 7.33034C14.7331 6.32615 13.3177 5.76201 11.8419 5.76201Z"
                                      fill="white"
                                    />
                                  </svg>
                                </Link>
                                <Link to={"/"}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="22"
                                    viewBox="0 0 24 22"
                                    fill="none"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M23.9707 11.181C23.9707 5.23259 18.8214 0.409424 12.4707 0.409424C6.12003 0.409424 0.970703 5.23259 0.970703 11.181C0.970703 16.5572 5.17539 21.0134 10.6738 21.8223V14.2956H7.75314V11.181H10.6738V8.80789C10.6738 6.10874 12.3911 4.61659 15.0176 4.61659C16.276 4.61659 17.5923 4.82721 17.5923 4.82721V7.47827H16.1415C14.7137 7.47827 14.2671 8.30826 14.2671 9.16133V11.181H17.4563L16.947 14.2956H14.2676V21.8232C19.766 21.0149 23.9707 16.5586 23.9707 11.181Z"
                                      fill="white"
                                    />
                                  </svg>
                                </Link>
                                <Link to={"/"}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="23"
                                    height="18"
                                    viewBox="0 0 23 18"
                                    fill="none"
                                  >
                                    <path
                                      d="M22.4418 2.56777C21.6364 2.91747 20.7842 3.14787 19.9122 3.25167C20.8286 2.71544 21.5178 1.86356 21.8504 0.855779C20.984 1.36204 20.0377 1.71726 19.052 1.90621C18.637 1.47153 18.1378 1.12572 17.5848 0.889815C17.0318 0.65391 16.4366 0.532833 15.8354 0.533943C13.4011 0.533943 11.4311 2.4739 11.4311 4.86531C11.4294 5.19795 11.4676 5.5296 11.5448 5.85317C9.79919 5.7714 8.08994 5.32643 6.52633 4.54672C4.96273 3.76702 3.57921 2.66975 2.46428 1.32512C2.07314 1.98405 1.86628 2.73586 1.86533 3.50198C1.86533 5.00388 2.64947 6.33146 3.83351 7.10923C3.132 7.09259 2.44487 6.90705 1.83044 6.56836V6.622C1.83044 8.72287 3.35131 10.4706 5.36422 10.8684C4.98569 10.9693 4.59563 11.0204 4.20389 11.0204C3.92592 11.0209 3.64858 10.994 3.37591 10.94C3.9355 12.6609 5.56417 13.9125 7.49343 13.9482C5.92577 15.1555 4.00108 15.8081 2.02189 15.8033C1.67058 15.8027 1.31959 15.7818 0.970703 15.7407C2.98414 17.0254 5.32461 17.705 7.71351 17.6985C15.826 17.6985 20.258 11.0964 20.258 5.37042C20.258 5.18268 20.2531 4.99494 20.2441 4.81168C21.1043 4.20021 21.8485 3.44035 22.4418 2.56777Z"
                                      fill="white"
                                    />
                                  </svg>
                                </Link>
                              </div>
                              {/* <div class="flex space-x-2 text-sm font-medium justify-start">
                                <button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 ">
                                  <span>Add Cart</span>
                                </button>
                                <button class="transition ease-in duration-300 bg-gray-700 hover:bg-gray-800 border hover:border-gray-500 border-gray-700 hover:text-white  hover:shadow-lg text-gray-400 rounded-full w-9 h-9 text-center p-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class=""
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    />
                                  </svg>
                                </button>
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
        <hr className="mt-[8.25rem] bg-gray-100 mb-5" />
        <div className="grid grid-cols-5 justify-center items-center gap-[5rem]">
          {statistics.map((statistic) => (
            <>
              <div className="text-center">
                <h1 className="text-[3.125rem] text-white">{statistic.number}</h1>
                <h1 className="medical_experts text-center">{statistic.title}</h1>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDoctors;
