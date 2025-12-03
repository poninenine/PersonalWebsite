// filepath: /app/components/Header.tsx
'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname()
  const isHome = pathname === '/'

    return (
      <header className="absolute top-0 left-0 w-full bg-gradient-to-r from-white/80 via-transparent via-40% to-transparent dark:from-black/80 dark:via-transparent dark:via-40% dark:to-transparent py-4 z-50">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Johannes Koechling
          </h1> */}
          <div>
            <Link href="/">
              <Image
                src="/images/logos/logo-light.png"
                alt="Johannes Koechling logo"
                width={120}
                height={0}
                className="w-[120px] h-auto block dark:hidden"
              />
              <Image
                src="/images/logos/logo-dark.png"
                alt="Johannes Koechling logo"
                width={120}
                height={0}
                className="w-[120px] h-auto hidden dark:block"
                />
            </Link>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="text-zinc-800 md:text-zinc-600 dark:md:text-zinc-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="text-zinc-800 md:text-zinc-600 dark:md:text-zinc-300">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }