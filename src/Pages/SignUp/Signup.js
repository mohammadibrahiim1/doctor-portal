import React from "react";

const Signup = () => {
  const handleGoogleSignup = () => {
    window.open('http://localhost:5000/auth/google', '_self')
  }

  const handleFacebookSignup = () => {
    console.log(' facebook signup');
  }
  const handleAppleSignup = () => {
    console.log('apple signup');
  }
  return (
    <div>
      <div
        className="hero bg-[#A7D7C5] py-[100px]"

      >
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-[698px] h-[698px]  shadow-2xl bg-[#F6FBF9] p-10">
            <h2 className="text-center text-[55px] text-[#000] font-sans font-semibold">Create An Account </h2>
            <p className="text-center text-[#32403B] text-[19px] font-sans font-semibold w-[400px] mx-auto" >Create an account to enjoy all the services without any ads for free!</p>
            <div
              className="card-body"
            >

              <div className="form-control">

                <input

                  type="text"
                  name="name"
                  placeholder="your name"
                  className="input input-sm w-full input-bordered text-lg capitalize font-sans h-[64px]"
                />
              </div>
              <div className="form-control">
                <input

                  placeholder="email"
                  type="email"
                  name="email"
                  className="input input-sm w-full input-bordered text-lg capitalize font-sans h-[64px] my-4"
                />
              </div>
              <div className="form-control">

                <input

                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-sm w-full input-bordered text-lg capitalize font-sans h-[64px]"
                />

              </div>
              <div className="">
                <button
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[30px] bg-[#84C7AE] h-[60px] w-[391px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4"
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
                <button onClick={handleGoogleSignup}
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[13px] bg-[#84C7AE] h-[45px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4 px-5 "
                >
                  continue with google
                </button>
                <button onClick={handleFacebookSignup}
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[13px] bg-[#84C7AE] h-[45px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4 px-5"
                >
                  continue with facebook
                </button>
                <button onClick={handleAppleSignup}
                  className=" capitalize font-sans btn-primary rounded-xl text-white text-[13px] bg-[#84C7AE] h-[45px] flex justify-center items-center mx-auto hover:bg-[#84c7ae] my-4 px-5"
                >
                  continue with Apple
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
