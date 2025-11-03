import Image from "next/image";
import Link from "next/link";
import React from "react";

type Social = { label: string; href: string };
type Props = {
  name?: string;
  title?: string;
  bio?: React.ReactNode;
  avatarSrc?: string;
  socials?: Social[];
  skills?: string[];
  className?: string;
};

export default function AboutMeBlock({
  name = "Your Name",
  title = "Your role · Location",
  bio = "Short intro about yourself. Mention what you build, technologies you like, or what you're working on.",
  avatarSrc = "/images/avatar.jpg",
  socials = [
    { label: "GitHub", href: "https://github.com/" },
    { label: "Twitter", href: "https://twitter.com/" },
  ],
  skills = ["Next.js", "TypeScript", "Tailwind"],
  className = "",
}: Props) {
  return (
    <section
      className={`w-full bg-white dark:bg-zinc-900 rounded-lg shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 ${className}`}
    >
      <div className="flex-shrink-0">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-2 ring-zinc-200 dark:ring-zinc-700">
          <Image
            src={avatarSrc}
            alt={`${name} avatar`}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{title}</p>

        <div className="mt-4 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
          {bio}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-md"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-center sm:justify-start gap-3">
          {socials.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}