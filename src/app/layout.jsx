import './globals.css';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-crunchyroll-dark">
        <NavMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
