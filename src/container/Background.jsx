import logo from '../assets/logobg.png';
import Image from 'next/image'

export default function Background() {
  return (
    <div className="h-screen w-full absolute top-o left- o flex justify-center items-center px-[15.14%] py-[7.7083%] ">
        <div className='w-full'>
          <Image
            src={logo}
            alt='backgroundpicture'
            style={{ objectFit: "cover" }}
            width= 'auto'
            height= 'auto'
          />
        </div>
    </div>
  )
}