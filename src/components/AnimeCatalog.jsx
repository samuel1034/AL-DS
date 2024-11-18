"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AnimeCatalog = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://kitsu.io/api/edge/anime?sort=-averageRating&page[limit]=20&fields[anime]=titles,synopsis,posterImage');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const formattedAnimeList = data.data.map(anime => ({
          id: anime.id,
          title: anime.attributes.titles.en || anime.attributes.titles.en_jp,
          image: anime.attributes.posterImage.medium,
          synopsis: anime.attributes.synopsis
        }));

        setAnimeList(formattedAnimeList);
        setLoading(false);
        setError(null);
      } catch (err) {
        console.error('Error fetching anime list:', err);
        setError('Error fetching anime list. Please try again.');
        setLoading(false);
      }
    };

    fetchAnimeList();
  }, []);

  if (loading) return <div className="text-center text-white text-xl mt-12">Loading amazing anime...</div>;
  if (error) return <div className="text-center text-red-500 text-xl mt-12">{error}</div>;

  return (
    <div id='anime-catalog' className="bg-gray-900 text-white p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">Anime Catalog</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {animeList.map((anime) => (
          <Link href={`/anime/${anime.id}`} key={anime.id}>
            <div className="cursor-pointer transition-transform duration-200 hover:scale-105 bg-gray-800 rounded-lg overflow-hidden">
              <img 
                src={anime.image} 
                alt={anime.title} 
                className="w-full h-48 object-cover"
              />
              <h3 className="p-2 text-sm text-center">{anime.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimeCatalog;
