import Image from "next/image";
import Hero from "./components/Hero";
import ProjectsGrid from "./components/ProjectsGrid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans dark:bg-black">
      <Hero />
      <main className="flex min-h-screen w-full max-w-3xl lg:max-w-5xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <ProjectsGrid />
      </main>
    </div>
  );
}
