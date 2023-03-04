import logo from '../assets/logobg.png';
import Image from 'next/image'

export default function Background() {
  return (
    <div className="h-screen w-full absolute top-o left- o flex justify-center items-center ">
        <div className='px-[15.104%] py-[7.708%] '>
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