import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const SuccessAnimation = () => {
  type Star = {
    id: number;
    angle: number;
    velocity: number;
    size: number;
    color: string;
    corner: 'left' | 'right';
  };

  const [stars, setStars] = useState<Star[]>([]);

  // Vibrant color palette for stars
  const colors = ['#FFD700', '#FF69B4', '#00CED1', '#FF6347', '#9B59B6'];

  const generateStar = (corner: 'left' | 'right') => ({
    id: Date.now() + Math.random(),
    angle: (Math.random() * 60) + (corner === 'left' ? 0 : 120), // Angle spread for each corner
    velocity: Math.random() * 15 + 10, // Random velocity
    size: Math.random() * 15 + 10, // Random size
    color: colors[Math.floor(Math.random() * colors.length)],
    corner
  });

  const createBurst = (corner: 'left' | 'right') => {
    const newStars = Array.from({ length: 15 }, () => generateStar(corner));
    setStars(prev => [...prev, ...newStars]);
  };

  useEffect(() => {
    // Create initial bursts from both corners
    createBurst('left');
    createBurst('right');

    // Create additional bursts with delay
    const burstInterval = setInterval(() => {
      createBurst(Math.random() > 0.5 ? 'left' : 'right');
    }, 500);

    // Cleanup after 2 seconds
    const cleanup = setTimeout(() => {
      clearInterval(burstInterval);
      setStars([]);
    }, 2000);

    return () => {
      clearInterval(burstInterval);
      clearTimeout(cleanup);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {stars.map((star) => {
          // Calculate trajectory based on angle and velocity
          const distance = star.velocity * 50;
          const radians = (star.angle * Math.PI) / 180;
          const targetX = Math.cos(radians) * distance;
          const targetY = -Math.sin(radians) * distance; // Negative for upward movement

          return (
            <motion.div
              key={star.id}
              initial={{
                x: star.corner === 'left' ? 40 : window.innerWidth - 40,
                y: window.innerHeight - 40,
                scale: 0,
                opacity: 0
              }}
              animate={{
                x: star.corner === 'left' ? 40 + targetX : (window.innerWidth - 40) + targetX,
                y: window.innerHeight - 40 + targetY,
                scale: [0, 1.2, 1],
                opacity: [0, 1, 0]
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                ease: "easeOut",
                opacity: {
                  duration: 1.5,
                  times: [0, 0.2, 1]
                },
                scale: {
                  duration: 0.3,
                  times: [0, 0.2, 0.4]
                }
              }}
              style={{
                position: 'absolute',
                width: `${star.size}px`,
                height: `${star.size}px`,
                color: star.color
              }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0L14.91 7.5H23.17L16.84 12.5L19.75 20L12 15.5L4.25 20L7.16 12.5L0.83 7.5H9.09L12 0Z" />
              </svg>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
};

export default SuccessAnimation;