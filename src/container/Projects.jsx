import { useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export  default function Projects () {

  useEffect (() => {
    AOS.init({duration: 1000});
  },[])

  return (
    <div>
      <h1 className='pl-[150px] mb-[48px]'>selected</h1>
      <h1 className='text-center'>projects</h1>
    </div>
  )
}