import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import mouse from '../assets/mouse.png';



export default function Home() {
  return (
    <div>
      <div className='mt-[85px] h-[100vh]'>
        <div className='w-full h-screen flex flex-col  bg-[red] text-[160px] font-normal leading-[195px] big-text py-0 '>
          <p className='pl-[150px]'>USER</p>
          <p className='text-center'>CENTERED</p>
          <p className='text-right pr-[150px]'>DESIGN</p>
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
  )
}