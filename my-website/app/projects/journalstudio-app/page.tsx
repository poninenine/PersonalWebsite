export default function JournalStudioAppPage() {
  return (
    <main className="min-h-screen flex justify-center pt-24 pb-16">
      <div className="max-w-3xl px-8 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
          JournalStudio App
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          An app centred around the practice of voice journalling, with the state of the art transcription and summarization.
        </p>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Technologies</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Voice transcription</li>
            <li>AI summarization</li>
            <li>Mobile platform</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">Key Features</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>Voice journalling</li>
            <li>Automatic transcription</li>
            <li>AI-powered summarization</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
