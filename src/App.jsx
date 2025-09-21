import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Countdown from './components/Countdown';
import TransitionPage from './components/TransitionPage';
import Celebration from './components/Celebration';
import Slideshow from './components/Slideshow';
import WishesCard from './components/WishesCard';
import SurpriseEnding from './components/SurpriseEnding';
import FloatingHearts from './components/FloatingHearts';

function App() {
  const [currentScene, setCurrentScene] = useState('countdown');
  const [showCursorHearts, setShowCursorHearts] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Configuration - Update these values
  const config = {
    targetBirthday: '2025-09-22T00:00:00', // Change this to the actual birthday date
    recipientName: 'Baby', // Change this to the recipient's name
  };

  // Mouse tracking for cursor hearts
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setShowCursorHearts(true);
      setTimeout(() => setShowCursorHearts(false), 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  // Scene transition handlers
  const handleCountdownComplete = () => {
    setCurrentScene('transition');
  };

  const handleTransitionComplete = () => {
    setCurrentScene('celebration');
  };

  const handleCelebrationComplete = () => {
    setCurrentScene('slideshow');
  };

  const handleSlideshowComplete = () => {
    setCurrentScene('wishes');
  };

  const handleWishesComplete = () => {
    setCurrentScene('surprise');
  };

  // Scene transition animations
  const sceneVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.2 },
  };

  const sceneTransition = {
    duration: 1,
    ease: "easeInOut",
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Cursor hearts effect */}
      <FloatingHearts 
        isActive={showCursorHearts} 
        count={5} 
      />

      {/* Custom cursor trail */}
      <motion.div
        className="fixed pointer-events-none z-50 text-red-400"
        style={{
          left: cursorPosition.x - 10,
          top: cursorPosition.y - 10,
        }}
        animate={{
          scale: showCursorHearts ? [1, 1.5, 1] : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        ❤️
      </motion.div>

      {/* Scene Renderer */}
      <AnimatePresence mode="wait">
        {currentScene === 'countdown' && (
          <motion.div
            key="countdown"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={sceneTransition}
          >
            <Countdown
              targetDate={config.targetBirthday}
              onComplete={handleCountdownComplete}
            />
          </motion.div>
        )}

        {currentScene === 'transition' && (
          <motion.div
            key="transition"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={sceneTransition}
          >
            <TransitionPage
              recipientName={config.recipientName}
              onComplete={handleTransitionComplete}
            />
          </motion.div>
        )}

        {currentScene === 'celebration' && (
          <motion.div
            key="celebration"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={sceneTransition}
          >
            <Celebration onComplete={handleCelebrationComplete} />
          </motion.div>
        )}

        {currentScene === 'slideshow' && (
          <motion.div
            key="slideshow"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={sceneTransition}
          >
            <Slideshow onComplete={handleSlideshowComplete} />
          </motion.div>
        )}

        {currentScene === 'wishes' && (
          <motion.div
            key="wishes"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={sceneTransition}
          >
            <WishesCard
              recipientName={config.recipientName}
              onComplete={handleWishesComplete}
            />
          </motion.div>
        )}

        {currentScene === 'surprise' && (
          <motion.div
            key="surprise"
            variants={sceneVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={sceneTransition}
          >
            <SurpriseEnding recipientName={config.recipientName} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background gradient that shifts colors */}
      <div className="fixed inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #ffecd2 0%, #fcb69f 50%, #d299c2 100%)",
              "linear-gradient(45deg, #a8edea 0%, #fed6e3 50%, #d299c2 100%)",
              "linear-gradient(45deg, #ffecd2 0%, #fcb69f 50%, #d299c2 100%)",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  );
}

export default App;
