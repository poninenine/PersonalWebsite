export default function RoboticsMazeSolverPage() {
  return (
    <main className="min-h-screen flex justify-center pt-24 pb-16">
      <div className="max-w-3xl px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          Robotics Maze Solver
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          A robot that navigates mazes and defuses mock bombs autonomously.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Technologies</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Robotics</li>
            <li>Autonomous navigation</li>
            <li>Embedded systems</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Maze navigation</li>
            <li>Mock bomb defusal</li>
            <li>Autonomous operation</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
