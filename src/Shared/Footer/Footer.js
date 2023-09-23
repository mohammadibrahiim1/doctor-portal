import React from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section>
      <footer className="text-base-content  mt-12">
        <footer className="footer footer-center p-10 bg-[#E5F2EF]  text-primary-content  ">
          <div className="w-[1200px] mx-auto flex justify-between  items-center  ">
            <aside className="flex items-center gap-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="62" height="59" viewBox="0 0 62 59" fill="none">
                <rect
                  x="13.7373"
                  y="46.1096"
                  width="52.1096"
                  height="25.1975"
                  rx="12.5988"
                  transform="rotate(-60 13.7373 46.1096)"
                  fill="#0152A8"
                />
                <rect
                  x="26.2744"
                  y="58.8188"
                  width="52.1096"
                  height="25.1975"
                  rx="12.5988"
                  transform="rotate(-120 26.2744 58.8188)"
                  fill="#0FE3AF"
                />
                <path
                  d="M19.9666 35.2829C16.4753 41.3164 18.5533 49.0349 24.6079 52.5227C30.6625 56.0105 38.4009 53.9468 41.8921 47.9134L42.0301 47.6749C44.0321 43.953 44.1169 39.3169 41.8466 35.3933L30.8633 16.4143L19.9666 35.2829Z"
                  fill="#3DB8ED"
                />
              </svg>
              <span className="font-semibold text-[30px] text-[#1c1c1c] font-sans ">Pharma</span>
            </aside>
            <div className="flex items-center gap-2">
              <svg
                className=" bg-[#0FE3AF] p-1  rounded-full border-[#0FE3AF]"
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M15.4682 11.5577C15.2904 11.3684 14.6628 10.8085 13.5091 10.0679C12.3468 9.32073 11.4896 8.85488 11.2438 8.74625C11.2221 8.73663 11.1982 8.73311 11.1747 8.73605C11.1512 8.73899 11.1289 8.74828 11.1103 8.76293C10.7142 9.0718 10.0474 9.63914 10.0117 9.66979C9.7808 9.86764 9.7808 9.86764 9.5918 9.806C9.25943 9.69703 8.22691 9.14876 7.3272 8.24702C6.42749 7.34527 5.85095 6.28721 5.74198 5.95519C5.67966 5.76585 5.67966 5.76585 5.8782 5.53496C5.90884 5.49921 6.47653 4.83243 6.7854 4.43672C6.80005 4.41809 6.80934 4.39582 6.81228 4.3723C6.81522 4.34878 6.8117 4.3249 6.80209 4.30323C6.69345 4.05702 6.22759 3.20023 5.48044 2.03797C4.73874 0.884561 4.17957 0.256948 3.99023 0.0791866C3.97286 0.0627907 3.95138 0.0513847 3.92807 0.0461707C3.90475 0.0409566 3.88047 0.0421274 3.85776 0.0495598C3.19591 0.277001 2.55733 0.567212 1.95073 0.916232C1.36514 1.25664 0.810745 1.64808 0.293994 2.08598C0.275956 2.10132 0.262432 2.12127 0.254873 2.14371C0.247314 2.16615 0.246005 2.19022 0.251086 2.21334C0.322259 2.54503 0.66246 3.92966 1.71814 5.84758C2.79527 7.805 3.54174 8.80788 5.12356 10.3842C6.70537 11.9606 7.73994 12.752 9.69941 13.8291C11.6173 14.8848 13.0027 15.2253 13.3337 15.2958C13.3568 15.3009 13.381 15.2995 13.4034 15.292C13.4259 15.2844 13.4459 15.2709 13.4614 15.2529C13.8992 14.7362 14.2905 14.1818 14.6308 13.5962C14.9798 12.9896 15.27 12.351 15.4975 11.6892C15.5048 11.6667 15.5059 11.6426 15.5007 11.6195C15.4956 11.5964 15.4843 11.575 15.4682 11.5577Z"
                  fill="#0152A8"
                />
              </svg>
              <p className="text-[#545454] ">(+22) 123 - 4567 - 900</p>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="bg-[#0FE3AF] p-1  rounded-full border-[#0FE3AF]"
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="14"
                viewBox="0 0 19 14"
                fill="none"
              >
                <path
                  d="M15.9269 0.232422H2.75909C2.17723 0.233025 1.61938 0.457433 1.20794 0.856405C0.796496 1.25538 0.565076 1.79633 0.564453 2.36056V11.4811C0.565076 12.0454 0.796496 12.5863 1.20794 12.9853C1.61938 13.3843 2.17723 13.6087 2.75909 13.6093H15.9269C16.5088 13.6087 17.0667 13.3843 17.4781 12.9853C17.8895 12.5863 18.121 12.0454 18.1216 11.4811V2.36056C18.121 1.79633 17.8895 1.25538 17.4781 0.856405C17.0667 0.457433 16.5088 0.233025 15.9269 0.232422ZM15.3712 3.75259L9.72786 8.00886C9.61782 8.09182 9.4824 8.13685 9.34302 8.13685C9.20363 8.13685 9.06822 8.09182 8.95817 8.00886L3.31481 3.75259C3.2485 3.70403 3.19281 3.64319 3.15097 3.57358C3.10913 3.50397 3.08197 3.427 3.07107 3.34713C3.06017 3.26725 3.06575 3.18608 3.08748 3.10831C3.10921 3.03055 3.14667 2.95775 3.19767 2.89414C3.24867 2.83054 3.3122 2.7774 3.38456 2.7378C3.45692 2.69821 3.53668 2.67296 3.61919 2.66352C3.70171 2.65407 3.78533 2.66063 3.86521 2.68279C3.94509 2.70496 4.01963 2.7423 4.0845 2.79265L9.34302 6.75858L14.6015 2.79265C14.733 2.69636 14.8983 2.65412 15.0617 2.67508C15.225 2.69604 15.3733 2.77851 15.4744 2.90465C15.5756 3.03079 15.6214 3.19046 15.6021 3.34914C15.5828 3.50782 15.4999 3.65275 15.3712 3.75259Z"
                  fill="#0152A8"
                />
              </svg>
              <p className="text-[#545454]">support@doctorate.com</p>
            </div>
            <nav>
              <div className="grid grid-flow-col gap-4 justify-center items-center">
                <Link to={""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="#014389"
                    fill="#014389"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link to={""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="#014389"
                    fill="#014389"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </Link>
                <Link to={""}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="#014389"
                    fill="#014389"
                  >
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </Link>
              </div>
            </nav>
          </div>
        </footer>

        <footer className="footer p-10 bg-[#E5F2EF] text-base-content">
          <div className="w-[1200px] mx-auto flex justify-between  items-center gap-5">
            <div className="text-[30px] w-[360px]  font-sans font-semibold leading-[2.644rem] ">
              “A Simple Story About The Doctorate Medical Center & Health Care Foundation
            </div>
            <nav>
              <header className=" font-sans font-semibold py-5 text-[#1C1C1C]">Explore</header>
              <Link to={""} className="link link-hover font-sans ">
                <p> Home</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p> Service</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p>About us</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p>Testimonials</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p>News</p>
              </Link>
            </nav>
            <nav>
              <header className="font-sans font-semibold py-5 text-[#1C1C1C]">Utility Pages</header>
              <Link to={""} className="link link-hover font-sans ">
                <p> Terms of use</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p>Privacy policy</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p> 404 Page</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p>Protected Page</p>
              </Link>
              <Link to={""} className="link link-hover font-sans ">
                <p>Licenses Page</p>
              </Link>
            </nav>
            <form>
              <header className="font-sans font-semibold text-[#1C1C1C]">Book an appointment</header>
              <fieldset className="form-control ">
                <label className="label">
                  <span className="label-text font-sans pt-5">
                    It is a long established fact that a reader will be distracted
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="username@site.com"
                    className="input input-bordered w-full pr-16 rounded-none"
                  />
                  <button className="btn btn-primary absolute top-0 right-0 rounded-l-none rounded-none">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </footer>

        <div className=" px-10 py-4 text-base-content border-base-300">
          <div className="items-center text-center grid-flow-col mt-4">
            <p className="text-[#545454]">Copyright 2022 All Rights Reserved</p>
          </div>
          <div className="md:place-self-center md:justify-self-end"></div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
