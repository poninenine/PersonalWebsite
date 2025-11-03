// filepath: /app/components/Header.tsx
import Link from 'next/link';

export default function Header() {
    return (
      <header className="w-full bg-zinc-100 dark:bg-zinc-900 py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
            Johannes Koechling
          </h1>
          <nav>
            <ul className="flex gap-4">
              <li>
                <Link href="/" className="text-zinc-700 dark:text-zinc-300">
                  Home
                </Link>
              </li>
              <li>
                <a href="/about" className="text-zinc-700 dark:text-zinc-300">
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }