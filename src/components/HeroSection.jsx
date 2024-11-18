"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

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
          Discover an extensive collection of anime trailers while enhancing your Japanese skills! With dual subtitles in Japanese, English, and Spanish, our platform makes watching trailers both entertaining and educational.
          </p>
          <ul className="text-sm md:text-base text-white mb-6 shadow-text max-w-xl space-y-2">
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
              Dual subtitles: Japanese + English/Spanish
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Interactive language learning tools
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              Extensive anime library
            </li>
            <li className="flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              Customizable learning experience
            </li>
          </ul>
          <div className="flex space-x-4">
          <Link href="#anime-catalog">
          <button className="px-6 py-2 bg-animelingoPurple text-white text-sm font-bold rounded-full hover:bg-purple-800 transition-colors duration-300">
            Start Learning
          </button>
        </Link>
        <Link href="#anime-catalog">
          <button className="px-6 py-2 bg-transparent border-2 border-white text-white text-sm font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300">
            Explore Anime
          </button>
        </Link>

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