import React from 'react';
import './globals.css';

// Updated metadata for AnimeLingo
export const metadata = {
  title: 'AnimeLingo - Learn Japanese Through Anime',
  description: 'Immerse yourself in anime while mastering Japanese with dual subtitles in Japanese, English, and Spanish. Enjoy your favorite shows while improving your language skills.',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
