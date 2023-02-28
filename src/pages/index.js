import { useEffect, useRef } from "react";
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
    threshold: 0.85,
    rootMargin: "250px 0px 0px -280px",
  });
  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.44,
    rootMargin: '200px 0px 0px 0px',
  });
  const { ref: ref3, inView: visible3 } = useInView({
    threshold: 0.5,
    rootMargin: "300px 0px 0px -200px",
  });
  const { ref: ref4, inView: visible4 } = useInView({
    threshold: 0.1,
    rootMargin: "-250px 0px 0px 0px",
  });
  const { ref: ref5, inView: visible5 } = useInView({
    threshold: '0.5',
    rootMargin: "",
  });
  const { ref: ref6, inView: visible6 } = useInView({
    threshold: '',
    rootMargin: "",
  });
  
  return (
    <div>
      <div className={`${!visible2 ? 'section0':'section section1'} ${!visible3 ? 'section1':'section2'} ${visible4 ? 'section3': 'section0'} ${!visible5 ? 'section0':'section2'}`}></div>
      <Header />
      <div ref={ref2} className={`h-[120vh] text-black flex flex-col justify-center ${visible2 ? 'white':'black'} `}>
        <UiDesigner />
      </div>
      <div ref={ref3} className='text-white text-center h-screen flex flex-col justify-between items-center '>
        <Details />
      </div>
      <div className='h-screen '>

      </div>
      <div ref={ref4} className={`h-[150vh] flex flex-col justify-center ${visible4 ? 'white':'black'}`}>
        <Projects />
      </div>
      <ProjectDetails />
      <div ref={ref5} className='h-screen flex flex-col justify-center items-center'>
        <Talk />
      </div>
    </div>
  )
}

