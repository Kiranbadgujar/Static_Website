import React, { useEffect } from 'react'
import "aos/dist/aos.css";
import AOS from "aos";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {pricingplan} from '../export.js/'

const Pricing = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    })
  })

  return (
   <section id='pricing' className='w-[90%] m-auto flex flex-col justify-between items-center gap-2 py-20 '>
      <h1 data-aos="zoom-in" data-aos-delay="200" className='text-limegreen font-ubuntu text-[19px] font-semibold'>PRICING PLAN</h1>
      <h1 data-aos="zoom-in" data-aos-delay="400"  className='text-black font-semibold lg:text-[60px] text-[50px] lg:leading-[70px] leading-[50px] text-center font-ubuntu'>Choose your perfect plan</h1>
      <div data-aos="zoom-in" data-aos-delay="600" className='w-full flex lg:flex-row flex-col justify-between items-center gap-10 mt-10'>
        {
          pricingplan.map((item ,index)=>(
            <div key={index} className='bg-black p-10 rounded-3xl flex flex-col justify-center items-start gap-3 lg:w-[35%] w-full'>
              <h1 className='text-white text-2xl font-semibold font-ubnutu'>{item.type}</h1>
              <p className='text-white text-lg font-ubuntu'>{item.about}</p>
              <h1 className='text-limegreen font-bold text-[55px] font-ubuntu'>{item.price}<span className='text-limegreen text-lg pl-2'>Monthly</span></h1>
              <button className='bg-limegreen rounded-xl hover:bg-white w-full px-6 py-3 text-lg font-semibold'>{item.label}</button>
              <p className='text-white font-semibold text-lg'>{item.specs}</p>
              <div className='flex flex-col justify-center items-start gap-4'>
                  <p className='flex text-white justify-center items-center gap-4'><FaArrowAltCircleRight className="text-limegreen size-6" />Powerful admin panel</p>
                  <p className='flex text-white justify-center items-center gap-4'><FaArrowAltCircleRight className="text-limegreen size-6" />1 Native android app</p>
                  <p className='flex text-white justify-center items-center gap-4'><FaArrowAltCircleRight className="text-limegreen size-6" />Multi language support</p>
                  <p className='flex text-white justify-center items-center gap-4'><FaArrowAltCircleRight className="text-limegreen size-6" />24/7 support team here</p>
              </div>
            </div>
          ))
        }
      </div>
   </section>
  )
}

export default Pricing
