import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row w-full md:h-[90vh]">
      {/* Left side - image */}
      <div className="relative md:w-1/2 w-full h-64 md:h-full overflow-hidden md:rounded-br-[2rem]">
        <Image
          src="/images/hero.jpg"
          alt="Johannes Koechling portrait"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right side - text block */}
      <div className="flex flex-col justify-center items-start md:w-1/2 w-full h-1/2 md:h-full bg-white dark:bg-black px-8 md:px-16 py-16 text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white mb-4 pt-15">
          Johannes Koechling
        </h1>
        <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6">
          Electrical Engineer · Halifax, Nova Scotia
          <br />
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          I build things, from web and mobile apps to firmware to electronics.
          <br />
          <br />
          Click the button to learn more about me, or scroll down to check out some of my work!
        </p>
        <Link
          href="/about"
          className="inline-block bg-black dark:bg-white text-white dark:text-black font-semibold py-3 px-6 rounded-md hover:opacity-80 transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
