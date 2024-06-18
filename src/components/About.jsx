import React, { useEffect } from "react";
import about from "../assets/about.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
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
      <div className="">
        <img
            data-aos="zoom-in"
            data-aos-delay="200"
          src={about}
          className="lg:w-[1000px] lg:h-[500px] pt-2"
        />
      </div>
      <div
        data-aos="zoom-in"
        data-aos-delay="400"
        className="flex flex-col justify-center items-start gap-4"
      >
        <h1 className="text-lime-500 font-ubuntu text-[19px] font-semibold ">
          WHO WE ARE
        </h1>
        <h1 className="text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[60px] font-ubuntu">
          The leading social media marketting agency
        </h1>
        <p className="font-ubuntu text-[18px] text-slate-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aliquam
          modi reiciendis at, iste quidem dolorum cumque soluta saepe id!
        </p>
        <div className="flex flex-col justify-center items-start gap-4">
          <p className="text-black flex justify-center items-center gap-4 ">
            <FaArrowAltCircleRight className="text-limegreen size-6" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            veritatis.
          </p>
          <p className="text-black flex justify-center items-center gap-4 ">
            <FaArrowAltCircleRight className="text-limegreen size-6" />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
            veritatis.
          </p>
            <p className="text-black flex justify-center items-center gap-4 ">
              <FaArrowAltCircleRight className="text-limegreen size-6" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
              veritatis.
            </p>
        </div>
        <button className="bg-limegreen px-6 py-4 rounded-full text-[17px] font-semibold font-ubuntu hover:bg-black hover:text-white">Get Started Now</button>
      </div>
    </section>
  );
};

export default About;
