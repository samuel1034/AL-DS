import HeroSection from '../components/HeroSection';
import NavMenu from '../components/NavMenu';
import About from '../components/About';
import AnimeCatalog from '../components/AnimeCatalog';

export default function Home() {
  return (
    <main>
      <NavMenu />
      <HeroSection />
      <About />
      <AnimeCatalog />
      <div className="container mx-auto">
        {/* Additional homepage content */}
      </div>
    </main>
  );
}
