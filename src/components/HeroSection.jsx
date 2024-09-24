"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        const response = await fetch('https://api.jikan.moe/v4/top/anime?type=ona');
        const data = await response.json();
        const formattedAnimeList = data.data.map(anime => ({
          title: anime.title,
          image: anime.images.jpg.large_image_url,
          description: anime.synopsis
        })).filter(anime => anime.image);
        setAnimeList(formattedAnimeList);
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    };

    fetchAnimeData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    arrows: false,
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {animeList.length > 0 ? (
        <Slider {...settings}>
          {animeList.map((anime, index) => (
            <div key={index} className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${anime.image})` }}>
              <div className="absolute inset-0 flex">
                <div className="w-1/2 bg-black bg-opacity-70 flex flex-col justify-center items-start px-6 md:px-12">
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                    {anime.title}
                  </h1>
                  <p className="text-sm md:text-base text-white mb-6 max-w-xl">
                    {anime.description ? anime.description.slice(0, 150) + '...' : 'Explore the world of anime and manga!'}
                  </p>
                  <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-crunchyOrange text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors duration-300">
                      Watch Now
                    </button>
                    <button className="px-6 py-2 bg-transparent border border-white text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                      Add to Watchlist
                    </button>
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex justify-center items-center h-full bg-gray-900">
          <p className="text-white text-xl">Loading amazing anime...</p>
        </div>
      )}
    </section>
  );
}
