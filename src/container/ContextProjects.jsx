import { useState } from "react";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import pictureModal from "@/pages/PictureModal";
import Link from "next/link";
import TutorBoost from "@/pages/TutorBoost";


export default function ContextProjects (props)
  {
  return (
    <>
      <div  className=" w-[90%] flex justify-center items-center mb-[100px] context__projects">
        <div className=" w-[555px] flex flex-col  ">
          <p className="w-[full] height-[416.25px]">
            <Image 
              src={props.picture}
              width='auto'
              height= 'auto'
              alt='Ui design'
              style = {{ objectFit: 'cover' }}
            />
          </p>
          <button className="button__overlay">{props.head}</button>
          <button onClick={props.onHeadClick} className="mb-[32px] text-black"> {props.head} </button>
          
          <div className="flex flex-col designs__content">
            <span className={`designs__content__main`}>
              {props.topic && <p>{props.topic}</p>}
              {props.text && <h6>{props.text}</h6>}
            </span>
            <span className={`designs__content__main`} >
              {props.topic && <p>{props.topic2}</p>}
              {props.text2 && <h6>{props.text2}</h6>}
            </span>
            <span className={`designs__content__main`}>
              {props.topic3 && <p>{props.topic3}</p>}
              {props.text3 && <h6>{props.text3}</h6>}
            </span>
            {props.linkaddress && <Link href={props.linkaddress}>
              <button className="mt-[16px]">view project</button>
            </Link>}
          </div>
        </div>
        <div className="mr-[30px] w-[555px] flex flex-col ">
          <p className="w-[full] height-[416.25px]">
            <Image 
              src={props.picture1}
              width='auto'
              height= 'auto'
              alt='Ux design'
              style = {{ objectFit: 'cover' }}
            />
          </p>
          <button className="button__overlay">{props.head}</button>
          <button onClick={props.onHeadClicks} className="mb-[32px] text-black"> {props.head2} </button>
          <div className="flex flex-col designs__content">
          <span className={`designs__content__main`}>
              {props.topic && <p>{props.topic}</p>}
              {props.text && <h6>{props.text}</h6>}
            </span>
            <span className={`designs__content__main`} >
              {props.topic && <p>{props.topic2}</p>}
              {props.text2 && <h6>{props.text2}</h6>}
            </span>
            <span className={`designs__content__main`}>
              {props.topic3 && <p>{props.topic3}</p>}
              {props.text3 && <h6>{props.text3}</h6>}
            </span>
            {props.linkaddress1 && <Link href={props.linkaddress1}>
              <button className="mt-[16px]">view project</button>
            </Link>}
          </div>
        </div>
      </div>
    </>
  )
} 