import lapisMalangImage from "../assets/lapismalangwebsite.webp";
import terbanginImage from "../assets/terbanginwebsite.webp";
const Projects = () => {
  const PROJECT_LIST = [
    {
      name: "Terbangin",
      image: terbanginImage,
      link: "https://terbangin-rheno27s-projects.vercel.app/",
      description: "",
    },
    {
      name: "Lapis Malang",
      image: lapisMalangImage,
      link: "https://chawnima.github.io/lapismalang-website/home.html",
      description: "",
    },
  ];

  return (
    <section className="w-full max-w-5xl h-fit flex flex-col items-center justify-center gap-8 py-12">
      <h1 className="text-primary text-3xl text-start font-bold w-full px-12 border-l-2 border-primary">
        Projects
      </h1>
      {PROJECT_LIST.map((item) => (
        <article className="flex gap-8 flex-col md:flex-row" key={item.name}>
          <img className="flex-initial w-full md:w-1/2 h-auto rounded-xl" src={item.image} />
          <div className="flex-initial">
            <header className="font-semibold text-xl">{item.name}</header>
            <p className="flex"></p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Projects;
