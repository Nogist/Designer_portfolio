import Image from "next/image"
import Tutor from '@/assets/TutorBoost.png'

export default function TutorBoost () {
  return (
    <div className="w-full h-full flex items-center border-[0px] justify-center">
        <Image 
          src={Tutor}
          width= 'auto'
          height= 'auto'
          alt= 'projectImage'
          layout="responsive"
        />
      </div>
  )
}