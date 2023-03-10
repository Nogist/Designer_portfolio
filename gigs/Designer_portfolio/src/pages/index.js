import { useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import mouse from '../assets/mouse.png';
import Background from '@/container/Background';
import Context from '@/container/Context';
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Header from "@/container/Header";
import UiDesigner from "@/container/UiDesigner";
import Details from "@/container/Details";
import Projects from "@/container/Projects";
import ProjectDetails from "@/container/ProjectDetails";
import Talk from "@/container/Talk";



export default function Home() {

  useEffect (() => {
    AOS.init({duration: 1000});
  },[])

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.5,
    rootMargin: "0px 0px 0px 0px",
  });
  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.46,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref3, inView: visible3 } = useInView({
    threshold: 0.27,
    rootMargin: "0px 0px",
  });
  const { ref: ref4, inView: visible4 } = useInView({
    threshold: 0.1,
    rootMargin: "-400px -250px 0px 0px",
  });
  const { ref: ref5, inView: visible5 } = useInView({
    threshold: 0.6,
    rootMargin: "0px 0px 0px 0px",
  });
  const { ref: ref6, inView: visible6 } = useInView({
    threshold: '',
    rootMargin: "",
  });
  
  return (
    <div className="w-full h-full">
      <div className={`${!visible2 ? 'section0':'section1'} ${visible3 && 'section2'} ${visible4 && 'section3'} ${visible5 && 'section2'}`}></div>
      <Navbar />
      <Header />
       <div ref={ref2} className={`h-[150vh] text-black flex flex-col justify-center ${visible2 ? 'white':'black'} `}>
        <UiDesigner />
      </div>
      <div ref={ref3} className='relative text-white text-center h-screen flex flex-col justify-center items-center '>
        <Details />
      </div>
      <div className='h-screen '>

      </div>
     <div ref={ref4} className={`h-[150vh] flex flex-col justify-center ${visible4 ? 'white':'black'}`}>
        <Projects />
      </div>
       <div className='w-full h-full'>
        <ProjectDetails />
      </div>
      <div ref={ref5}  className='h-screen flex items-center flex-col justify-center '>
        <Talk />
      </div> 
    </div>
  )
}

