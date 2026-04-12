import React from 'react';
import { motion, useAnimationControls, useScroll, useMotionValueEvent } from 'framer-motion';

export default function Polaroid({ src, alt, origin = 'left', top, rotation = -5, className = '' }) {
  const isLeft = origin === 'left';
  const controls = useAnimationControls();
  const ref = React.useRef(null);
  const [isHovered, setIsHovered] = React.useState(false);
  const [phase, setPhase] = React.useState('hidden'); // hidden | visible | retreated

  // Resting positions
  const hidden = isLeft ? "calc(-100% + 15px)" : "calc(100% - 15px)";
  const peek = isLeft ? "calc(-100% + 90px)" : "calc(100% - 90px)";
  const full = isLeft ? "20px" : "-20px";
  const hoverX = isLeft ? "10px" : "-10px";

  // Track how far the element has scrolled through the viewport
  // scrollYProgress: 0 = element entering from bottom, 1 = element leaving out the top
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (isHovered) return;

    // Swoop in when entering the viewport
    if (progress > 0.25 && progress < 0.55 && phase !== 'visible') {
      setPhase('visible');
      controls.start({
        x: full,
        transition: { duration: 0.8, ease: "easeOut" }
      });
    }
    // Retreat gracefully while still within view
    else if (progress >= 0.55 && phase !== 'retreated') {
      setPhase('retreated');
      controls.start({
        x: peek,
        transition: { duration: 1.2, ease: "easeInOut" }
      });
    }
    // Reset if scrolled back above
    else if (progress <= 0.25 && phase !== 'hidden') {
      setPhase('hidden');
      controls.start({
        x: hidden,
        transition: { duration: 0.5, ease: "easeIn" }
      });
    }
  });

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start({
      x: hoverX,
      y: -5,
      rotate: isLeft ? rotation + 3 : rotation - 3,
      scale: 1.15,
      zIndex: 50,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    });
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start({
      x: peek,
      y: 0,
      rotate: rotation,
      scale: 1,
      zIndex: 10,
      transition: { type: "spring", stiffness: 400, damping: 25 }
    });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ x: hidden, y: 0, rotate: rotation, scale: 1, zIndex: 10 }}
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onTapStart={handleHoverStart}
      style={{
        position: 'absolute',
        top: top,
        ...(isLeft ? { left: 0 } : { right: 0 }),
        backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22/%3E%3C/svg%3E')",
        borderRadius: "4px"
      }}
      className={`bg-[#f0f0f0] p-3 pb-12 shadow-lg w-32 md:w-52 flex-shrink-0 cursor-pointer ${className}`}
    >
      <div className="bg-[#111] w-full aspect-[46/62] overflow-hidden shadow-inner flex items-center justify-center">
        {src ? (
          <img src={src} alt={alt} className="w-full h-full object-cover pointer-events-none" />
        ) : (
          <span className="text-gray-500 font-mono text-xs tracking-widest pointer-events-none">NO FILM LOADED</span>
        )}
      </div>
    </motion.div>
  );
}
