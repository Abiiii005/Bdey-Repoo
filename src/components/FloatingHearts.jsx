import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingHearts = ({ isActive, count = 10 }) => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    if (isActive) {
      const newHearts = Array.from({ length: count }, (_, i) => ({
        id: Date.now() + i,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight,
      }));
      setHearts(prev => [...prev, ...newHearts]);

      // Remove hearts after animation
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => !newHearts.find(newHeart => newHeart.id === heart.id)));
      }, 3000);
    }
  }, [isActive, count]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute text-red-500 text-2xl"
            style={{ left: heart.x, top: heart.y }}
            initial={{ opacity: 1, y: 0, scale: 0 }}
            animate={{ 
              opacity: 0, 
              y: -200, 
              scale: 1,
              rotate: 360 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "easeOut" }}
          >
            💖
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingHearts;
