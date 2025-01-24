import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import express from "../assets/express.svg";
import htmlcssjs from "../assets/htmlcssjs.png";
import reactjs from "../assets/react.svg";
import vitejs from "../assets/vitejs.svg";
import bootstrap from "../assets/bootstrap-5-1.svg";
import tailwindcss from "../assets/tailwindcss.svg";

import logoTerbangin from "../assets/logoterbangin.png";
import logoLapisMalang from "../assets/logolapismalang.png";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const TEXT = {
    firstText: "Hello, I'm ",
    secondText: "Mohamad Ferdy Alviansyah.",
  };

  const FEATURED = [
    { name: "Terbangin", logo: logoTerbangin },
    { name: "Lapis Malang", logo: logoLapisMalang },
  ];

  const TECH_SKILLS = [htmlcssjs, reactjs, vitejs, bootstrap, tailwindcss, express];

  const [firstSpan, setFirstSpan] = useState("");
  const [secondSpan, setSecondSpan] = useState("");
  const [secondSpanRender, setSecondSpanRender] = useState(false);

  useEffect(() => {
    const firstText = TEXT.firstText.split("");
    const secondText = TEXT.secondText.split("");
    let text = "";
    setTimeout(() => {
      if (!secondSpanRender) {
        firstText.map((letter, index) => {
          setTimeout(
            () => {
              text += letter;
              setFirstSpan(text);
              if (index == firstText.length - 1) {
                setSecondSpanRender(true);
                text = "";
              }
            },
            index > 4 ? 70 * index + 1000 : 70 * index
          );
        });
      } else
        secondText.map((letter, index) => {
          setTimeout(() => {
            text += letter;
            setSecondSpan(text);
            if (index == secondText.length - 1) {
              text = "";
            }
          }, 70 * index);
        });
    }, 500);
  }, [secondSpanRender]);

  return (
    <div className="flex flex-col h-fit items-center justify-start  bg-gradient-to-tr from-teal-950 via-slate-900 to-slate-800">
      {/* header */}
      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center my-16">
        <div className="flex w-full max-w-3xl h-96 items-start justify-center flex-col p-8 gap-8">
          <h1 className="text-primary text-4xl font-bold w-4/6">
            <span>{firstSpan}</span>
            <span className="text-white">{secondSpan}</span>
            <span className="bg-white w-2 h-8 inline-block animate-pulse"></span>
          </h1>
          <p className="text-secondary">
            A Full-Stack Web Developer with a strong focus on front-end
            development. Currently pursuing a degree at{" "}
            <span className="text-white/80">Universitas Negeri Surabaya. </span>
            Passionate about building impactful and engaging digital solutions
            that drive innovation and enhance user experiences.
          </p>
        </div>

        <div className="hover:bg-slate-800/20 transition-all duration-300 rounded-xl flex flex-col justify-center p-4">
          <h2 className="text-primary text-2xl font-bold mb-4 text-center">
            Featured Project
          </h2>
          <div className="flex gap-2">
            {FEATURED.map((item) => (
              <a
                className="flex flex-col items-center w-32 h-auto p-3 hover:bg-primary/10 rounded-lg transition-all duration-300"
                href=""
                key={item.name}
              >
                <img src={item.logo} className="w-auto h-28 object-contain" />
                <p className="text-white/80 text-lg font-bold text-center">
                  {item.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* tech skills */}
      <div className="w-full max-w-5xl h-fit bg-slate-800/50 hover:bg-slate-800/20 transition-all duration-300 rounded-xl flex flex-col items-center justify-center gap-8 py-12">
        <h1 className="text-primary text-3xl font-bold">Tech Skills</h1>
        <div className="flex flex-wrap justify-center items-center h-fit gap-12">
          {TECH_SKILLS.map((item, index) => (
            <img src={item} key={index} className="w-24 h-auto" />
          ))}
        </div>
      </div>
    </div>
  );
}
