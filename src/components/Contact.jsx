import React, { useEffect } from "react";
import contact from "../assets/contact.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  });

  return (
    <section
      id="about"
      className="w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-28 py-20"
    >
      <div className="lg:w-[50%]">
        <img
          data-aos="zoom-in"
          data-aos-delay="200"
          src={contact}
          className=""
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="lg:w-[50%] flex flex-col justify-center items-start gap-8 bg-black lg:p-14 p-8 rounded-3xl"
      >
        <h1 className="text-white text-[45px] font-semibold ">
          Let's talk your project
        </h1>
        <div
          id="form-box"
          className="w-full bg-transparent flex flex-col justify-center items-center gap-4"
        >
          <input
            type="text"
            className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none "
            placeholder="Enter Your Full Name"
          />
          <div className="w-full flex justify-center items-start gap-4">
            <input
              type="text"
              className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none "
              placeholder="Enter Your Email"
            />
            <input
              type="text"
              className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none "
              placeholder="Enter Your Number"
            />
          </div>
          <textarea className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none" rows="4" placeholder="Enter Your Message"></textarea>
          <button className="bg-limegreen px-6 py-4 w-full rounded-md font-semibold text-md">Submit Now</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
