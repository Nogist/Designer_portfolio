import Image from "next/image"
import woman from '@/assets/woman.png';


export default function AwakenedWoman () {
  return (
    <div className="w-full h-full flex items-center border-[0px] justify-center">
      <Image 
        src={woman}
        width= 'auto'
        height= 'auto'
        alt= 'projectImage'
        layout="responsive"
      />
  </div>
  )
}