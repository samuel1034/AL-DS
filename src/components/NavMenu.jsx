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
        <div className="flex space-x-6">
          <Link href="/popular" className="text-white hover:text-animelingoPurple transition">
            Popular
          </Link>
          <Link href="/new-season" className="text-white hover:text-animelingoPurple transition">
            New Season
          </Link>
          <Link href="/genres" className="text-white hover:text-animelingoPurple transition">
            Genres
          </Link>
          <Link href="/subbed" className="text-white hover:text-animelingoPurple transition">
            Subbed
          </Link>
          <Link href="/dubbed" className="text-white hover:text-animelingoPurple transition">
            Dubbed
          </Link>
        </div>

        {/* Login/Register */}
        <div className="flex space-x-4">
          <Link href="/login" className="bg-animelingoPurple hover:bg-opacity-80 text-white py-2 px-4 rounded transition">
            Login
          </Link>
          <Link href="/register" className="bg-white text-animelingoPurple hover:bg-gray-100 py-2 px-4 rounded transition">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
