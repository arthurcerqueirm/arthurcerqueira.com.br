'use client'
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

export default function navbar(){

  
  const [nav, setNav] = useState(true)
  console.log(nav)
  const handleNav = () => {
    
    setNav(!nav);
  }
  return(
    <nav className="flex items-center justify-between h-24 max-w-[1024px] mx-auto px-4">
      <div>
        <h1 className="w-full text-3xl font-bold">Arthur Cerqueira</h1>
      </div>
      <div>
        <ul className="md:flex hidden">
          <li><Link href={'/*'} className="p-4">Arthur 1</Link></li>
          <li><Link href={'/*'} className="p-4">Arthur 2</Link></li>
          <li><Link href={'/*'} className="p-4">Arthur 3</Link></li>
        </ul>
      </div>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <FiMenu size={20}/>}
      </div>
      <div className={!nav ? "fixed left-0 top-0 border-r w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%] top-0 border-r w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"}>
        <h1 className="w-full text-3xl font-bold">Arthur Cerqueira</h1>
        <ul className="p-4 uppercase ">
          <li className="p-4 border-b border-gray-600"><Link href={'/*'} >Arthur 1</Link></li>
          <li className="p-4 border-b border-gray-600"><Link href={'/*'} >Arthur 2</Link></li>
          <li className="p-4 border-b border-gray-600"><Link href={'/*'} >Arthur 3</Link></li>
        </ul>
      </div>
    </nav>
  )
}