

import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Capsule Timer App",
    description: "A minimalist timer app that tracks focused practice sessions using a capsule metaphor.",
    image: "/images/projects/capsule-timer.jpg",
  },
  {
    id: 2,
    title: "MayFit Challenge",
    description: "An iPhone app that visualizes friends’ weekly step and calorie data in SwiftUI.",
    image: "/images/projects/mayfit.jpg",
  },
  {
    id: 3,
    title: "Book Tracker Web App",
    description: "A React-based reading tracker for logging books, highlights, and personal notes.",
    image: "/images/projects/book-tracker.jpg",
  },
  {
    id: 4,
    title: "Robotics Maze Solver",
    description: "A competition robot that navigates mazes and defuses mock bombs autonomously.",
    image: "/images/projects/robotics.jpg",
  },
  {
    id: 5,
    title: "Zebrafish Sensor Design",
    description: "A sensor system that detects and analyzes vibration frequencies for zebrafish cultivation.",
    image: "/images/projects/zebrafish.jpg",
  },
  {
    id: 6,
    title: "Down Syndrome Yoga Class Support",
    description: "Technical support setup and automation for inclusive yoga sessions.",
    image: "/images/projects/yoga.jpg",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="w-full px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
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
        ))}
      </div>
    </div>
  );
}