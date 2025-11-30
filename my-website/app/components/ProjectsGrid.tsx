"use client";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "MayFit Challenge",
    slug: "mayfit-challenge",
    description: "An iPhone app that uploads, retrieves, and visualizes friends' weekly step and calorie data in SwiftUI powered by CloudKit.",
    image: "/images/projects/mayfit.jpg",
  },
  {
    id: 2,
    title: "JournalStudio App",
    slug: "journalstudio-app",
    description: "An app centred around the practice of voice journalling, with the state of the art transcription and summarization.",
    image: "/images/projects/journal-studio.jpg",
  },
  {
    id: 3,
    title: "Noise Gate Guitar Pedal",
    slug: "noise-gate-guitar-pedal",
    description: "A guitar pedal that reduces unwanted noise between notes using an op-amp based design with adjustable threshold and decay time.",
    image: "/images/projects/noise-gate-pedal.jpg",
  },
  {
    id: 4,
    title: "Robotics Maze Solver",
    slug: "robotics-maze-solver",
    description: "A competition robot that navigates mazes and defuses mock bombs autonomously.",
    image: "/images/projects/robot-competition.jpg",
  },
  {
    id: 5,
    title: "AI Personality Text-to-Speech Suite",
    slug: "ai-personality-text-to-speech-suite",
    description: "A PC app in which you pick one of an assortment of entertaining characters, enter a prompt, and hear their response.",
    image: "/images/projects/tts-app.jpg",
  },
];

export default function ProjectsGrid() {

  return (
    <div className="w-full px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link href={`/projects/${project.slug}`} key={project.id}>
            <div
              className="bg-white dark:bg-zinc-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}