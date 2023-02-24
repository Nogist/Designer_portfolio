import logo from '../../assets/logobg.png'
import Image from 'next/image'

export default function Background() {
  return (
    <div className="h-screen w-full absolute top-o left- o bg-black flex justify-center items-center z-[-1]">
        <div className='w-[1005px] height-[678.13] '>
          <Image
            src={logo}
            style={{ objectFit: "cover" }}
          />
        </div>
    </div>
  )
}