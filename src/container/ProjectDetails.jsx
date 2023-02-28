import Context from './Context';
import { BsBehance, BsLinkedin } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import Link from 'next/link';

export default function ProjectDetails () {
  return (
    <>
      <div className='w-full flex justify-between px-[150px]'>
        <div className='w-[556px]'>
        <Context
          text='ux design' first= 'chowai' 
          second= 'tutorboost' third='medicci'
          fourth='nftloan' fifth= 'jazzhut' 
        />
        </div>
        
        <div className='mr-[150px] mt-[75px] mb-[40px]'> 
          <Link data-aos="fade-left" className=' w-[117px] h-[118px] flex flex-col items-center justify-center rounded-full border-solid border-2 border-[#1A1A1A] '
           href='/AllProjects'>
            <p className='text-[#1A1A1A] text-center'> VIEW  </p>
            <p  className='text-[#1A1A1A]'>ALL</p>
          </Link>
        </div>
      </div>
      <div className='flex items-end justify-between px-[150px] pt-[64px]'>
        <div data-aos="fade-right" className='flex items-center'> 
          <FiDribbble className='text-[#E84C88] text-[87.5px] mr-[44.5px]'/>
          <div className='text-white bg-[blue] text-[60px] rounded-full p-[10px]'>
            <BsBehance  />
          </div>
        </div>
        <Context 
          text='ui design' first= 'dashboard' 
          second= 'interior' third='craigslist'
          fourth='baas' fifth= 'the awakened woman' 
        />
      </div>
    </>
  )
}