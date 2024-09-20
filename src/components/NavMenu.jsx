import Link from 'next/link';

export default function NavMenu() {
  return (
    <nav className="bg-crunchyroll-dark text-crunchyroll-light py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-crunchyroll-orange text-3xl font-bold">
          AnimeLingo
        </Link>
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-crunchyroll-orange transition-colors">
            Home
          </Link>
          <Link href="/anime" className="hover:text-crunchyroll-orange transition-colors">
            Anime
          </Link>
          <Link href="/movies" className="hover:text-crunchyroll-orange transition-colors">
            Movies
          </Link>
          <Link href="/popular" className="hover:text-crunchyroll-orange transition-colors">
            Popular
          </Link>
        </div>
      </div>
    </nav>
  );
}
