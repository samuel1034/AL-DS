"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const animeList = [
  { title: "Anime 1", image: "/path-to-anime1.jpg" },
  { title: "Anime 2", image: "/path-to-anime2.jpg" },
  { title: "Anime 3", image: "/path-to-anime3.jpg" },
  // Add more anime objects as needed
];

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <div className="slick-next">Next</div>, // Add next arrow
    prevArrow: <div className="slick-prev">Prev</div>, // Add previous arrow
  };

  return (
    <section className="relative h-[400px] bg-cover bg-center">
      <Slider {...settings}>
        {animeList.map((anime, index) => (
          <div key={index} className="relative h-[400px]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${anime.image})` }}
            ></div>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col justify-center items-center text-center h-full">
              <h1 className="text-4xl font-bold text-white">{anime.title}</h1>
              <p className="text-crunchyOrange text-lg mt-4">Learn Japanese while enjoying your favorite anime.</p>
              <button className="mt-6 px-4 py-2 bg-crunchyOrange text-white font-semibold rounded">Get Started</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
