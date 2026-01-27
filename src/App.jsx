import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import confetti from "canvas-confetti";
import img1 from './assets/WhatsApp Image 2026-01-22 at 7.07.15 PM.jpeg';
import img2 from './assets/WhatsApp Image 2026-01-22 at 7.07.21 PM.jpeg';
import img3 from './assets/WhatsApp Image 2026-01-22 at 7.07.30 PM.jpeg';
import img4 from './assets/WhatsApp Image 2026-01-22 at 7.07.31 PM.jpeg';
import img5 from './assets/WhatsApp Image 2026-01-22 at 7.07.32 PM.jpeg';
import img6 from './assets/WhatsApp Image 2026-01-22 at 7.07.33 PM.jpeg';
import img7 from './assets/WhatsApp Image 2026-01-22 at 7.07.34 PM (1).jpeg';
import img8 from './assets/WhatsApp Image 2026-01-22 at 7.07.34 PM.jpeg';
import img9 from './assets/WhatsApp Image 2026-01-22 at 7.07.35 PM (1).jpeg';
import img10 from './assets/WhatsApp Image 2026-01-22 at 7.07.35 PM.jpeg';
import img11 from './assets/WhatsApp Image 2026-01-22 at 7.07.36 PM.jpeg';
import img12 from './assets/WhatsApp Image 2026-01-22 at 7.07.37 PM.jpeg';
import img13 from './assets/WhatsApp Image 2026-01-22 at 7.07.41 PM.jpeg';
import img14 from './assets/WhatsApp Image 2026-01-22 at 7.41.14 PM (1).jpeg';
import img15 from './assets/WhatsApp Image 2026-01-22 at 7.41.14 PM.jpeg';
import img16 from './assets/WhatsApp Image 2026-01-22 at 7.41.15 PM (1).jpeg';
import img17 from './assets/WhatsApp Image 2026-01-22 at 7.41.15 PM (2).jpeg';
import img18 from './assets/WhatsApp Image 2026-01-22 at 7.41.15 PM (3).jpeg';
import img19 from './assets/WhatsApp Image 2026-01-22 at 7.41.15 PM.jpeg';
import img20 from './assets/WhatsApp Image 2026-01-22 at 8.01.32 PM.jpeg';
import img21 from './assets/WhatsApp Image 2026-01-22 at 8.01.33 PM (1).jpeg';
import img22 from './assets/WhatsApp Image 2026-01-22 at 8.01.33 PM (2).jpeg';
import img23 from './assets/WhatsApp Image 2026-01-22 at 8.01.33 PM.jpeg';
import img24 from './assets/WhatsApp Image 2026-01-22 at 8.01.34 PM.jpeg';
import img25 from './assets/WhatsApp Image 2026-01-22 at 8.01.40 PM.jpeg';
import img26 from './assets/WhatsApp Image 2026-01-22 at 8.01.41 PM.jpeg';
import img27 from './assets/WhatsApp Image 2026-01-22 at 8.01.48 PM.jpeg';
import img28 from './assets/WhatsApp Image 2026-01-22 at 8.01.54 PM.jpeg';
import vid1 from './assets/WhatsApp Video 2026-01-22 at 8.01.40 PM (1).mp4';
import vid2 from './assets/WhatsApp Video 2026-01-22 at 9.01.56 PM.mp4';
import vid3 from './assets/WhatsApp Video 2026-01-22 at 9.01.57 PM (1).mp4';
import vid4 from './assets/WhatsApp Video 2026-01-22 at 9.01.57 PM (2).mp4';
import vid5 from './assets/WhatsApp Video 2026-01-22 at 9.01.57 PM.mp4';
import vid6 from './assets/WhatsApp Video 2026-01-22 at 9.01.58 PM.mp4';
import img29 from './assets/WhatsApp Image 2026-01-27 at 7.50.42 AM.jpeg'
import img30 from './assets/WhatsApp Image 2026-01-27 at 7.50.49 AM.jpeg';
import img31 from './assets/WhatsApp Image 2026-01-27 at 7.51.00 AM (1).jpeg';
import img32 from './assets/WhatsApp Image 2026-01-27 at 7.51.00 AM.jpeg';
import img33 from './assets/WhatsApp Image 2026-01-27 at 7.51.01 AM.jpeg';
import img34 from './assets/WhatsApp Image 2026-01-27 at 7.51.01 AM (1).jpeg';
import img35 from './assets/WhatsApp Image 2026-01-27 at 7.51.01 AM (2).jpeg';
import img36 from './assets/WhatsApp Image 2026-01-27 at 7.51.20 AM.jpeg';
import img37 from './assets/WhatsApp Image 2026-01-27 at 7.58.36 AM.jpeg';
import vid7 from './assets/WhatsApp Video 2026-01-27 at 7.50.49 AM.mp4';
import vid8 from './assets/WhatsApp Video 2026-01-27 at 7.50.54 AM.mp4';
import vid9 from './assets/WhatsApp Video 2026-01-27 at 7.51.19 AM.mp4';
import vid10 from './assets/WhatsApp Video 2026-01-27 at 7.58.36 AM.mp4';
const generateHeartPositions = () => [...Array(20)].map(() => ({
  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
  duration: 8 + Math.random() * 5,
  delay: Math.random() * 5,
}));

