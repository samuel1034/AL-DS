import HeroSection from '../components/HeroSection';
import NavMenu from '../components/NavMenu';
import About from '../components/About';
import AnimeCatalog from '../components/AnimeCatalog';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <NavMenu />
      <HeroSection />
      <About />
      <AnimeCatalog />
      <div className="container mx-auto">
      <Footer/>
      </div>
    </main>
  );
}
