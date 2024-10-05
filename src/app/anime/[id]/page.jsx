"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import VideoPlayer from '../../../components/VideoPlayer';

export default function AnimeDetail({ params }) {
  const [anime, setAnime] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimeDetail = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://kitsu.io/api/edge/anime/${params.id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setAnime({
          id: data.data.id,
          title: data.data.attributes.titles.en || data.data.attributes.titles.en_jp,
          image: data.data.attributes.posterImage.large,
          synopsis: data.data.attributes.synopsis,
          youtubeVideoId: data.data.attributes.youtubeVideoId,
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching anime details:', err);
        setError('Error fetching anime details. Please try again.');
        setLoading(false);
      }
    };

    fetchAnimeDetail();
  }, [params.id]);

  if (loading) return <div className="text-center text-white text-xl mt-12">Loading anime details...</div>;
  if (error) return <div className="text-center text-red-500 text-xl mt-12">{error}</div>;
  if (!anime) return <div className="text-center text-white text-xl mt-12">No anime found</div>;

  return (
    <div className="bg-gray-900 text-white p-6 font-sans">
      <h1 className="text-3xl font-bold text-center mb-8">{anime.title}</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <img src={anime.image} alt={anime.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="md:w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Synopsis</h2>
          <p className="mb-6">{anime.synopsis}</p>
          <h2 className="text-2xl font-semibold mb-4">Watch Trailer</h2>
          {anime.youtubeVideoId ? (
            <div className="w-full aspect-w-16 aspect-h-9 mb-8">
              <iframe
                src={`https://www.youtube.com/embed/${anime.youtubeVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              ></iframe>
            </div>
          ) : (
            <p className="mb-8">No trailer available</p>
          )}
          <h2 className="text-2xl font-semibold mb-4">Watch Full Episodes</h2>
          <p className="mb-4">To watch full episodes, please visit one of these official sources:</p>
          <div className="flex space-x-4">
            <Link href={`https://www.crunchyroll.com/search?q=${encodeURIComponent(anime.title)}`} target="_blank" rel="noopener noreferrer">
              <button className="bg-crunchyroll-orange text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
                Watch on Crunchyroll
              </button>
            </Link>
            <Link href={`https://animelon.com/search?q=${encodeURIComponent(anime.title)}`} target="_blank" rel="noopener noreferrer">
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                Watch on Animelon
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
