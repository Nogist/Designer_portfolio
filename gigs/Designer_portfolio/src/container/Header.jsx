import Image from "next/image"
import mouse from '@/assets/mouse.png';

export default function Header () {
  return (
    <div className='header__content h-[100vh]'>
      <div className='w-full h-screen flex flex-col justify-between pb-[64px] pt-[149px]'>
        <h1 className='pl-[10.42%]'>USER</h1>
        <h1 className='text-center'>CENTERED</h1>
        <h1 className='text-right pr-[10.42%]'>DESIGN</h1>
      </div>
      <div className='header__scroll w-[117px] h-[118px] absolute bottom-16 ml-[10.42%]'> 
        <div className='h-full top-[-20px]  rounded-full border-solid border-2 border-[#1A1A1A] '>
          <div className=' w-[117px] h-[118px] flex justify-center  items-center'>
            <Image 
              src={mouse}
              alt="scroll down"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}