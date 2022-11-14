import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="hero" style={{marginTop:'150px',marginBottom:'100px'}}>
           
      <div className="hero-content flex-col lg:flex-row-reverse">
  
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      
          <div
            className="card-body"
            style={{ width: "385px", height: "540px" }}
          >
             
           
            <div className="form-control">
            <p className="text-center text-xs text-secondary">Login!</p>
              <label className="label">
                <span className="label-text" style={{fontSize:'14px'}}>Email</span>
              </label>
              <input 
                placeholder="email"
                className="input input-sm w-full input-bordered text-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs" style={{fontSize:'14px'}}>Password</span>
              </label>
              <input
              style={{fontSize:'14px'}}
                type="text"
                placeholder="password"
                className="input input-sm w-full input-bordered text-xs"
              />
              <label className="label">
                <Link
                  to="#"
                  className="label-text-alt link link-hover text-primary"
                  style={{fontSize:'14px'}}
                >
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-1">
              <button
                className=" btn-primary rounded text-white text-xs bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary"
                style={{ width: "290px", height: "2.2rem" }}
              >
                Login
              </button>
            </div>
            <div>
              <p className="text-accent" style={{ fontSize: "12px" }}>
                new to doctors portal?{" "}
                <Link to="/">
                  {" "}
                  <span className="text-primary hover:text-accent">
                    create new account
                  </span>{" "}
                </Link>{" "}
              </p>
            </div>
            <div className="flex flex-col w-full">
              <div className="divider" style={{fontSize:'14px',marginTop:"0.3rem",marginBottom:'0.3rem'}}>OR</div>
            </div>
           
            <div className="form-control">
          <button className="border rounded text-xs hover:bg-accent hover:text-white uppercase" style={{ width: "290px", height: "2.2rem" ,fontSize:'14px' }}>continue with google</button>
        </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
