import { useEffect, useRef } from "react";
import Image from "next/image";
import image2 from '@/assets/mock2.jpg';
import { AiOutlineClose } from 'react-icons/ai'


export default function PictureModal ({ handleClick, image, closeModal }) {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  return (
    <div onClick={closeModal} className="w-[100%]  h-full z-[999] bg-[#00000080] flex items-center justify-center">
      <div className="w-full flex justify-center items-start ">
        <div>
          <Image 
            src={image}
            width= 'auto'
            height= 'auto'
            alt= 'projectImage'
            style={{ objectFit: 'cover'}}
          />
        </div>
        <div className="text-white text-[40px] relative left-[150px] bottom-20">
          <AiOutlineClose onClick={handleClick} />
        </div>
      </div>
    </div>
  )
}