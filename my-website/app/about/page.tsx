// app/about/page.tsx
import AboutMeBlock from "../components/AboutMeBlock";

export default function AboutPage() {
    return (
      <main className="min-h-screen flex justify-center pt-24">
        <div>
          <AboutMeBlock />
          <p className="mt-8 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed max-w-2xl">
            Thank you for your interest, this website is still under construction but there will be more about me coming soon!
          </p>
          <p className="mt-8 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed max-w-2xl">
            For now, my brief professional bio is: I graduated from Dalhousie University with a degree in Electrical Engineering, worked as Technical Project Manager at The Belzer Group (a digital marketing startup) for two years, and am looking forward to bringing my skills to a team working in the area of solar energy, robotics, and/or embedded systems.
          </p>
        </div>
      </main>
    );
  }