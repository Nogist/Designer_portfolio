import Background from "./Background"


export default function Details () {
  return (
    <>
      <Background />
      <div className='h-full flex items-end'>
        <div  className='px-[10.42%]'>
          <h4>Hello there! I’m Rosemary, a UX designer with a background in human - computer interaction. I have a keen eye for design and a knack for turning even the most mundane products into works of art</h4><br/>
          <h4> I'm not just a UI/UX designer, I'm a product problem solver. I don't just design for the sake of design, I design to solve problems and create solutions that will make your life easier.</h4>
          <h6 className="mt-[24px]">Rosemary Nwosu-Ihueze</h6>
        </div>
      </div>
      <div className='h-full w-full flex items-end justify-end'>
        <div data-aos="fade-left" className=' float-right mr-[10.42%] mb-[40px]'> 
          <div className=' w-[117px] h-[118px] flex flex-col justify-center  items-center rounded-full border-solid border-2 border-white '>
            <p> Download </p>
            <p>Resume</p>
          </div>
        </div>
      </div>
    </>
  )
}