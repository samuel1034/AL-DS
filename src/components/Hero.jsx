export default function Hero() {
    return (
      <section className="bg-[url('/path-to-hero-image.jpg')] bg-cover bg-center h-[500px] relative">
        <div className="absolute inset-0 bg-crunchyroll-dark opacity-75"></div>
        <div className="relative z-10 container mx-auto h-full flex flex-col justify-center items-start px-6">
          <h1 className="text-4xl font-bold text-crunchyroll-light">
            Watch the Latest Anime with Dual Subtitles
          </h1>
          <p className="text-xl mt-4 text-crunchyroll-light max-w-md">
            Enjoy Japanese and English subtitles simultaneously. Perfect for learning and entertainment.
          </p>
          <div className="mt-6">
            <button className="bg-crunchyroll-orange text-crunchyroll-light font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition">
              Start Watching
            </button>
            <button className="ml-4 border-2 border-crunchyroll-orange text-crunchyroll-light font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition">
              Explore More
            </button>
          </div>
        </div>
      </section>
    );
  }
  