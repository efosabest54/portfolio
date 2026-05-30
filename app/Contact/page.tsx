"use client"
import Image from "next/image";
import React from "react";

const ContactPage = () => {
 
  const email = "bestefosa5475@gmail.com";
  
  const whatsappNumber = "2349032563456"; // Without the +
  
  
  const xHandle = "@crucialmax";

  return (
  <div className="pb-10 bg-gray-600 pt-15 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-left mb-10">
          <h1 className="text-6xl font-bold font-sans text-white mb-2">Connect with me</h1>
          <p className="text-2xl">I'm open to opportunities and collaboration. <span className="text-amber-500">Let's do it.. </span></p>
          
        </div>

         <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">
              📧
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <a 
                href="mailto:${email}"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {email}
              </a>
            </div>
          </div>


           <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">
              💬
            </div>
            <div>
              <p className="text-sm text-gray-500">WhatsApp</p>
              <a 
                href="https://wa.link/3xh37a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                Message me on WhatsApp
              </a>
            </div>
          </div>

           <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-2xl">
              𝕏
            </div>
            <div>
              <p className="text-sm text-gray-500">X (Twitter)</p>
              <a 
                href="https://x.com/cruc5475?s=21"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {xHandle}
              </a>
            </div>
          </div>
        

        
        </div>
        

    </div>
  </div>
  )
};

export default ContactPage;
