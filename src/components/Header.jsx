import { useState, useEffect } from "react";

import logoTerbangin from "../assets/logoterbangin.png";
import logoLapisMalang from "../assets/logolapismalang.png";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const TEXT = {
  firstText: "Hello, I'm ",
  secondText: "Mohamad Ferdy Alviansyah.",
};
const FEATURED = [
  { name: "Terbangin", logo: logoTerbangin },
  { name: "Lapis Malang", logo: logoLapisMalang },
];

const Header = () => {
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
    <header className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center my-16">
      <div className="flex flex-row lg:flex-col gap-4 h-0 w-full items-center justify-start lg:justify-center px-8 lg:h-72 lg:w-0 max-w-3xl">
        <a
          className="bg-transparent"
          href="https://github.com/chawnima"
          target="_blank"
        >
          <GitHubIcon />
        </a>
        <a
          className="bg-transparent"
          href="https://www.linkedin.com/in/mohamad-ferdy-alviansyah"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
      </div>

      <div className="flex w-full max-w-3xl h-fit min-h-96 items-start justify-center flex-col p-8 gap-8">
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
              href={`#${item.name.replace(" ", "-").toLowerCase()}`}
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
    </header>
  );
};

export default Header;
