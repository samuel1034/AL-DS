"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const fetchAnimeData = async () => {
      const query = `
        query {
          Page(page: 1, perPage: 5) {
            media(type: ANIME, sort: POPULARITY_DESC) {
              title {
                english
                romaji
              }
              description
              bannerImage
            }
          }
        }
      `;

      try {
        const response = await fetch('https://graphql.anilist.co', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ query }),
        });

        const { data } = await response.json();
        const formattedAnimeList = data.Page.media
          .filter(anime => anime.bannerImage)
          .map(anime => ({
            title: anime.title.english || anime.title.romaji,
            image: anime.bannerImage,
            description: anime.description
          }));
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
            <div key={index} className="relative h-screen">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${anime.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 max-w-6xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-text">
                  {anime.title}
                </h1>
                <p className="text-lg md:text-xl text-white mb-6 shadow-text max-w-2xl">
                  {anime.description ? anime.description.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...' : 'Explore the world of anime!'}
                </p>
                <div className="flex space-x-4">
                  <button className="px-8 py-3 bg-crunchyOrange text-white text-lg font-bold rounded-full hover:bg-orange-600 transition-colors duration-300">
                    Watch Now
                  </button>
                  <button className="px-8 py-3 bg-transparent border-2 border-white text-white text-lg font-bold rounded-full hover:bg-white hover:text-black transition-colors duration-300">
                    Add to Watchlist
                  </button>
                </div>
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
