import { createLazyFileRoute } from "@tanstack/react-router";

import logoTerbangin from "../assets/logoterbangin.png";
import logoLapisMalang from "../assets/logolapismalang.png";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const TEXT = {
    firstText: "Hello, I'm ",
    secondText: "Mohamad Ferdy Alviansyah.",
  };
  const [firstSpan, setFirstSpan] = useState("");
  const [secondSpan, setSecondSpan] = useState("");
  const [secondSpanRender, setSecondSpanRender] = useState(false);

  useEffect(() => {
    const firstText = TEXT.firstText.split("");
    const secondText = TEXT.secondText.split("");
    let text = "";
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
  }, [secondSpanRender]);
  return (
    <div className="flex flex-col w-screen h-fit items-center justify-start  bg-gradient-to-tr from-teal-950 via-slate-900 to-slate-800">
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
            <a
              className="flex flex-col items-center w-32 h-auto p-3 hover:bg-primary/20 rounded-lg transition-all duration-300"
              href=""
            >
              <img src={logoTerbangin} className="w-auto h-28 object-contain" />
              <p className="text-white/80 text-lg font-bold text-center">
                Terbangin
              </p>
            </a>
            <a
              className="flex flex-col items-center w-32 h-fit p-3 hover:bg-primary/20 rounded-lg transition-all duration-300"
              href=""
            >
              <img
                src={logoLapisMalang}
                className="w-auto h-28 object-contain"
              />
              <p className="text-white/80 text-lg font-bold text-center">
                Lapis Malang
              </p>
            </a>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl h-96 bg-slate-800/50 hover:bg-slate-800/20 transition-all duration-300 rounded-xl flex justify-center p-4">
        <h1 className="text-primary text-2xl font-bold">Tech Skills</h1>
      </div>
    </div>
  );
}
