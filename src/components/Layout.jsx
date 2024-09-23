import NavMenu from './NavMenu';
import Hero from './HeroSection';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white">
      {/* Navigation Menu */}
      <NavMenu />

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <main className="flex-grow p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center p-4">
        &copy; 2024 AnimeLingo
      </footer>
    </div>
  );
}
