"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const AboutPage = () => {
    const Experience = [
    {title:"04+", desc:"Months of Experience"},
    {title:"05+", desc:"Assignments Completed"},
    {title:"02+", desc:"Projects Completed"},
    ]
    const router = useRouter();
    function knowMore(){
       router.push("/Contact")
    }
  
  return (
    <div className="min-h-screen bg-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl ">
            Crafting digital experiences with passion and precision
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:justify-end">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-4xl overflow-hidden shadow-2xl">
              <Image
              src={"/profile.jpeg"}
                alt="profile picture"
                fill
                className="object-cover"
                priority
                unoptimized={true}
                />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl text-center font-semibold">Hi, I'm Efosa</h2>

            <div>
              <p>
                A front-end developer, passionate about crafting clean,
                intuitive and responsive digital experiences. I focus on turning
                ideas into seamless interfaces by understanding user needs,
                coding thoughtful Ui layouts, and ensuring smooth interactions
                across devices.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-4">Interests</h3>
              <div>
                {[
                  "Music",
                  "Travel",
                  "Football",
                  
                ].map((skill) => (
                  <span
                    key={skill}
                    className="grid-cols-2 border mb-5 md:grid-cols-4 lg:grid-cols-5 px-4 py-2 bg-white rounded-full text-sm shadow-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <button onClick={knowMore} className="mt-6 px-8 py-3 bg-black text-white rounded-full animate-bounce hover:bg-gray-800 transition">
                Get In Touch
              </button>
            </div>
          </div>
          </div>
          <div className="text-center  mb-12 mt-7">
             <h1 className="text-3xl mb-3 font-semibold">My Approach</h1>
             <div className="grid md:grid-cols-3 gap-3">
                {[
                  "Understanding Users & Goals", "Responsive Experience", "Clean Ui",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 mb-3 py-2 bg-black text-white rounded-2xl border-2 border-white text-sm shadow-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex text-center justify-center gap-3 py-3">
            {Experience.map((item, index)=>
            <div key={index}>
              <h1 className="font-bold text-2xl text-pink-600">{item.title}</h1>
              <small>{item.desc}</small>

            </div>)}
          </div>
          </div>

          
      </div>
    </div>
  )
}

export default AboutPage