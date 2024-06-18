import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { FaArrowUp } from "react-icons/fa6";
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <>
      <section id="footer" className="w-full bg-black m-auto grid lg:grid-cols-3 grid-col-1 justify-between items-start lg:gap-28 gap-16 lg:p-20 p-10">
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold text-[50px] leading-[55px] ">
            Let's Start Working together get in touch!
          </h1>
          <button className="bg-limegreen px-6 py-4 w-full rounded-full font-semibold text-md">
            Get Started Now
          </button>
        </div>
        <div className="flex flex-col justify-center items-start gap-8">
          <h1 className="text-white font-semibold text-[24px]">
            Contact Information
          </h1>
          <div className="flex flex-col justify-between items-start gap-3 ">
            <p className="flex text-white font-semibold justify-center items-center gap-5">
              <FaMapMarkedAlt className="text-limegreen size-[50px]" />
              374 William S Canning Blvd, Fall River NA 2721, USA
            </p>
            <p className="flex text-white font-semibold justify-center items-center gap-5">
              <FaPhoneVolume className="text-limegreen size-[30px]" />
              91 9054249255
            </p>
            <p className="flex text-white font-semibold justify-center items-center gap-5">
              <IoMailOpenOutline className="text-limegreen size-[38px]" />
              support@webagency.com
            </p>
            <p className="flex text-white font-semibold justify-center items-center gap-5">
              <LuClock3 className="text-limegreen size-[38px]" />
              10:00 - 17:00
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-10">
          <h1 className="text-white font-semibold text-[24px]">
            Subscribe Newsletter
          </h1>
          <p className="flex text-white font-semibold justify-center items-center gap-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, ex.
          </p>
          <div className="w-full flex justify-center items-start gap-4">
            <input
              type="text"
              className="w-full bg-slate-900 px-6 py-4 rounded-lg border-none "
              placeholder="Enter Your Email"
            />
          </div>
          <button className="bg-limegreen px-6 py-4 w-full rounded-full font-semibold text-md">
            Subscribe Now
          </button>
          <hr></hr>
          <div className="flex "></div>
        </div>
      </section>
      <div
        id="icon-box"
        className="bg-limegreen text-black p-3 rounded-full hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-4 right-6 bottom-6"
      >
        <Link to="hero" spy={true} offset={-100} smoot={true}  className=""><FaArrowUp className="w-[35px] h-[35px]"/></Link>
      </div>
    </>
  );
};

export default Footer;
