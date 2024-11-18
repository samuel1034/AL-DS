import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 py-20 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-animelingoPurple">
          Discover AnimeLingo
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-animelingoPurple mb-4">Our Mission</h3>
            <p className="text-gray-300 mb-4">
              At AnimeLingo, we&apos;re revolutionizing Japanese language learning by harnessing the power of anime. Our mission is to create an immersive, enjoyable environment where learners can naturally improve their Japanese skills while indulging in their favorite anime series.
            </p>
            <p className="text-gray-300">
              We believe that learning should be as exciting as the stories you love. With AnimeLingo, every episode becomes a language lesson, every character a teacher, and every plot twist a chance to level up your Japanese.
            </p>
          </div>
          <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-animelingoPurple mb-4">Why Choose AnimeLingo?</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                "Learn with your favorite anime series",
                "Dual subtitles in Japanese, English, and Spanish",
                "Interactive vocabulary and grammar exercises",
                "Personalized learning paths",
                "Community of anime and Japanese language enthusiasts",
                "Regular updates with new anime content"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-animelingoPurple" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Video below the content */}
        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/about-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-animelingoPurple mb-4">Join the AnimeLingo Community</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Embark on your Japanese learning adventure today and become part of our thriving community of anime enthusiasts and language learners. With AnimeLingo, every watch becomes a lesson, and every lesson brings you closer to fluency.
          </p>
          <button className="px-8 py-3 bg-animelingoPurple text-white font-bold rounded-full hover:bg-purple-700 transition-colors duration-300 shadow-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
