import Context from './Context';
import { BsBehance, BsLinkedin } from 'react-icons/bs';
import { FiDribbble } from 'react-icons/fi';
import Link from 'next/link';

export default function ProjectDetails () {
  return (
    <>
      <div className='w-full flex justify-between px-[10.42%] project__details'>
        <div className='project__details__context'>
          <Context
            text='ux design' first= 'chowai' 
            second= 'tutorboost' third='medicci'
            fourth='nftloan' fifth= 'jazzhut' 
            linkfirst= '/*'
            linksecond= '/TutorBoost'
            linkthird= '/Medicci'
            linkfourth= '/NftLoan'
            linkfifth= '/*'
          />
        </div>
        <div className=' project__view'> 
        
          <Link data-aos="fade-right" className='project__view__all '
            href='/AllProjects'>
            <h1> VIEW  </h1>
            <h1 >ALL</h1>
          </Link>
        </div>
      </div>
      <div className='project__details project__detain flex items-end justify-between px-[10.42%] pt-[64px]'>
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
          linkfirst= '/*'
          linksecond= '/*'
          linkthird= '/*'
          linkfourth= '/Baas'
          linkfifth= '/AwakenedWoman'
        />
      </div>
    </>
  )
}