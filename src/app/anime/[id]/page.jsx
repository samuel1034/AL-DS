import VideoPlayer from '../../components/VideoPlayer';

export default function AnimeDetail({ params }) {
  const anime = {
    title: 'Attack on Titan',
    description: 'Humans are on the verge of extinction due to giant humanoid creatures known as Titans.',
    episodes: [
      { id: 1, title: 'Episode 1: To You, 2000 Years Later' },
      { id: 2, title: 'Episode 2: The Fall of Shiganshina' },
      // Add more episodes here
    ]
  };

  return (
    <section className="container mx-auto py-8">
      <h1 className="text-crunchyroll-light text-4xl font-bold mb-4">{anime.title}</h1>
      <p className="text-crunchyroll-light mb-6">{anime.description}</p>

      <VideoPlayer videoSrc="/videos/aot-episode1.mp4" />

      <h2 className="text-crunchyroll-light text-2xl font-bold mt-8">Episodes</h2>
      <ul className="list-disc list-inside text-crunchyroll-light">
        {anime.episodes.map(episode => (
          <li key={episode.id} className="hover:text-crunchyroll-orange transition">
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  );
}
