import React from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";

const Signup = () => {
  const dispatch = useDispatch()


  const handleSignup = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(name, email, password);

    try {
      dispatch(createUser({ name: form.name.value, email: form.email.value, password: form.password.value })
      );
      toast.success(`user created successfully`)
    } catch (error) {
      console.log(error);
      window.alert('something went wrong!')
    }


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
            <form
              className="card-body"
              onSubmit={handleSignup}
            >

              <div className="form-control">
                <input

                  type="text"
                  name="name"
                  placeholder="your name"
                  // value={userName}
                  className="input input-sm w-full input-bordered text-lg capitalize font-sans h-[64px]"
                // onChange={e => setUsername(e.target.value)}
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
