import React from "react";

const SkillsPage = () => {
  const coreSkills = [
    "Frontend Dev",
    "Responsive Web Design",
    "Component-Based Design",
    "Problem Solving",
  ];

  const frontEndTech = [
    "React",
    "Next.js",
    "Typescript",
    "Tailwind CSS",
    "HTML",
  ];

  const tools = ["Vscode", "Git & Git Hub", "Vercel"];

  return (
    <div className="min-h-screen py-14 bg-gray-300 border-b-2 border-black px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-6xl font-bold text-center mb-2">Skills</h1>
        <p className="text-xl max-w-2xl text-center mx-auto mb-5">
          A showcase of my technical expertise
        </p>

        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            <div className="border p-5  rounded-3xl">
              <h2 className="text-4xl font-semibold p-5 ">Core Skills</h2>
              {coreSkills.map((item, index)=><div className="text-pink-600 bg-black rounded-2xl p-3 mb-2" key={index}>{item}</div>)}
            </div>

            <div className="border  rounded-3xl p-5">
              <h2 className="text-4xl p-5 font-semibold">Frontend Tech</h2>
              {frontEndTech.map((item, index)=> <div className="text-pink-600 bg-black rounded-2xl p-3 mb-2" key={index}>{item}</div>)}
            </div>

            <div className="border rounded-3xl p-5">
              <h2 className="text-4xl font-semibold">Tools & Interactions</h2>
              {tools.map((item, index)=><div className="text-pink-600 bg-black rounded-2xl p-3 mb-2" key={index}>{item}</div>)}
            </div>


          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
