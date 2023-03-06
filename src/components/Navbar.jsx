import Image from "next/image";
import styles from '@/styles/Home.module.css';
import Logo from '@/assets/Vector.png';
import Link from "next/link";


export default function Navbar() {
  return (
    <nav className={`absolute  top-0 left- 0 w-full blo`}>
      <div className={`flex justify-between px-[10.42%] items-center py-4 .big-text`}>
        <Link className="nav-logo" href='/'>
          <Image 
            src={Logo} 
            alt="logo"
            style={{ objectFit: "cover" }}
            width= 'auto'
            height= 'auto'
          />
        </Link>
        <h1 className={`text-[30px] font-[700] text-black leading-10 big-text`}>Docs</h1>
      </div>
    </nav>
  )
}