import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight } from "react-icons/fa";
import {servicesinfo} from '../export.js/'


const Service = () => {

  useEffect(()=>{
    AOS.init({
      offset: 200,
      duration: 400,
      easing: "ease-in-sine",
    })
  })

  return (
    <section id='service' className='w-[95%] m-auto flex flex-col lg:flex-row justify-between items-center gap-30 py-20 sm:px-20'>
        <div data-aos="zoom-in" data-aos-delay="400" className=' w-full bg-black lg:p-25 p-10 flex flex-col lg:flex-row justify-center items-center gap-20 rounded-3xl'>
          {servicesinfo.map((item, index)=>(
            <div key={index} className='flex flex-col justify-center items-start gap-6'>
              <img src={item.icon} alt='image' />
              <h1 className='text-[26px] text-white font-semibold font-ubuntu'>{item.title}</h1>
              <p className='font-ubuntu text-[18px] text-slate-200'>{item.about}</p>
              <button className='text-limegreen font-ubuntu font-semibold text-[18px] flex justify-center items-center gap-3'>{item.label}<FaArrowRight /></button> 
            </div>
          ))}
        </div>
    </section>
  )
}

export default Service
