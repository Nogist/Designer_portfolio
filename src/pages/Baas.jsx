import Image from "next/image"
import baas from '@/assets/BaaS.png';


export default function Baas () {
  return (
    <div className="w-full h-full flex items-center border-[0px] justify-center">
      <Image 
        src={baas}
        width= 'auto'
        height= 'auto'
        alt= 'projectImage'
        layout="responsive"
      />
  </div>
  )
}