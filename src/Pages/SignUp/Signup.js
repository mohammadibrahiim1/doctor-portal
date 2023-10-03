import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser, googleSignIn } from "../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
// import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


const Signup = () => {
  const dispatch = useDispatch();
  const { isError, error } = useSelector(state => state.auth);
  // const navigate = useNavigate()


  // useEffect(() => {
  //   if (email) {

  //   }
  // }, [email])


  useEffect(() => {
    if (isError) {
      toast.error(error)
    }
  }, [error, isError]);




  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name);
    dispatch(createUser({
      email, password
    }))


  }


  const handleGoogleSignIn = () => {
    dispatch(googleSignIn());
    toast.success(`successfully sign in with google`)
  }




  return (
    <div>
      <div
        className="hero bg-[#A7D7C5] py-[100px]"

      >
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card flex-shrink-0 w-[698px] h-[698px]  shadow-2xl bg-[#F6FBF9] p-10">
            <h2 className="text-center text-[55px] text-[#000] font-sans font-semibold">Create An Account </h2>
            <p className="text-center text-[#32403B] text-[19px] font-sans font-semibold w-[400px] mx-auto" >Already Have an Account? <Link to={'/login'} >Login</Link></p>
            <form
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
