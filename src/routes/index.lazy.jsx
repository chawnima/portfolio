import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-start  bg-gradient-to-tr from-teal-950 via-slate-900 to-slate-800">
      <div className="flex w-full max-w-5xl flex-col lg:flex-row items-center justify-center">
        <div className="flex w-full max-w-3xl h-96 my-16 items-start justify-center flex-col p-8 gap-8">
          <h1 className="text-primary text-4xl font-bold w-4/6">
            Hello, I&#39;m{" "}
            <span className="text-white">Mohamad Ferdy Alviansyah.</span>
          </h1>
          <p className="text-secondary">
            A Full-Stack Web Developer with a strong focus on front-end
            development. Currently pursuing a degree at{" "}
            <span className="text-white/80">Universitas Negeri Surabaya. </span>
            Passionate about building impactful and engaging digital solutions
            that drive innovation and enhance user experiences.
          </p>
        </div>
        <div className="hover:bg-slate-800/20 transition-all duration-300 rounded-xl flex justify-center p-4">
          <h2 className="text-primary text-2xl font-bold">Featured Project</h2>
          <div className="flex">

          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl h-96 bg-slate-800/50 hover:bg-slate-800/20 transition-all duration-300 rounded-xl flex justify-center p-4">
        <h1 className="text-primary text-2xl font-bold">Tech Skills</h1>
      </div>
    </div>
  );
}
