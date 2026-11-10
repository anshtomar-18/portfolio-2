import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Preloader.scss";

const words = [
   "Hello",
   "नमस्ते",
   "Bonjour",
   "Hola",
   "Ciao",
   "こんにちは",
   "안녕하세요",
   "Olá",
   "Привет",
   "مرحبا",
   "Hallo",
];

// Dennis Snellenberg / Apple style curtain lift easing
const slideUpVariants = {
   initial: {
      y: 0,
   },
   exit: {
      y: "-115%",
      transition: {
         duration: 0.85,
         ease: [0.76, 0, 0.24, 1],
      },
   },
};

function Preloader() {
   const [index, setIndex] = useState(0);
   const [isFinished, setIsFinished] = useState(false);

   useEffect(() => {
      // Ensure viewport starts at the top
      window.scrollTo(0, 0);

      // Lock scrolling while preloader is active
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Check if user prefers reduced motion
      const prefersReducedMotion =
         window.matchMedia &&
         window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
         const quickTimer = setTimeout(() => {
            setIsFinished(true);
         }, 250);
         return () => clearTimeout(quickTimer);
      }

      // Final word hold before lifting curtain
      if (index === words.length - 1) {
         const finalHoldTimer = setTimeout(() => {
            setIsFinished(true);
         }, 280);
         return () => clearTimeout(finalHoldTimer);
      }

      // Word 0 holds 260ms; middle words cycle rapidly at 140ms
      const delay = index === 0 ? 260 : 140;
      const cycleTimer = setTimeout(() => {
         setIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(cycleTimer);
   }, [index]);

   // Restore scrolling once curtain transition finishes
   const handleExitComplete = () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
   };

   return (
      <AnimatePresence onExitComplete={handleExitComplete}>
         {!isFinished && (
            <motion.div
               className="preloader"
               variants={slideUpVariants}
               initial="initial"
               exit="exit"
               aria-live="polite"
               aria-label="Loading portfolio"
            >
               {/* Centered Multilingual Greeting */}
               <div className="preloader__content">
                  <span className="preloader__dot" aria-hidden="true">
                     •
                  </span>
                  <motion.h1
                     key={index}
                     className="preloader__text"
                     initial={{ opacity: 0, y: 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.08, ease: "easeOut" }}
                  >
                     {words[index]}
                  </motion.h1>
               </div>

               {/* Dennis Snellenberg curved bottom SVG curtain */}
               <svg
                  className="preloader__curve"
                  viewBox="0 0 1000 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
               >
                  <path
                     d="M0 0 L1000 0 Q500 100 0 0 Z"
                     fill="#000000"
                  />
               </svg>
            </motion.div>
         )}
      </AnimatePresence>
   );
}

export default Preloader;
