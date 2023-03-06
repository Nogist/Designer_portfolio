import Image from "next/image"
import medicci from '@/assets/Slides.png';


export default function Medicci () {
  return (
    <div className="w-full h-full flex items-center border-[0px] justify-center">
      <Image 
        src={medicci}
        width= 'auto'
        height= 'auto'
        alt= 'projectImage'
        layout="responsive"
      />
  </div>
  )
}