import HeroSection from '../components/HeroSection';
import NavMenu from '../components/NavMenu';
export default function Home() {
  return (
    <main>
      <NavMenu />
      <HeroSection />
      <div className="container mx-auto">
        {/* Additional homepage content */}
      </div>
    </main>
  );
}
