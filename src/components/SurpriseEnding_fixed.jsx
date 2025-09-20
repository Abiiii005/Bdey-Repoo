import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Fireworks from './Fireworks';

const SurpriseEnding = ({ recipientName = "Beautiful" }) => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showDownloadButton, setShowDownloadButton] = useState(false);
  const [showCakeMessage, setShowCakeMessage] = useState(false);

  useEffect(() => {
    // Start fireworks immediately
    setShowFireworks(true);
    
    // Show download button after 6 seconds
    setTimeout(() => setShowDownloadButton(true), 6000);
  }, []);

  const handleCakeClick = () => {
    setShowCakeMessage(true);
  };

  const handleDownload = () => {
    // This is a placeholder - in a real app, you'd implement actual download functionality
    alert('Download feature would be implemented here! 📥');
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex flex-col items-center justify-center relative overflow-hidden">
      <Fireworks isActive={showFireworks} />
      
      {/* Background sparkles and stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            {['⭐', '✨', '🌟', '💫'][i % 4]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="text-center z-20 max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
      >
        {/* Birthday cake with candles */}
        <motion.div
          className="mb-8 cursor-pointer"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCakeClick}
        >
          <div className="text-8xl md:text-9xl mb-4">🎂</div>
          
          {/* Glowing candles */}
          <div className="flex justify-center space-x-2 mb-4">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                className="text-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              >
                🕯️
              </motion.div>
            ))}
          </div>
          
          {/* Click instruction */}
          {!showCakeMessage && (
            <motion.p
              className="text-white/80 text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Click the cake for a special message! 🎂✨
            </motion.p>
          )}
        </motion.div>

        {/* Cake click message - ONLY message shown when cake is clicked */}
        {showCakeMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8 bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30"
          >
            <motion.h2
              className="text-6xl md:text-8xl font-bold text-white mb-6 dancing-script"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 40px rgba(255,192,203,1)",
                  "0 0 60px rgba(255,255,255,0.8)"
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Love you 😘
            </motion.h2>
            <motion.p
              className="text-2xl md:text-3xl text-white/90 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Hope your birthday will be a good day💖,
              Morning Santhipom Kovil leah with lil surprises,Bye Baby!!!
            </motion.p>
          </motion.div>
        )}

        {/* Action buttons */}
        {showDownloadButton && (
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          >
            <motion.button
              className="px-8 py-4 bg-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-pink-600 transition-colors glow-effect"
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              💾 Download Memories
            </motion.button>

            <motion.button
              className="px-8 py-4 bg-purple-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-purple-600 transition-colors"
              onClick={handleRestart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              🔄 Watch Again
            </motion.button>
          </motion.div>
        )}
      </motion.div>

      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-4xl text-red-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-8 left-8 text-6xl"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        🎉
      </motion.div>

      <motion.div
        className="absolute top-8 right-8 text-6xl"
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
      >
        🎈
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-8 text-5xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, -15, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        🌟
      </motion.div>

      <motion.div
        className="absolute bottom-8 right-8 text-5xl"
        animate={{
          y: [0, -25, 0],
          rotate: [0, -15, 15, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        💫
      </motion.div>
    </div>
  );
};

export default SurpriseEnding;
