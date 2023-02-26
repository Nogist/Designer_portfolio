import logo from '../assets/logobg.png';
import Image from 'next/image'

export default function Background() {
  return (
    <div className="h-screen w-full absolute top-o left- o flex justify-center items-center ">
        <div className='w-[1005px] height-[678.13] '>
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