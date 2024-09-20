export default function AnimeList() {
    const animeList = [
      { id: 1, title: 'Attack on Titan', thumbnail: '/images/aot.jpg' },
      { id: 2, title: 'Naruto', thumbnail: '/images/naruto.jpg' },
      { id: 3, title: 'My Hero Academia', thumbnail: '/images/mha.jpg' },
      // Add more anime here
    ];
  
    return (
      <section className="container mx-auto py-8">
        <h2 className="text-crunchyroll-light text-3xl font-bold mb-6">Anime Series</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {animeList.map(anime => (
            <div key={anime.id} className="group relative">
              <img src={anime.thumbnail} alt={anime.title} className="rounded-lg shadow-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-crunchyroll-light font-bold text-lg">{anime.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  