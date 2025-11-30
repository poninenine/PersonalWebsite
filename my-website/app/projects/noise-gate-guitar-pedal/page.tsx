export default function NoiseGateGuitarPedalPage() {
  return (
    <main className="min-h-screen flex justify-center pt-24 pb-16">
      <div className="max-w-3xl px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          Noise Gate Guitar Pedal
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          A guitar pedal that reduces unwanted noise between notes using an op-amp based design with adjustable threshold and decay time.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Technologies</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Op-amp circuits</li>
            <li>Electronics design</li>
            <li>Audio processing</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Noise reduction</li>
            <li>Adjustable threshold</li>
            <li>Variable decay time</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
