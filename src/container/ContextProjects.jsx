
import Image from "next/image";
import styles from '@/styles/Home.module.css'

export default function ContextProjects ({picture, picture1, head, head2, topic, topic2, topic3, text, text2, text3, headEnd }) {
  return (
    <>
      <div  className=" w-[full] flex justify-center items-center mb-[100px] context__projects">
        <div className="mr-[30px] w-[555px] flex flex-col  ">
          <p className="w-[full] height-[416.25px]">
            <Image 
              src={picture}
              width='auto'
              height= 'auto'
              style = {{ objectFit: 'cover' }}
            />
          </p>
          <button className="button__overlay">{head}</button>
          <button className="mb-[32px] text-black"> {head} </button>
          <div className="flex flex-col designs__content">
            <span className={`designs__content__main`}>
            {topic && <p>{topic}</p>}
            {text && <h6>{text}</h6>}
            </span>
            <span className={`designs__content__main`} >
              {topic && <p>{topic2}</p>}
              {text2 && <h6>{text2}</h6>}
            </span>
            <span className={`designs__content__main`}>
              {topic3 && <p>{topic3}</p>}
              {text3 && <h6>{text3}</h6>}
            </span>
            <button className="mt-[16px]">{headEnd}</button>
          </div>
        </div>
        <div className="mr-[30px] w-[555px] flex flex-col ">
          <p className="w-[full] height-[416.25px]">
            <Image 
              src={picture1}
              width='auto'
              height= 'auto'
              style = {{ objectFit: 'cover' }}
            />
          </p>
          <button className="button__overlay">{head}</button>
          <button className="mb-[32px] text-black"> {head2} </button>
          <div className="flex flex-col designs__content">
            <span className={`designs__content__main`}>
              {topic && <p>{topic}</p>}
              {text && <h6>{text}</h6>}
            </span>
            <span className={`designs__content__main`}>
              {topic2 && <p>{topic2}</p>}
              {text2 && <h6>{text2}</h6>}
            </span>
            <span className={`designs__content__main`}>
              {text3 && <p>{topic3}</p>}
              {text3 && <h6>{text3}</h6>}
            </span>
            <button className="mt-[16px]">{headEnd}</button>
          </div>
        </div>
      </div>
    </>
  )
} 