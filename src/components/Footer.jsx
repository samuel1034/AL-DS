import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-crunchyroll-dark text-crunchyroll-light py-6 mt-12">
      <div className="container mx-auto text-center">
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <Link href="/" className="flex items-center">
            <Image src="/logo.jpeg" alt="AnimeLingo Logo" width={64} height={64} className="mb-2" />
            <span className="text-3xl font-bold text-animelingoPurple">AnimeLingo</span>
          </Link>

          {/* Menu Links */}
          <div className="flex space-x-6 mt-4">
            <Link href="#about" className="text-white hover:text-animelingoPurple transition">
              About
            </Link>
            <Link href="#anime-catalog" className="text-white hover:text-animelingoPurple transition">
              Anime Catalog
            </Link>
          </div>
        </div>

        {/* Footer Text */}
        <p className="text-crunchyroll-light">&copy; 2024 AnimeLingo. All rights reserved.</p>

        {/* Contributor Info */}
        <div className="flex items-center justify-center space-x-3 mt-2">
          <p>Proudly brought to you by Samuel Fuentes</p>
          <Image src="/Samuel.jpg" alt="Samuel Fuentes" width={64} height={64} className="rounded-full" />
        </div>
      </div>
    </footer>
  );
}
