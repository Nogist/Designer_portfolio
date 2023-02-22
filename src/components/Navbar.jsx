import Image from "next/image";
import Logo from '../assets/Vector.png';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-[15px] px-[150px] bg-[#66000000]" id='blo'>
      <div>
        <Image 
          src={Logo} alt="logo"
          width={102.87}
          height={69.41}
         />
      </div>
      <div>
        <p className="text-white">Doc</p>
      </div>
    </nav>
  )
}