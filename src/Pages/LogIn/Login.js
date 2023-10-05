import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/features/auth/authSlice";
// import loginImage from "../assets/login.svg";
const Login = () => {
  const { isLoading, email, isError, error } = useSelector(
    (state) => state.auth
  );
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && email) {
      navigate("/");
      toast.success(`user log in successfully`);
    }
  }, [navigate, isLoading, email]);

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [error, isError]);

  const onSubmit = ({ email, password }) => {
    // console.log({ email, password });
    dispatch(
      loginUser({
        email,
        password,
      })
    );
    reset();
  };

  return (
    <div className="bg-[#c9ecf727]">
      <div className="w-[1200px] mx-auto">
        <div className="flex justify-evenly items-center py-[200px] ">
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-[32px] font-semibold font-sans text-[#000] ">
              Log in to Pharma
            </h1>
            <div className="py-5">
              <div className="flex flex-col items-start">
                <label
                  htmlFor="email"
                  className="font-sans text-[#4b4a4a] font-semibold py-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="block w-[490px] rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="flex flex-col items-start mt-7">
                <label
                  htmlFor="password"
                  className="font-sans text-[#4b4a4a] font-semibold py-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="password"
                  {...register("password", { required: true, maxLength: 80 })}
                  className="block w-[490px] rounded-md border-0 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  focus:ring-inset focus:ring-1 focus:ring-orange-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <button
              className="bg-[#0152A8] w-full text-white font-sans font-semibold  py-3 cursor-pointer"
              type="submit"
            >
              Login
            </button>
            <p className="font-sans font-semibold text-[#000] pt-5 ">
              Don't have an account?{" "}
              <span
                className="text-primary hover:underline cursor-pointer"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </span>
            </p>
          </form>

          <div>
            <img
              className="h-[490px] w-[490px] pt-7"
              src="https://i.ibb.co/JHn3VVh/copy-1illistration-1.png"
              alt=""
              srcSet=""
            />
          </div>
        </div>
        {/* <div className="bg-[#FFFAF4] rounded-lg grid place-items-center p-[50px]">
          <h1 className="mb-10 font-medium text-2xl">Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-3">
              <div className="flex flex-col items-start">
                <label htmlFor="email" className="ml-5">
                  Email
                </label>
                <input type="email" {...register("email")} id="email" />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="password" className="ml-5">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <div className="relative !mt-8">
                {isError && (
                  <>
                    <span>{error}</span>
                  </>
                )}
                <button
                  type="submit"
                  className="font-bold text-white py-3 rounded-full bg-primary w-full"
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default Login;
