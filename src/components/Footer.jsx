export default function Footer() {
    return (
      <footer className="bg-crunchyroll-dark text-crunchyroll-light py-6 mt-12">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-8 mb-4">
            <a href="/privacy-policy" className="hover:text-crunchyroll-orange transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-crunchyroll-orange transition">Terms of Service</a>
            <a href="/contact" className="hover:text-crunchyroll-orange transition">Contact Us</a>
          </div>
          <p className="text-crunchyroll-light">&copy; 2024 AnimeLingo. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  