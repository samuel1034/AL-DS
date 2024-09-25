"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const [animeList, setAnimeList] = useState([]);
  const [currentAnime, setCurrentAnime] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('https://kitsu.io/api/edge/anime?sort=-averageRating&page[limit]=5&fields[anime]=titles,synopsis,posterImage');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API response:', data);

        const formattedAnimeList = data.data.map(anime => ({
          title: anime.attributes.titles.en || anime.attributes.titles.en_jp,
          image: anime.attributes.posterImage.original,
          description: anime.attributes.synopsis
        }));

        console.log('Formatted anime list:', formattedAnimeList);

        if (formattedAnimeList.length === 0) {
          throw new Error('No anime data available');
        }

        setAnimeList(formattedAnimeList);
        setCurrentAnime(formattedAnimeList[0]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching anime data:', error);
        setError(error.message);
        setIsLoading(false);
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
    beforeChange: (current, next) => {
      console.log('Changing to slide:', next);
      setCurrentAnime(animeList[next]);
    }
  };

  useEffect(() => {
    console.log('Current anime updated:', currentAnime);
  }, [currentAnime]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <p className="text-white text-lg">Loading amazing anime...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <p className="text-white text-lg">Error: {error}</p>
      </div>
    );
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="flex h-screen">
        {/* Left div with text content */}
        <div className="w-1/2 bg-black flex flex-col justify-center items-start px-8 md:px-16 z-10">
          <div className="flex items-center mb-4">
            <h1 className="text-2xl md:text-4xl font-bold text-white mr-4 shadow-text">
              Learn Japanese Through Anime
            </h1>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Japan_-_animated.gif" 
              alt="Animated Japanese Flag" 
              className="w-12 h-8 md:w-16 md:h-10 object-cover"
            />
          </div>
          <p className="text-sm md:text-base text-white mb-6 shadow-text max-w-xl">
            Immerse yourself in anime while mastering Japanese! Our unique platform offers dual subtitles in Japanese, English, and Spanish, allowing you to enjoy your favorite shows while improving your language skills.
          </p>
          <ul className="text-sm md:text-base text-white mb-6 shadow-text max-w-xl list-disc list-inside">
            <li>Dual subtitles: Japanese + English/Spanish</li>
            <li>Interactive language learning tools</li>
            <li>Extensive anime library</li>
            <li>Customizable learning experience</li>
          </ul>
          <div className="flex space-x-4">
            <button className="px-6 py-2 bg-crunchyOrange text-white text-sm font-bold rounded-full hover:bg-orange-600 transition-colors duration-300">
              Start Learning
            </button>
            <button className="px-6 py-2 bg-transparent border-2 border-white text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300">
              Explore Anime
            </button>
          </div>
        </div>
        
        {/* Right div with image background */}
        <div className="w-1/2 absolute right-0 h-full">
          <Slider {...settings}>
            {animeList.map((anime, index) => (
              <div key={index} className="h-screen">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${anime.image})` }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
