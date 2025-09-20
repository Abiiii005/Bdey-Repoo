import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import FloatingHearts from './FloatingHearts';

const TransitionPage = ({ onComplete, recipientName = "Baby" }) => {
  const [showButton, setShowButton] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  const handleButtonClick = () => {
    setShowHearts(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 flex items-center justify-center relative overflow-hidden">
      <FloatingHearts isActive={showHearts} count={30} />
      
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              delay: i * 0.3,
            }}
          >
            {['🎁', '💝', '💖', '✨', '🌟', '💫', '🎀', '🌹'][i % 8]}
          </motion.div>
        ))}
      </div>

      {/* Sparkle effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="text-center z-10 max-w-4xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Main heading */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white dancing-script mb-6">
            🎉 Happie B'Dey {recipientName}! 🎉
          </h1>
        </motion.div>

        {/* Typewriter message */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 mx-auto max-w-3xl border border-white/30">
            <TypeAnimation
              sequence={[
                '',
                1000,
                'Hey Beautiful! 💕',
                1500,
                'Hey Beautiful! 💕\nYour special day is finally here! 🎊',
                1500,
                'Hey Beautiful! 💕\nYour special day is finally here! 🎊\nI have prepared something very special for you... ✨',
                1500,
                'Hey Beautiful! 💕\nYour special day is finally here! 🎊\nI have prepared something very special for you... ✨\nTap the button below to discover all the wonderful things I have done for you! 💖',
                2000,
                () => setShowButton(true)
              ]}
              wrapper="p"
              cursor={true}
              repeat={0}
              style={{
                fontSize: '1.5rem',
                lineHeight: '1.8',
                color: 'white',
                textAlign: 'center',
                whiteSpace: 'pre-line'
              }}
            />
          </div>
        </motion.div>

        {/* Button */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 20,
                delay: 0.3 
              }}
            >
              <motion.button
                onClick={handleButtonClick}
                className="relative group bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold py-6 px-12 rounded-full text-xl shadow-2xl overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-400 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                {/* Button text */}
                <span className="relative z-10 flex items-center gap-3">
                  <motion.span
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    🎁
                  </motion.span>
                  Discover My Surprises
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    💖
                  </motion.span>
                </span>

                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0, 0.3, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Decorative hearts */}
        <motion.div
          className="absolute top-10 left-10"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          <span className="text-6xl">💕</span>
        </motion.div>

        <motion.div
          className="absolute top-20 right-20"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -10, 10, 0]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        >
          <span className="text-5xl">🌟</span>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-20"
          animate={{ 
            x: [0, 20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        >
          <span className="text-4xl">🎀</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TransitionPage;
