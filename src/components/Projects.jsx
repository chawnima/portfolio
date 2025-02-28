import lapisMalangImage from "../assets/lapismalangwebsite.webp";
import terbanginImage from "../assets/terbanginwebsite.webp";
import typeraceImage from "../assets/typeracewebsite.webp";
const Projects = () => {
  const PROJECT_LIST = [
    {
      name: "Terbangin",
      image: terbanginImage,
      techStack: [],
      link: "https://terbangin-rheno27s-projects.vercel.app/",
      description:
        "A flight booking website that allows users to book flights and view flight schedules. This project was built in teams using Express, Vite, React, Tailwind CSS (some features still using Bootstrap), and some other libraries. My role in this project is the front-end developer. I built the homepage and helping others to build the rest of the pages (mostly on search query page and transaction page).",
    },
    {
      name: "Typerace",
      image:typeraceImage,
      techStack: [],
      link:"https://typerace-tsx.vercel.app/",
      description:"A typing game that allows users to practice and improve their typing skills with an statistic output. This project was built using Express, Vite, and Tailwind CSS.",
    },
    {
      name: "Lapis Malang",
      image: lapisMalangImage,
      techStack: [],
      link: "https://chawnima.github.io/lapismalang-website/home.html",
      description: "A website for a local food business. This project was build using only HTML, CSS, and JavaScript. I built this project to practice my HTML and CSS styling skills.",
    },
  ];

  return (
    <section className="w-full max-w-5xl h-fit flex flex-col items-center justify-center gap-8 py-12">
      <h1 className="text-primary text-3xl text-start font-bold w-full px-12 border-l-2 border-primary">
        Projects
      </h1>
      {PROJECT_LIST.map((item) => (
        <article
          className="flex gap-8 flex-col md:flex-row"
          key={item.name}
          id={item.name.replace(" ", "-").toLocaleLowerCase()}
        >
          <img
            className="flex-initial w-full md:w-1/2 h-auto rounded-xl"
            src={item.image}
          />
          <div className="flex-initial w-full flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-3">
              <header className="font-semibold text-xl">{item.name}</header>
              <p className="text-secondary">{item.description}</p>
            </div>
            <a className="w-fit px-2 py-1 rounded-lg flex self-end bg-primary hover:bg-primary/80 font-bold text-teal-950" href={item.link} target="_blank">Website Link</a>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
