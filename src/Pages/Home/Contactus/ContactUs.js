import React from "react";

const ContactUs = () => {
  return (
    <div>
      <section>
        <div className="hero bg-[url('https://i.ibb.co/4JzLf6k/bg-blue-2.png')] bg-cover">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div
              className="card flex-shrink-0 w-full max-w-sm mb-4"
              style={{ height: "468px", width: "350" }}
            >
              <div className="card-body ">
                <div className="text-center">
                  <p className="text-xs text-primary font-bold">contact us</p>
                  <h1 className="text-base font-bold text-white ">
                    Stay connected with us
                  </h1>
                </div>
                <div className="form-control mt-1">
                  {/* <label className="label">
            <span className="label-text">Email</span>
          </label> */}
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered text-xs"
                  />
                </div>
                <div className="form-control">
                  {/* <label className="label">
            <span className="label-text">Password</span>
          </label> */}
                  <input
                    type="text"
                    placeholder="subject"
                    className="input input-bordered text-xs"
                  />

                  {/* <label className="label">
            <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link >
          </label> */}
                </div>

                <div className="form-control">
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    className=" text-xs pt-2 input input-bordered"
                    placeholder="your message"
                  ></textarea>
                </div>
                <div className="form-control ">
                  <button className="btn btn-primary text-white font-bold w-1/2 mx-auto mt-1 bg-gradient-to-r from-secondary to-primary hover:from-primary hover:to-secondary">
                    submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
