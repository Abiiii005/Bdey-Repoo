import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { birthdayMessages } from '../utils/photoData';
import FloatingHearts from './FloatingHearts';

const WishesCard = ({ onComplete, recipientName = "Baby" }) => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [showHearts, setShowHearts] = useState(false);
  const [showAllMessages, setShowAllMessages] = useState(false);
  const [isHolding, setIsHolding] = useState(false);
  const [messageTimer, setMessageTimer] = useState(null);

  useEffect(() => {
    if (isCardOpen && currentMessageIndex < birthdayMessages.length - 1 && !isHolding) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1);
      }, 3000);
      setMessageTimer(timer);
      return () => clearTimeout(timer);
    } else if (isCardOpen && currentMessageIndex === birthdayMessages.length - 1 && !isHolding) {
      const timer = setTimeout(() => setShowAllMessages(true), 2000);
      setMessageTimer(timer);
      return () => clearTimeout(timer);
    }
  }, [isCardOpen, currentMessageIndex, isHolding]);

  // Clear timer when holding
  useEffect(() => {
    if (isHolding && messageTimer) {
      clearTimeout(messageTimer);
      setMessageTimer(null);
    }
  }, [isHolding, messageTimer]);

  const handleCardClick = () => {
    if (!isCardOpen) {
      setIsCardOpen(true);
      setShowHearts(true);
      setTimeout(() => setShowHearts(false), 100);
    }
  };

  const handleMouseDown = () => {
    setIsHolding(true);
  };

  const handleMouseUp = () => {
    setIsHolding(false);
  };

  const handleTouchStart = () => {
    setIsHolding(true);
  };

  const handleTouchEnd = () => {
    setIsHolding(false);
  };

  // Navigation functions
  const goToPreviousMessage = () => {
    if (currentMessageIndex > 0) {
      setCurrentMessageIndex(prev => prev - 1);
      setShowAllMessages(false); // Reset completion state if going back
    }
  };

  const goToNextMessage = () => {
    if (currentMessageIndex < birthdayMessages.length - 1) {
      setCurrentMessageIndex(prev => prev + 1);
    } else if (currentMessageIndex === birthdayMessages.length - 1) {
      setShowAllMessages(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
      <FloatingHearts isActive={showHearts} count={20} />
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 20}px`,
            }}
            animate={{
              rotate: 360,
              y: [0, -20, 0],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              delay: i * 0.2,
            }}
          >
            {['💝', '💖', '💕', '💗', '🌹', '🎀', '✨', '🌟'][i % 8]}
          </motion.div>
        ))}
      </div>

      {/* Decorative text above card */}
      <motion.div
        className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      
      </motion.div>

      {/* Main Birthday Card */}
      <motion.div
        className="relative perspective-1000"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", bounce: 0.4 }}
      >
        <motion.div
          className={`relative w-88 h-[450px] md:w-[450px] md:h-[550px] cursor-pointer ${
            isCardOpen ? '' : 'hover:scale-105'
          } transition-transform duration-300 card-3d`}
          onClick={handleCardClick}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          animate={isCardOpen ? { rotateY: 180 } : { rotateY: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* Front of card */}
          <div className="absolute inset-0 w-full h-full backface-hidden">
            <div className="w-full h-full bg-gradient-to-br from-pink-300 to-purple-400 rounded-3xl shadow-2xl border-4 border-white/50 flex flex-col items-center justify-center relative overflow-hidden">
              <motion.div
                className="text-6xl mb-4"
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                💌
              </motion.div>
              
              <h2 className="text-3xl font-bold text-white text-center dancing-script mb-2">
                From my heart to you, baby… now touch the card ❤️
              </h2>
              
              <div className="text-2xl">❤️</div>
              
              <motion.div
                className="absolute top-4 right-4 text-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                🌟
              </motion.div>
              
              <motion.div
                className="absolute bottom-4 left-4 text-xl"
                animate={{ 
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                ✨
              </motion.div>
            </div>
          </div>

          {/* Back of card (opened state) */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
            <div className="w-full h-full bg-gradient-to-br from-white to-pink-100 rounded-3xl shadow-2xl border-4 border-pink-300 p-8 flex flex-col items-center justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {isCardOpen && (
                  <motion.div
                    className="text-center h-full flex flex-col justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    {/* Main birthday message */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <h3 className="text-3xl font-bold text-pink-600 dancing-script mb-4">
                        <TypeAnimation
                          sequence={[
                            'Happy Birthday ❤️',
                            1000,
                            'Happy Birthday ❤️ Baby',
                            2000,
                          ]}
                          wrapper="span"
                          cursor={true}
                          repeat={0}
                          style={{ fontSize: '1.5em', display: 'inline-block' }}
                        />
                      </h3>
                    </motion.div>

                    {/* Animated messages */}
                    <div className="space-y-6 flex-1 flex flex-col justify-center">
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={currentMessageIndex}
                          className="text-gray-700 text-lg leading-relaxed px-3 text-center"
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -50 }}
                          transition={{ duration: 0.5 }}
                        >
                          {birthdayMessages[currentMessageIndex]}
                        </motion.p>
                      </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    {isCardOpen && (
                      <motion.div
                        className="flex justify-between items-center mt-4 px-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        {/* Previous Button */}
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            goToPreviousMessage();
                          }}
                          disabled={currentMessageIndex === 0}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            currentMessageIndex === 0
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-purple-500 text-white hover:bg-purple-600 hover:scale-105'
                          }`}
                          whileHover={currentMessageIndex > 0 ? { scale: 1.05 } : {}}
                          whileTap={currentMessageIndex > 0 ? { scale: 0.95 } : {}}
                        >
                          <span>👈</span>
                          Previous
                        </motion.button>

                        {/* Message counter */}
                        <motion.div
                          className="flex items-center gap-2 text-pink-600 font-medium"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <span className="text-xs">
                            {currentMessageIndex + 1} of {birthdayMessages.length}
                          </span>
                          <div className="flex gap-1">
                            {birthdayMessages.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all ${
                                  index === currentMessageIndex
                                    ? 'bg-pink-500 scale-125'
                                    : index < currentMessageIndex
                                    ? 'bg-pink-300'
                                    : 'bg-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </motion.div>

                        {/* Next Button */}
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            goToNextMessage();
                          }}
                          disabled={showAllMessages}
                          className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                            showAllMessages
                              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                              : 'bg-purple-500 text-white hover:bg-purple-600 hover:scale-105'
                          }`}
                          whileHover={!showAllMessages ? { scale: 1.05 } : {}}
                          whileTap={!showAllMessages ? { scale: 0.95 } : {}}
                        >
                          Next
                          <span>👉</span>
                        </motion.button>
                      </motion.div>
                    )}

                    {/* Continue button */}
                    {showAllMessages && (
                      <motion.button
                        className="mt-6 px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors glow-effect"
                        onClick={(e) => {
                          e.stopPropagation();
                          onComplete();
                        }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", bounce: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Final Surprise 🎆
                      </motion.button>
                    )}

                    {/* Progress dots */}
                    <div className="flex justify-center space-x-2 mt-4">
                      {birthdayMessages.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index <= currentMessageIndex ? 'bg-pink-500' : 'bg-pink-200'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating elements inside card */}
              <motion.div
                className="absolute top-2 left-2 text-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                💕
              </motion.div>
              
              <motion.div
                className="absolute bottom-2 right-2 text-lg"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                💖
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative text in bottom right corner */}
      <motion.div
        className="absolute bottom-4 right-4 text-right"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <p className="text-white/80 text-lg dancing-script">
          Made with love by Abi💝
        </p>
      </motion.div>
    </div>
  );
};

export default WishesCard;
