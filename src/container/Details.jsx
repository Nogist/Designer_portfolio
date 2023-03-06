import Background from "./Background"


export default function Details () {
  return (
    <>
      <Background />
      <div  className='w-full relative h-full px-[10.42%] flex flex-col justify-center items-center'>
        <h4>Hello there! I’m Rosemary, a UX designer with a background in human - computer interaction. I have a keen eye for design and a knack for turning even the most mundane products into works of art</h4><br/>
        <h4> I'm not just a UI/UX designer, I'm a product problem solver. I don't just design for the sake of design, I design to solve problems and create solutions that will make your life easier.</h4>
        <h6 className="mt-[24px]">Rosemary Nwosu-Ihueze</h6>
      </div>
      <div className='w-full absolute bottom-0  flex items-center justify-end mr-[10.42%]'>
        <div className=' details__resume mb-[2.78%]'>
          <h1 className='mb-[12px]'> Download </h1>
          <h1>Resume</h1>
        </div>
      </div>
    </>
  )
}