export default function ValentineApp() {
  const [yesClicked, setYesClicked] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [enlargedMedia, setEnlargedMedia] = useState(null);
  const [userName, setUserName] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [heartPositions] = useState(generateHeartPositions);

  const allowedNames = ['brenda', 'musindi', 'mmbone'];
  const cleanName = userName.trim().toLowerCase();

  const media = [
    { type: 'image', src: img1 },
    { type: 'image', src: img2 },
    { type: 'image', src: img3 },
    { type: 'image', src: img4 },
    { type: 'image', src: img5 },
    { type: 'image', src: img6 },
    { type: 'image', src: img7 },
    { type: 'image', src: img8 },
    { type: 'image', src: img9 },
    { type: 'image', src: img10 },
    { type: 'image', src: img11 },
    { type: 'image', src: img12 },
    { type: 'image', src: img13 },
    { type: 'image', src: img14 },
    { type: 'image', src: img15 },
    { type: 'image', src: img16 },
    { type: 'image', src: img17 },
    { type: 'image', src: img18 },
    { type: 'image', src: img19 },
    { type: 'image', src: img20 },
    { type: 'image', src: img21 },
    { type: 'image', src: img22 },
    { type: 'image', src: img23 },
    { type: 'image', src: img24 },
    { type: 'image', src: img25 },
    { type: 'image', src: img26 },
    { type: 'image', src: img27 },
    { type: 'image', src: img28 },
    { type: 'image', src: img29 },
    { type: 'image', src: img30 },
    { type: 'image', src: img32 },
    { type: 'image', src: img31 },
    { type: 'image', src: img33 },
    { type: 'image', src: img34 },
    { type: 'image', src: img35 },
    { type: 'image', src: img36 },
    { type: 'image', src: img37 },
    { type: 'video', src: vid1 },
    { type: 'video', src: vid2 },
    { type: 'video', src: vid3 },
    { type: 'video', src: vid4 },
    { type: 'video', src: vid5 },
    { type: 'video', src: vid6 },
    { type: 'video', src: vid7 },
    { type: 'video', src: vid8 },
    { type: 'video', src: vid9 },
    { type: 'video', src: vid10 },
  ];

  const poem = `In your eyes, I see the stars align,
A love so deep, forever thine.
With every beat, my heart does sing,
Of joy and peace that you bring.

Your smile lights up the darkest night,
Your touch, a warmth so pure and bright.
In dreams and waking, you're my guide,
My love, my soul, forever by my side.`;

  const quotes = [
    "You’re my favorite notification ❤️",
    "Every love song reminds me of you🥹",
    "I choose you. Always.",
    "Yes, I'm a mess but I'm blessed to be stuck with you.",
    "Ni we, ni we,ni we, ujue ni wewe🥹",
    
  ];

  const songs = [
    "https://open.spotify.com/embed/playlist/3y7ceuyAwUtm0Cg6uJwqYf",
    "https://open.spotify.com/embed/track/1xTb97ajiL7Rq3dMBk2UJu",
    "https://open.spotify.com/embed/track/7DaWhyJV4jHwaunbBQMkk7",
    "https://open.spotify.com/embed/track/7yKzWjujvc2MnBhRyURV9p",
    "https://open.spotify.com/embed/track/6IRQBDxSI4NAYGuTly0MGg",
    "https://open.spotify.com/embed/track/2TKkp7p9uGA5MpInQwMBM5",
    "https://open.spotify.com/embed/track/0q6HfciyPUdGOAEH1Ud3N3",
    "https://open.spotify.com/embed/track/4hbmPkeauQBw3RnxH45udP",
    "https://open.spotify.com/embed/track/1wkDwk33oF0XLpEzLWauyn",
    "https://open.spotify.com/embed/track/4lXz2PfGhezzkVcDwO09Tx",
    "https://open.spotify.com/embed/track/23ZdNaFSfH7VdSVU4U0Agb",
    "https://open.spotify.com/embed/track/6SOExjMELLzWfH4mDteWOE",
  ];

  useEffect(() => {
    if (yesClicked) {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
      });
      setCurrentPage(1); 
    }
  }, [yesClicked]);

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (allowedNames.includes(cleanName)) {
      setIsAuthorized(true);
    }
  };

  const nextPage = () => {
    if (isAuthorized) {
      setCurrentPage((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevPage = () => {
    if (isAuthorized) {
      setCurrentPage((prev) => Math.max(prev - 1, 0));
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-pink-200 via-red-200 to-rose-300 flex items-center justify-center overflow-hidden">

      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {heartPositions.map((pos, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            initial={{
              x: pos.x,
              y: window.innerHeight + 50,
              opacity: 0.7,
            }}
            animate={{
              y: -100,
              opacity: 0,
            }}
            transition={{
              duration: pos.duration,
              repeat: Infinity,
              delay: pos.delay,
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl w-full p-4 sm:p-6 z-10"
      >
        <div className="rounded-2xl shadow-xl bg-white/80 backdrop-blur">
          <div className="p-4 sm:p-6 md:p-8 text-center space-y-4 sm:space-y-6">
            {!isAuthorized ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600">
                  Enter Your Name 💕
                </h1>
                <form onSubmit={handleNameSubmit} className="space-y-4">
                  <input
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Your name..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg"
                  >
                    Enter
                  </button>
                </form>
                {userName && !allowedNames.includes(cleanName) && (
  <p className="text-red-500 text-lg">
    You're not my girlfriend... this isn't meant for you 😔
  </p>
)}

{userName && allowedNames.includes(cleanName) && (
  <p className="text-green-600 text-lg">
    {userName.trim()} My Loveeee!🥹💖  
    Hiiii Babyyyyy🥹🥹🥹
  </p>
)}
              </motion.div>
            ) : currentPage === 0 ? (
              !yesClicked ? (
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-600">
                    Musindi, will you be my valentine?</h2>
                  <p className="text-lg text-gray-700">
                    You make my heart softer,my life
                    warmer, and my world way more beautiful.
                    You deserve all the love and happiness in the universe.
                  </p>

                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button
                      onClick={() => setYesClicked(true)}
                      className="bg-rose-500 hover:bg-rose-600 text-white rounded-full px-6 sm:px-8 py-2"
                    >
                      Yes 💖
                    </button>
                    <button
                      className="bg-black text-white border border-gray-300 rounded-full px-6 sm:px-8 py-2"
                      onMouseEnter={(e) => {
                        e.target.style.transform = `translate(${Math.random() * 150 - 75}px, ${Math.random() * 150 - 75}px)`;
                      }}
                    >
                      No 🙃
                    </button>
                  </div>
                </div>
                ) : null
              ) : currentPage === 1 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-8"
                >
                  <div className="flex justify-center gap-2 text-rose-500">
                    <Heart /> <Heart /> <Heart />
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-600">
                    YAY!! I knew it 🥹💞
                    I LOVE YOUU BRENDAAAA💞💞💞🥹🥹
                  </h2>

                  {/* Quotes */}
                  <div className="space-y-2">
                    {quotes.map((q, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.3 }}
                        className="italic text-gray-700"
                      >
                        "{q}"
                      </motion.p>
                    ))}
                  </div>

                  {/* Spotify Section */}
                  <div className="space-y-7">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-rose-600">
                      Songs that remind me of you 🥹🥹🎶
                    </h3>
                    <div className="grid grid-cols-1 gap-6">
                      {songs.map((src, i) => (
                        <iframe
                          key={i}
                          src={src}
                          width="100%"
                          height="232"
                          frameBorder="0"
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                          loading="lazy"
                          className="rounded-xl"
                        ></iframe>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center text-rose-500">
                    <Sparkles className="animate-pulse" />
                  </div>
                </motion.div>
              )
            : currentPage === 2 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-600">
                Our Favorite Memories 📸
              </h2>
              <span>I sit down and stare at these pictures of you - Kinoti</span>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {media.map((item, i) => (
                  <motion.div
                    key={i}
                    className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setEnlargedMedia(item)}
                  >
                    {item.type === 'image' ? (
                      <img
                        src={item.src}
                        alt={`Memory ${i + 1}`}
                        className="w-full h-48 object-cover"
                      />
                    ) : (
                      <video
                        src={item.src}
                        controls
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                      <div className="flex justify-center text-rose-500">
                <h2 className="text-center text-rose-500">Endgame</h2>
                <Heart className="animate-pulse" />
              </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-center text-rose-500">
                <h2 className="text-center text-rose-500">Endgame</h2>
                <Heart className="animate-pulse" />
              </div>
            </motion.div>
            ) : currentPage === 3 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-rose-600">
                A Poem for My Princess💌
              </h2>
              <div className="text-left max-w-2xl mx-auto">
                <pre className="whitespace-pre-wrap text-gray-700 text-base sm:text-lg leading-relaxed font-serif italic">
                  {poem}
                </pre>
              </div>
              <div className="flex justify-center text-rose-500">
                <h2 className="text-center text-rose-500">Endgame</h2>
                <Heart className="animate-pulse" />
              </div>
            </motion.div>
            ) : null
            }
        </div>
        </div>
      </motion.div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 sm:gap-8 z-20">
        <button
          onClick={prevPage}
          disabled={currentPage === 0 || !isAuthorized}
          className="p-3 bg-white/80 backdrop-blur rounded-full shadow-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronLeft className="w-6 h-6 text-rose-600" />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === 3 || !isAuthorized}
          className="p-3 bg-white/80 backdrop-blur rounded-full shadow-lg hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <ChevronRight className="w-6 h-6 text-rose-600" />
        </button>
      </div>

      {/* Enlarged Media Modal */}
      {enlargedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4" onClick={() => setEnlargedMedia(null)}>
          <div className="relative w-full max-w-4xl max-h-full">
            {enlargedMedia.type === 'image' ? (
              <img
                src={enlargedMedia.src}
                alt="Enlarged"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            ) : (
              <video
                src={enlargedMedia.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            )}
            <button
              onClick={() => setEnlargedMedia(null)}
              className="absolute top-2 right-2 text-white text-xl sm:text-2xl bg-black bg-opacity-50 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-opacity-75"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}