import { useEffect } from "react";
import {AiOutlineArrowRight } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Context ({text, first, second, third, fourth, fifth }) {
  useEffect (() => {
    AOS.init({duration: 1000});
  },[])
  
  return (
    <div className='w-[556px]'>
      <h3 data-aos="fade-right" className='mb-[24px]' > {text}</h3>
      <span data-aos="fade-right" className='section__content section__list'>
        <p>{first}</p>
        <AiOutlineArrowRight />
      </span>
      <span data-aos="fade-right" className="section__list">
        <p>{second}</p>
        <AiOutlineArrowRight />
      </span>
      <span data-aos="fade-right" className="section__list" >
      <p>{third}</p>
        <AiOutlineArrowRight />
      </span>
      <span data-aos="fade-right" className="section__list" >
        <p>{fourth}</p>
        <AiOutlineArrowRight />
      </span>
      <span data-aos="fade-right" className="section__list" >
        <p>{fifth}</p>
        <AiOutlineArrowRight />
      </span>
    </div>
  )
}