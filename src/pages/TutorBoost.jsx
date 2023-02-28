import Image from "next/image";
import image2 from '@/assets/mock2.jpg';


export default function TutorBoost () {
  return (
    <div className="w-full absolute top-0 left-0 bg-[blue]">
      <div className="w-full flex justify-center items-center px-[150px] py-[150px]">
        <Image 
          src={image2}
          width= 'auto'
          height= 'auto'
          alt= 'projectImage'
          style={{ objectFit: 'cover'}}
        />
      </div>
    </div>
  )
}