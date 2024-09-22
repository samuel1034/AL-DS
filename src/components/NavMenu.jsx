import Link from 'next/link';

const NavMenu = () => {
  return (
    <nav className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-orange-500">
          AnimeLingo
        </Link>

        {/* Menu Links */}
        <div className="flex space-x-6">
          <Link href="/popular" className="text-white hover:text-orange-500 transition">
            Popular
          </Link>
          <Link href="/new-season" className="text-white hover:text-orange-500 transition">
            New Season
          </Link>
          <Link href="/genres" className="text-white hover:text-orange-500 transition">
            Genres
          </Link>
          <Link href="/subbed" className="text-white hover:text-orange-500 transition">
            Subbed
          </Link>
          <Link href="/dubbed" className="text-white hover:text-orange-500 transition">
            Dubbed
          </Link>
        </div>

        {/* Login/Register */}
        <div className="flex space-x-4">
          <Link href="/login" className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded transition">
            Login
          </Link>
          <Link href="/register" className="bg-white text-orange-500 hover:bg-gray-100 py-2 px-4 rounded transition">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
