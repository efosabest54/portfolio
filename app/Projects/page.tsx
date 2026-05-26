import Image from 'next/image'
import React from 'react'

const Projectpage = () => {
  return (
    <div  className="min-h-screen bg-gray-600 border-b-2 border-black pt-15 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="text-6xl font-bold text-white font-mono text-center pb-5 mb-2">My Portfolio</p>
         
         <div className="grid lg:grid-cols-2  gap-6  ">
           
                <div className='bg-black text-white border-4 border-amber-500 p-6 rounded'>
                   <h1 className='text-xl font-bold'>Simple Static Website</h1>
                <p>Cloned a static wordpress page</p>
                <a className='text-pink-500' href='https://efosabest54.github.io/clone-web/'>View Project~~</a>
                </div>
                
           

            
                
               <div className='bg-black border-4 text-white border-amber-500 p-6 mb- rounded '>
                   <h1 className='text-xl font-bold'>React Hook Practical</h1>
                <p>Making use of useState and useEffect</p>
                <a className='text-pink-500' href='https://next-assignment-6fva.vercel.app'>View Project~~</a>
               </div>
                
           </div>

         </div>
         </div>

      
    
  )
}

export default Projectpage