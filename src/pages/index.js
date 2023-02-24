import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import mouse from '../assets/mouse.png';
import Background from '@/components/container/Background';



export default function Home() {
  return (
    <div>
      <div className='h-[100vh]'>
        <div className='w-full h-screen flex flex-col justify-between pb-[64px] pt-[149px]  bg-[red]  '>
          <h1 className='pl-[150px]'>USER</h1>
          <h1 className='text-center'>CENTERED</h1>
          <h1 className='text-right pr-[150px]'>DESIGN</h1>
        </div>
        <div className='w-[117px] h-[118px] absolute bottom-16 ml-[150px]'> 
          <p className='h-full top-[-20px] flex justify-center items-center rounded-full border-solid border-2 border-black '>
            <div>
              <Image 
                src={mouse}
                alt="scroll down"
                style={{ objectFit: "cover" }}
              />
            </div>
          </p>
        </div>
        <div className='bg-[blue] h-screen flex flex-col justify-center '>
          <div>
            <h1 className='pl-[150px]'>UI</h1>
            <h1 className='text-center'>Designer</h1>
          </div>
        </div>
        <div className='text-white text-center h-screen flex flex-col justify-center items-center '>
          <Background />
          <div className='w-full bg-[gold] px-[150px]'>
            <h4>Hello there! I’m Rosemary, a UX designer with a background in human - computer interaction. I have a keen eye for design and a knack for turning even the most mundane products into works of art</h4>
            <h4> I'm not just a UI/UX designer, I'm a product problem solver. I don't just design for the sake of design, I design to solve problems and create solutions that will make your life easier.</h4>
            <h6>Rosemary Nwosu-Ihueze</h6>
          </div>
          <div className='w-[117px] h-[118px] absolute bottom-16 ml-[150px]'> 
          <p className='h-full top-[-20px] flex justify-center items-center rounded-full border-solid border-2 border-black '>
            <div>
              <Image 
                src={mouse}
                alt="scroll down"
                style={{ objectFit: "cover" }}
              />
            </div>
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}