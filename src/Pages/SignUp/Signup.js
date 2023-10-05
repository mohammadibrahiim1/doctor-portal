import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, googleSignIn } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { data } from "autoprefixer";
import { setDate } from "date-fns";
// import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit, reset, control } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isError, error } = useSelector((state) => state.auth);
  // const navigate = useNavigate()

  const password = useWatch({ control, name: "password" });
  const confirmPassword = useWatch({ control, name: "confirmPassword" });

  const [disabled, setDisabled] = useState(true);
  console.log(disabled);

  useEffect(() => {
    if (
      password !== undefined &&
      password !== "" &&
      confirmPassword !== undefined &&
      confirmPassword !== "" &&
      password === confirmPassword
    ) {
      return setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [password, confirmPassword]);

  // useEffect(() => {
  //   if (email) {

  //   }
  // }, [email])

  useEffect(() => {
    if (isError) {
      toast.error(error);
    }
  }, [error, isError]);

  const submit = (data) => {
    console.log(data);
    dispatch(
      createUser({
        email: data.email,
        password: data.password,
      })
    );
    reset();
    // e.preventDefault();
    // const form = e.target;
    // const name = form.name.value;
    // const email = form.email.value;
    // const password = form.password.value;
    // console.log(email, password, name);
    // dispatch(
    //   createUser({
    //     email,
    //     password,
    //   })
    // );
  };

  const handleGoogleSignIn = () => {
    dispatch(googleSignIn());
    navigate("/appointment");
    toast.success(`successfully sign in with google`);
  };

  return (
    <div>
      <div className="bg-[#B5B5B5]">
        <div className="w-[1200px] mx-auto py-[120px]">
          <div className="  flex justify-between items-center">
            <div>
              <img
                className="h-[390px] w-[390px] mx-5 "
                src="https://i.ibb.co/JHn3VVh/copy-1illistration-1.png"
                alt=""
                srcset=""
              />
            </div>

            <form onSubmit={handleSubmit(submit)}>
              <h2 className=" text-[25px] text-[#000] font-sans font-semibold pb-[49px]">
                Sign up to Pharma
              </h2>

              <div className="flex gap-5 items-center">
                <button
                  className="w-[320px] h-[50px] rounded-[5px] text-white font-sans bg-[#F44242]"
                  onClick={handleGoogleSignIn}
                >
                  Signup with Google
                </button>
                <button className="w-[320px] h-[50px] rounded-[5px] text-white font-sans bg-[#3B5998]">
                  Signup with facebook
                </button>
              </div>

              <div className="flex justify-center items-center gap-5 py-10">
                <div className="w-[300px] h-[1px] bg-[#686868]"></div>
                <div className="text-[12px] font-semibold font-sans">or</div>
                <div className="w-[300px] h-[1px] bg-[#686868]"></div>
              </div>
              {/* <p className="text-center text-[#32403B] text-[19px] font-sans font-semibold w-[400px] mx-auto">
                Already Have an Account? <Link to={"/login"}>Login</Link>
              </p> */}
              <div className="flex justify-center items-center gap-5">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="first name"
                    className="font-sans text-[#4b4a4a] font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first name"
                    placeholder="First name"
                    {...register("first name", {
                      required: true,
                    })}
                    className="block w-[320px] h-[45px] rounded-md border-1 py-3 my-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last name"
                    className="font-sans text-[#4b4a4a] font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last name"
                    placeholder="Last Name"
                    {...register("last name", { required: true })}
                    className="block w-[320px] h-[45px] rounded-md border-1 py-3 my-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 py-[23px]">
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
                    className="block w-[320px] h-[45px] rounded-md border-1 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="Phone"
                    className="font-sans text-[#4b4a4a] font-semibold py-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="Your Phone Number"
                    {...register("phone", {
                      required: true,
                    })}
                    className="block w-[320px] h-[45px] rounded-md border-1 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center gap-5">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="Password"
                    className="font-sans text-[#4b4a4a] font-semibold py-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    {...register("password", {
                      required: true,
                    })}
                    className="block w-[320px] h-[45px] rounded-md border-1 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <label
                    htmlFor="Confirm password"
                    className="font-sans text-[#4b4a4a] font-semibold py-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: true,
                    })}
                    className="block w-[320px] h-[45px] rounded-md border-1 py-3 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="py-5">
                <h2 className="font-semibold text-[#4b4a4a] font-sans">
                  Gender :{" "}
                </h2>
                <div className="flex items-center gap-5 ">
                  <label>
                    <div className="font-sans  flex items-center text-neutral">
                      <input
                        className="radio radio-xs radio-accent mr-1"
                        type="radio"
                        id="gender"
                        value="male"
                        {...register("gender")}
                      />
                      Male
                    </div>
                  </label>
                  <label>
                    <div className="font-sans  flex items-center text-neutral">
                      <input
                        className="radio radio-xs radio-accent mr-1"
                        type="radio"
                        id="gender"
                        value="female"
                        {...register("gender")}
                      />
                      Female
                    </div>
                  </label>
                  <label>
                    <div className="font-sans  flex items-center text-neutral">
                      <input
                        className="radio radio-xs radio-accent mr-1"
                        type="radio"
                        id="gender"
                        value="shemale"
                        {...register("gender")}
                      />
                      Shemale
                    </div>
                  </label>
                </div>
              </div>

              <div className="form-control py-[19px] ">
                <label className="flex justify-start items-start  gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-xs rounded-[3px]"
                  />
                  <span className="label-text font-sans w-[640px] text-xs ">
                    Creating an account means you’re okay with our{" "}
                    <strong className="text-indigo-500">
                      Terms of Service, Privacy Policy, and our default
                      Notification Settings.
                    </strong>
                  </span>
                </label>
              </div>

              <div className="flex justify-between items-center gap-5">
                <button
                  className="bg-[#0152A8] w-[320px] text-white font-sans font-semibold disabled:bg-red-200 py-3 cursor-pointer"
                  type="submit"
                  control={control}
                  disabled={disabled}
                >
                  Signup
                </button>
                <p className="font-sans font-semibold text-[#686868]">
                  Already have an account?{" "}
                  <span
                    className="text-primary hover:underline cursor-pointer"
                    onClick={() => navigate("/signup")}
                  >
                    Login
                  </span>
                </p>
              </div>
            </form>
          </div>

          {/* <form
              className="card-body"
              onSubmit={submit}
            >

              <div className="form-control">
                <input

                  type="text"
                  name="name"
                  placeholder="your name"
                  // value={name}
                  className="input input-sm w-full input-bordered text-lg capitalize font-sans h-[64px]"
                // onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-control">
                <input

                  placeholder="email"
                  type="email"
                  name="email"
                  // value={email}
                  className="input input-sm w-full input-bordered text-lg  font-sans h-[64px] my-4"
                // onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control">

                <input

                  type="password"
                  name="password"
                  // value={password}
                  placeholder="password"
                  className="input input-sm w-full input-bordered text-lg capitalize font-sans h-[64px]"
                // onChange={e => setPassword(e.target.value)}

                />

              </div>
              <div className="">
                <button
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[30px] bg-[#84C7AE] h-[60px] w-[391px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4"
                  type="submit"
                >
                  create account
                </button>
              </div>

              <div className="flex flex-col w-full">
                <div
                  className="divider"
                  style={{
                    fontSize: "14px",
                    marginTop: "0.2rem",
                    marginBottom: "0.2rem",
                  }}
                >
                  OR
                </div>
              </div>

              <div className="flex justify-center items-center gap-5">
                <button
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[13px] bg-[#84C7AE] h-[45px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4 px-5 "
                  onClick={handleGoogleSignIn}
                  type="submit"
                >
                  continue with google
                </button>
                <button
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[13px] bg-[#84C7AE] h-[45px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4 px-5"
                >
                  continue with facebook
                </button>
                <button
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[13px] bg-[#84C7AE] h-[45px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4 px-5"
                >
                  continue with Apple
                </button>

              </div>
            </form> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
