import { createLazyFileRoute } from "@tanstack/react-router";
import Header from "../components/Header";
import TechSkills from "../components/TechSkills";
import Projects from "../components/Projects";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="flex flex-col items-center justify-start gap-8 bg-gradient-to-tr from-teal-950 via-slate-900 to-slate-800 px-4 md:px-2 !scroll-smooth">
      <Header />

      <TechSkills />

      <Projects />

      <footer className="text-slate-400 text-sm py-2">
        Made with <span className="text-red-500">{"\u2764"}</span> using React
      </footer>
    </main>
  );
}
