import { useEffect } from "react";
import { AiOutlineArrowRight } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Link from "next/link";

export default function Context (props) {
  useEffect (() => {
    AOS.init({duration: 1000});
  },[])
  
  return (
    <div className='context bg-[yellow'>
      <h3 data-aos="fade-right" className='mb-[24px]' > {props.text}</h3>
      <Link href={props.linkfirst}  >
        <span  data-aos="fade-right" className='section__content section__list'>
          <p>{props.first}</p>
          <AiOutlineArrowRight />
        </span>
      </Link>
      <Link href={props.linksecond}>
        <span  data-aos="fade-right" className="section__list">
          <p>{props.second}</p>
          <AiOutlineArrowRight />
        </span>
      </Link>
      <Link href={props.linkthird} data-aos="fade-right">
        <span data-aos="fade-right" className="section__list" >
        <p>{props.third}</p>
          <AiOutlineArrowRight />
        </span>
      </Link>
      <Link href={props.linkfourth}>
        <span data-aos="fade-right" className="section__list" >
          <p>{props.fourth}</p>
          <AiOutlineArrowRight />
        </span>
      </Link>
      <Link href={props.linkfifth}>
        <span data-aos="fade-right" className="section__list" >
          <p>{props.fifth}</p>
          <AiOutlineArrowRight />
        </span>
      </Link>
    </div>
  )
}