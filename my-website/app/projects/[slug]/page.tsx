export function generateStaticParams() {
  return [
    { slug: "mayfit-challenge" },
    { slug: "journalstudio-app" },
    { slug: "noise-gate-guitar-pedal" },
    { slug: "robotics-maze-solver" },
    { slug: "ai-personality-text-to-speech-suite" },
  ];
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen flex justify-center pt-24">
      <h1 className="text-4xl font-bold">Project: {params.slug}</h1>
    </main>
  );
}





// Client Code, commented out for static export

// "use client";
// import { useParams } from "next/navigation";

// export function generateStaticParams() {
//   return [
    // { slug: "mayfit-challenge" },
    // { slug: "journalstudio-app" },
    // { slug: "noise-gate-guitar-pedal" },
    // { slug: "robotics-maze-solver" },
    // { slug: "ai-personality-text-to-speech-suite" },
//   ];
// }

// export default function ProjectPage() {
//   const params = useParams();
//   const { slug } = params;

//   return (
//     <main className="min-h-screen flex justify-center pt-24">
//       <h1 className="text-4xl font-bold">Project {slug} Placeholder</h1>
//     </main>
//   );
// }