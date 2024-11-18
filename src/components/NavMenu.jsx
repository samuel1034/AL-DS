import Link from 'next/link';
import Image from 'next/image';

const NavMenu = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpeg" alt="AnimeLingo Logo" width={64} height={64} className="mr-3" />
          <span className="text-3xl font-bold text-animelingoPurple">AnimeLingo</span>
        </Link>

        {/* Menu Links */}
        <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-6">
          <Link href="#about" className="text-white hover:text-animelingoPurple transition">
            About
          </Link>
          <Link href="#anime-catalog" className="text-white hover:text-animelingoPurple transition">
            Anime Catalog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
