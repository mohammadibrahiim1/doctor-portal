import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/features/auth/authSlice";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import loginImage from "../assets/login.svg";
const Login = () => {
  const { isLoading, email, isError, error } = useSelector(state => state.auth)
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();



  useEffect(() => {
    if (!isLoading && email) {
      navigate('/');
      toast.success(`user log in successfully`)
    }
  }, [isLoading, email])

  
  useEffect(() => {
    if (isError) {
      toast.error(error)
    }
  }, [error, isError])


  const onSubmit = ({ email, password }) => {
    // console.log({ email, password });
    dispatch(loginUser({
      email, password
    }))
    reset()

  };



  return (
    <div className='flex  items-center'>

      <div className=' grid place-items-center card flex-shrink-0 w-[698px] h-[698px]  shadow-2xl bg-[#F6FBF9] p-10 mx-auto'>
        <div className='bg-[#FFFAF4] rounded-lg grid place-items-center p-[50px]'>
          <h1 className='mb-10 font-medium text-2xl'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='space-y-3'>
              <div className='flex flex-col items-start'>
                <label htmlFor='email' className='ml-5'>
                  Email
                </label>
                <input type='email' {...register("email")} id='email' />
              </div>
              <div className='flex flex-col items-start'>
                <label htmlFor='password' className='ml-5'>
                  Password
                </label>
                <input
                  type='password'
                  id='password'
                  {...register("password")}
                />
              </div>
              <div className='relative !mt-8'>
                {
                  isError && <>
                    <span>
                      {error}
                    </span>
                  </>
                }
                <button
                  type='submit'
                  className='font-bold text-white py-3 rounded-full bg-primary w-full'
                >
                  Login
                </button>
              </div>
              <div>
                <p>
                  Don't have an account?{" "}
                  <span
                    className='text-primary hover:underline cursor-pointer'
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </span>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;