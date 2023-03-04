import AOS from 'aos';
import { useEffect} from "react";
import 'aos/dist/aos.css'; 
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsBehance, BsLinkedin } from 'react-icons/bs';

export default function Talk () {

  useEffect (() => {
    AOS.init({duration: 1000});
  },[])

  return (
    <>
      <div className='text-[#8CB9B4] flex justify-center talk'>
        <h1 data-aos="fade-right" >let's</h1>
        <h1 data-aos="fade-left">Talk</h1>
      </div>
      <p className=' text-center py-[64px] px-[10.42%] '>If you want a product that's both beautiful and functional, look no further. Hire me, and together we'll create something that will make people say "Wow, I need that!" (or "I want that!" or "I'm in love with that!" - whatever floats your boat).</p>
      <div className='flex flex-col items-center'>
        <p className='border-solid py-[12px] px-[24px]  border-2 border-white'>Contact Me</p>
        <div className='flex items-center text-white text-[24px] py-[34.25px]'>
          <div data-aos="fade-right" ><AiOutlineTwitter /></div>
          <div data-aos="fade-left" className='ml-[10px]' ><BsLinkedin /></div>
        </div>
      </div>
    </>
  )
}