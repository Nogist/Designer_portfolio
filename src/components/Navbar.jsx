import Image from "next/image";
import Logo from '../assets/Vector.png';
import styles from '@/styles/Home.module.css';

export default function Navbar() {
  return (
    <nav className=' absolute  top-0 left- 0 w-full '>
      <div className="flex justify-between px-[150px] pt-4 .big-text">
        <div className="nav-logo">
          <Image 
            src={Logo} 
            alt="logo"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="text-3xl font-bold leading-10 big-text">Docs</p>
      </div>
    </nav>
  )
}