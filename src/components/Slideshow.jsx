import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { photos } from '../utils/photoData';
import FloatingHearts from './FloatingHearts';

const Slideshow = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isAutoPlay]);

  const handlePhotoClick = () => {
    setShowHearts(true);
    setTimeout(() => setShowHearts(false), 100);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlay(false);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoPlay(false);
  };

  const currentPhoto = photos[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-indigo-900 flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingHearts isActive={showHearts} count={15} />
      
      {/* Header */}
      <motion.div
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center dancing-script">
          Beautiful Memories 📸
        </h1>
        <p className="text-white/80 text-center mt-2">
          {currentIndex + 1} of {photos.length}
        </p>
      </motion.div>

      {/* Main photo display */}
      <div className="relative w-full max-w-4xl h-96 md:h-[500px] mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Message that always appears above each image */}
            <motion.div
              key={`message-${currentIndex}`}
              className="absolute -top-32 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center pointer-events-none"
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                y: [0, -10, 0], 
                scale: 1,
                rotateX: [0, 5, 0]
              }}
              transition={{ 
                duration: 0.6,
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotateX: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
            >
                <motion.div
                  key={`text-${currentIndex}`}
                  className="bg-gradient-to-r from-pink-500/98 to-purple-600/98 backdrop-blur-md px-12 py-6 rounded-3xl shadow-2xl max-w-2xl border-2 border-white/40"
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                    boxShadow: [
                      "0 15px 35px rgba(255,255,255,0.3)",
                      "0 20px 45px rgba(255,192,203,0.5)",
                      "0 15px 35px rgba(255,255,255,0.3)"
                    ]
                  }}
                  transition={{ 
                    duration: 0.5,
                    boxShadow: { duration: 2, repeat: Infinity }
                  }}
                >
                  <motion.p 
                    key={`message-text-${currentIndex}`}
                    className="text-white text-2xl text-center font-bold dancing-script"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    ✨ {currentPhoto.message} ✨
                  </motion.p>
                </motion.div>
              </motion.div>
            
            <motion.img
              src={currentPhoto.url}
              alt={`Memory ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl cursor-pointer border-4 border-white/30"
              onClick={handlePhotoClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

      </div>



      {/* Button to advance to next scene */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.button
          className="px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors glow-effect"
          onClick={onComplete}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Birthday Wishes 💝
        </motion.button>
      </motion.div>

      {/* Background sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-yellow-300 text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
