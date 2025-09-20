import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Celebration = ({ onComplete }) => {
  const [showCake, setShowCake] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  useEffect(() => {
    // Trigger confetti immediately
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Show cake after 1 second
    setTimeout(() => setShowCake(true), 1000);
    
    // Show balloons after 2 seconds
    setTimeout(() => setShowBalloons(true), 2000);

    // Trigger more confetti
    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 2000);

    return () => {
      clearInterval(confettiInterval);
    };
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-celebration-gradient flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
              delay: i * 0.1,
            }}
          >
            {['🎉', '🎈', '🎂', '🍰', '🎀', '⭐'][i % 6]}
          </motion.div>
        ))}
      </div>

      {/* Main celebration content */}
      <motion.div
        className="text-center z-10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-white mb-8 dancing-script"
          animate={{
            textShadow: [
              "0 0 20px rgba(255,255,255,0.8)",
              "0 0 40px rgba(255,255,255,1)",
              "0 0 20px rgba(255,255,255,0.8)"
            ],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Happie B'Dey Ambiii💖🎉
        </motion.h1>

        {/* Cake Animation */}
        {showCake && (
          <motion.div
            className="relative mb-8"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
          >
            <div className="text-8xl md:text-9xl">🎂</div>
            
            {/* Candle flames */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="text-2xl candle-flame"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  🕯️
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Floating Balloons */}
        {showBalloons && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-6xl"
                style={{
                  left: `${10 + i * 10}%`,
                  bottom: -100,
                }}
                animate={{
                  y: [-100, -window.innerHeight - 100],
                  x: [0, Math.sin(i) * 50],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8 + Math.random() * 4,
                  ease: "easeOut",
                  delay: i * 0.2,
                }}
              >
                🎈
              </motion.div>
            ))}
          </div>
        )}

        <motion.button
          className="mt-8 px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors glow-effect"
          onClick={onComplete}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Continue to Photos 📸
        </motion.button>
      </motion.div>

      {/* Falling chocolates and stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`falling-${i}`}
            className="absolute text-3xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: -50,
            }}
            animate={{
              y: window.innerHeight + 100,
              rotate: 360,
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              ease: "linear",
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatDelay: Math.random() * 3,
            }}
          >
            {['🍫', '⭐', '🌟', '💫'][i % 4]}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Celebration;
