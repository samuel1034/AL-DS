export default function VideoPlayer({ videoSrc }) {
    return (
      <div className="relative w-full max-w-3xl mx-auto">
        <video controls className="w-full rounded-lg shadow-lg">
          <source src={videoSrc} type="video/mp4" />
          {/* Dual subtitles: English and Japanese */}
          <track src="/subs/episode1_en.vtt" kind="subtitles" srclang="en" label="English" />
          <track src="/subs/episode1_jp.vtt" kind="subtitles" srclang="ja" label="Japanese" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  