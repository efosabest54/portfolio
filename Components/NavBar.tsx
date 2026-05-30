import { NavLinks } from "@/utils/constants";
import Link from "next/link";
import React from 'react'

const NavBar = () => {
  return (
     <div className="flex fixed justify-between pt-1.5 bg-transparent absolute z-50 gap- pb-30">
      <Link href={"/"} className="hidden  md:flex ml-5  text-pink-500 bg-black rounded-4xl p-1.5">Efex</Link>
      <div className="flex px-5 items-center gap-4 md:gap-8 mr-5  border rounded-4xl p-1.5">
        {NavLinks.map((item, index) => (
          <Link className="hover:bg-gray-400 hover:rounded-xl  transition-all duration-500" key={index} href={item.path}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavBar