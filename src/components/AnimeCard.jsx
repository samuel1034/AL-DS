import React from 'react';

export default function AnimeCard({ title, image }) {
  return (
    <div className="relative h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
        <p className="text-crunchyOrange text-lg mt-4">Learn Japanese while enjoying your favorite anime.</p>
        <button className="mt-6 px-4 py-2 bg-crunchyOrange text-white font-semibold rounded">Get Started</button>
      </div>
    </div>
  );
}
