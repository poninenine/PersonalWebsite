"use client";
import { useParams } from "next/navigation";

export default function ProjectPage() {
  const params = useParams();
  const { id } = params;

  return (
    <main className="min-h-screen flex justify-center pt-24">
      <h1 className="text-4xl font-bold">Project {id} Placeholder</h1>
    </main>
  );
}