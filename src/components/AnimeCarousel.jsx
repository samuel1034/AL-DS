import AnimeCard from './AnimeCard';

export default function AnimeCarousel({ animeList }) {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-bold mb-4">Featured Anime</h2>
      <div className="flex space-x-4 overflow-x-scroll">
        {animeList.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </section>
  );
}
