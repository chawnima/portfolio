import express from "../assets/express.svg";
import htmlcssjs from "../assets/htmlcssjs.png";
import reactjs from "../assets/react.svg";
import vitejs from "../assets/vitejs.svg";
import bootstrap from "../assets/bootstrap-5-1.svg";
import tailwindcss from "../assets/tailwindcss.svg";

const TECH_SKILLS = [
    htmlcssjs,
    reactjs,
    vitejs,
    bootstrap,
    tailwindcss,
    express,
  ];


const TechSkills = () => {
  return (
    <section className="w-full max-w-5xl h-fit bg-slate-800/50 hover:bg-slate-800/20 transition-all duration-300 rounded-xl flex flex-col items-center justify-center gap-8 py-12">
    <h1 className="text-primary text-3xl text-start font-bold w-full px-12 border-l-2 border-primary ">
      Tech Skills
    </h1>
    <div className="flex flex-wrap justify-center items-center h-fit gap-12">
      {TECH_SKILLS.map((item, index) => (
        <img src={item} key={index} className="w-24 h-auto" />
      ))}
    </div>
  </section>
  )
}

export default TechSkills