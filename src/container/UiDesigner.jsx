import { useEffect,  } from "react";
import { useInView } from 'react-intersection-observer';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function UiDesigner () {

  const { ref: ref1, inView: visible1 } = useInView({
    threshold: 0.8,
    rootMargin: "100px 0px 0px -280px",
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