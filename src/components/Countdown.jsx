import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { calculateTimeLeft } from '../utils/calculateTimeLeft';
import Sparkles from './Sparkles';

const Countdown = ({ targetDate, onComplete }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(newTimeLeft);
      
      // Don't auto-complete - let user click the button manually
      if (Object.keys(newTimeLeft).length === 0) {
        clearInterval(timer);
        // Removed automatic onComplete() call
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const timeComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) return;

    timeComponents.push(
      <motion.div
        key={interval}
        className="flex flex-col items-center mx-2 sm:mx-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 * timeComponents.length }}
      >
        <motion.div
          className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-white/30"
          whileHover={{ scale: 1.05 }}
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(255,255,255,0.2)",
              "0 0 40px rgba(255,255,255,0.4)",
              "0 0 20px rgba(255,255,255,0.2)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.span 
            className="text-4xl sm:text-6xl font-bold text-white"
            key={timeLeft[interval]} // This will trigger animation on value change
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {timeLeft[interval]}
          </motion.span>
        </motion.div>
        <span className="text-white text-lg sm:text-xl mt-2 capitalize dancing-script">
          {interval}
        </span>
      </motion.div>
    );
  });

  return (
    <div className="min-h-screen bg-birthday-gradient flex flex-col items-center justify-center relative overflow-hidden">
      <Sparkles count={60} />
      
      <motion.div
        className="text-center z-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1 
          className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 dancing-script"
          animate={{ 
            textShadow: [
              "0 0 20px rgba(255,255,255,0.5)",
              "0 0 40px rgba(255,255,255,0.8)",
              "0 0 20px rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          B'Dey Cntdownn 🎂
        </motion.h1>
        
        <motion.p 
          className="text-xl sm:text-2xl text-white/90 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Time until the special day...
        </motion.p>

        <div className="flex flex-wrap justify-center items-center">
          {timeComponents.length ? (
            <motion.div
              className="flex flex-wrap justify-center items-center"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            >
              {timeComponents}
            </motion.div>
          ) : (
            <motion.div
              className="text-6xl font-bold text-white dancing-script"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              🎉 It's Time! 🎉
            </motion.div>
          )}
        </div>

        {/* Only show button when countdown is finished */}
        {timeComponents.length === 0 && (
          <motion.button
            className="mt-8 px-8 py-4 bg-pink-500 text-white rounded-full text-xl font-semibold shadow-lg hover:bg-pink-600 transition-colors"
            onClick={onComplete}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 0.5, repeat: Infinity }}
          >
            Let's Celebrate! 🎉
          </motion.button>
        )}
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl"
        animate={{ 
          rotate: 360,
          y: [0, -20, 0]
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        🎈
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-5xl"
        animate={{ 
          rotate: -360,
          y: [0, -30, 0]
        }}
        transition={{ 
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        🎀
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-5 text-4xl"
        animate={{ 
          x: [0, 20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        ✨
      </motion.div>
    </div>
  );
};

export default Countdown;
