import { useEffect,  } from "react";
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function UiDesigner () {

  useEffect (() => {
    AOS.init({duration: 1000});
  },[])

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.85,
    rootMargin: "250px 0px 0px -280px",
  });

  return (
    <div  ref={ref1}>
      {!visible1 ? 
        (<h1  className=' pl-[10.42%] mb-[48px] '>Ui</h1>) : 
        (<h1  className={`pl-[10.42%] mb-[48px] tracking-in-expand`}>Ux</h1>)
      }
      <h1 className='text-center'>Designer</h1>
    </div>
  )
}