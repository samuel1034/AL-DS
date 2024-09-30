import HeroSection from '../components/HeroSection';
import NavMenu from '../components/NavMenu';
import About from '../components/About';

export default function Home() {
  return (
    <main>
      <NavMenu />
      <HeroSection />
      <About />
      <div className="container mx-auto">
        {/* Additional homepage content */}
      </div>
    </main>
  );
}
