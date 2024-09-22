import Link from 'next/link';

export default function AnimeCard({ anime }) {
  return (
    <Link href={`/anime/${anime.id}`}>
      <a className="block">
        <div className="relative h-60 w-full bg-gray-800">
          <img src={anime.image} alt={anime.title} className="object-cover h-full w-full" />
          <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition">
            <span className="text-white font-bold">{anime.title}</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
