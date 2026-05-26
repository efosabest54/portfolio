"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from 'react'

const Landing = () => {

  const router = useRouter();
  function moveUser(){
    router.push("/About")
  }
function movePerson(){
  router.push("/Projects")
}

  return (
    <div className="relative min-h-screen overflow-hidden ">
      <Image
        src="/hero.jpg"
        alt="Background fill"
        className="object-cover w-full h-full"
        quality={75}
        priority
        sizes="100vw"
       fill
        unoptimized={true}
      />

      <div className="pt-40 absolute  inset-0 z-10 items-center justify-center text-center  min-h-screen ">
        <p className="font-mono ">I am Efosa,</p>
        <h1 className="text-5xl ">Front-End Developer</h1>
        <p className="font-serif ">
          Fond of creating clean, responsive web applications that performs
          flawlessly, using code
        </p>
        <div >
           <button onClick={moveUser} className=" hover:bg-transparent border-2 bg-black border-black font-serif rounded-xl text-white px-3 p-3 mt-5 ">Know More</button>
        <button onClick={movePerson} className="border hover:bg-pink-500 border-pink-500 font-serif ml-4 rounded-xl px-3 p-3 mt-5 ">View My Work</button>
        </div>
        
      </div>
    </div>
  )
}

export default Landing