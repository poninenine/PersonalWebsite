export default function AIPersonalityTextToSpeechSuitePage() {
  return (
    <main className="min-h-screen flex justify-center pt-24 pb-16">
      <div className="max-w-3xl px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          AI Personality Text-to-Speech Suite
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          A PC app in which you pick one of an assortment of entertaining characters, enter a prompt, and hear their response.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Technologies</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Text-to-Speech (TTS)</li>
            <li>AI language models</li>
            <li>Character personalities</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Multiple character personalities</li>
            <li>Text input processing</li>
            <li>AI-generated responses</li>
            <li>Text-to-speech audio output</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
