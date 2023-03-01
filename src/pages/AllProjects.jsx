import { useState } from 'react';
import mouse from '@/assets/mouse.png';
import ContextProjects from '@/container/ContextProjects';
import { useInView } from 'react-intersection-observer';
import Talk from '@/container/Talk';
import Image from 'next/image';
import image1 from '@/assets/mock.png'
import image2 from '@/assets/mock2.jpg';
import image3 from '@/assets/mock3.jpg';
import image4 from '@/assets/mock4.jpg';
import image5 from '@/assets/mock5.jpg';
import image6 from '@//assets/mock6.jpg';

export default function AllProjects () {

  const me = 'I am a computer programmer and a junior majoring in computer science and a self-taught developer. I am knowledgeable in Figma, Javascript, Python , Solidity and experimental knowledge of Rust. ';
  

  const { ref: ref2, inView: visible2 } = useInView({
    threshold: 0.4,
    rootMargin: '0px 0px 0px 0px',
  });
  const { ref: ref3, inView: visible3 } = useInView({
    threshold: 0.5,
    rootMargin: "300px 0px 0px -200px",
  });
  const { ref: ref4, inView: visible4 } = useInView({
    threshold: 0.4,
    rootMargin: "0px 0px 0px 0px",
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
    <>
      <div className={`${!visible2 ? 'section0':'section3'} ${!visible3 ? '':'section0'} ${visible4 ? 'section1 section': 'section0'} ${!visible5 ? 'section0':'section2'}`}></div>
      <div className="h-screen flex flex-col items-center justify-center">
        <p className="text-black w-7/12 ">
          I handle various projects across various fields, I have the ability to take a client's idea and turn it into a design 
          masterpiece that will make their competitors green with envy. I have a black belt in brainstorming and can come up with 
          more ideas in a minute than most people can in a day (No jokes).
        </p>
      </div>
      <div className='w-[117px] h-[118px] absolute bottom-16 ml-[150px]'> 
        <div className='h-full top-[-20px]  rounded-full border-solid border-2 border-black '>
          <div className=' w-[117px] h-[118px] flex justify-center  items-center'>
            <Image 
              src={mouse}
              alt="scroll down"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div ref={ref2} className='h-[150vh] text-white flex flex-col justify-center'>
        <h1 className='pl-[10.42%]'>ux</h1>
        <h1 className='text-center'>Design</h1>
      </div>
      <div ref={ref3} className="flex flex-col py-[150px]  items-center justify-center ">
        <ContextProjects
          picture={image1}
          picture1={image2}
          head= 'chowai'
          head2='tutorboost'
          topic='problem'
          topic2= 'solution'
          topic3= 'impact'
          headEnd= 'view project'
          text = {me}
          text2 = {me}
          text3 = {me}
        />
        <ContextProjects 
          picture={image3}
          picture1={image4}
          head= 'medicci'
          head2= 'ntfloan'
          topic='problem'
          topic2= 'solution'
          topic3= 'impact'
          headEnd= 'view project'
          text = {me}
          text2 = {me}
          text3 = {me}
        /> 
      </div>
      <div ref={ref4} className='h-[150vh] text-white flex flex-col justify-center'>
        <h1 className='pl-[10.42%]'>ui</h1>
        <h1 className='text-center'>Design</h1>
      </div>
      <div className="flex flex-col py-[150px]  items-center justify-center ">
        <ContextProjects 
          picture={image5}
          picture1={image5}
          head= 'ntfloan'
          head2= 'muse'
          headEnd= 'view project'
          text3 = {me}
        />
        <ContextProjects 
          picture={image6}
          picture1={image5}
          head= 'baas'
          head2= 'the awakened woman'
          headEnd= 'view project'
          text3 = {me}
        />
      </div>
      <div ref={ref5} className='h-screen flex flex-col justify-center items-center'>
        <Talk />
      </div>
    </>
  )
}