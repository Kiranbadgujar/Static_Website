import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ImQuotesLeft } from "react-icons/im";
import Slider from "react-slick";
import client from "../assets/testimonial.png";
import { testidata } from "../export.js";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import "react-slick/dist/react-slick.js"

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    });
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section
      id="client"
      className="w-[90%] m-auto flex flex-col lg:flex-row justify-between items-center gap-28 py-20"
    >
      <div className="lg:w-[50%] w-full">
      <img data-aos="zoom-in" data-aos-delay="200" src={client} className="lg:w-[1000px] lg:h-[550px]" />
      </div>
     
      <div className=" lg:w-[50%] w-full flex flex-col justify-center  lg:items-start items-center gap-4">
        <h1
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-lime-500 font-semibold text-[20px]"
        >
          TESTIMONIALS
        </h1>
        <h1
          data-aos="zoom-in"
          data-aos-delay="600"
          className="text-black lg:text-[50px] text-[50px] font-semibold lg:leading-[70px] leading-[60px] text-center"
        >
          What Our Clients Says
        </h1>
        <div data-aos="zoom-in" data-aos-delay="800" className="w-full mt-10">
          <Slider {...settings}>
            {testidata.map((item, index) => (
              <div key={index}>
                <div className="w-full flex justify-between items-start gap-6">
                  <div className="">
                    <div id="icon-box" className="bg-black p-6 rounded-full ">
                      <ImQuotesLeft className="text-limegreen size-[35px]" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-start gap-6">
                    <p className="text-xl text-justify">{item.review}</p>
                    <div className="">
                      <h1 className="text-black font-semibold text-[25px] ">
                        {item.name}
                      </h1>
                      <p className="text-lg">{item.post}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
