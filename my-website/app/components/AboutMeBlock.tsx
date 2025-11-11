import Image from "next/image";
import React from "react";

type Props = {
  name?: string;
  title?: string;
  bio?: React.ReactNode;
  avatarSrc?: string;
  skills?: string[];
  className?: string;
};

export default function AboutMeBlock({
  name = "Johannes Koechling",
  title = "Electrical Engineer · Halifax, Nova Scotia",
  avatarSrc = "/images/johannes.jpg",
  skills = ["Python", "Next.js", "C++", "Computer Networking", "Embedded Systems", "Mobile Development"],
  bio = "I graduated from Dalhousie University with a degree in Electrical Engineering. I have a passion for building things, whether it's web and mobile applications, firmware, or electronics. In my free time, I enjoy exploring new technologies and working on personal projects.",
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
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <div className="flex-1 text-center sm:text-left">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {name}
        </h2>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{title}</p>

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

        {/* <div className="mt-4 text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
          {bio}
        </div> */}
      </div>
    </section>
  );
}