import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { BsGithub, BsLinkedin, BsChevronDown } from "react-icons/bs";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Header.scss";

// 1. Rotating Circular Editorial Badge (Top-Right End)
const RotatingEditorialSeal = () => (
   <motion.div
      className="editorial-rotating-seal"
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
      whileHover={{ scale: 1.12 }}
   >
      <div className="editorial-rotating-seal__container">
         <svg viewBox="0 0 100 100" className="editorial-rotating-seal__svg">
            <defs>
               <path
                  id="editorialCirclePath"
                  d="M 50, 50 m -36, 0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
               />
            </defs>
            <text className="editorial-rotating-seal__text">
               <textPath href="#editorialCirclePath" startOffset="0%">
                  • SOFTWARE ENGINEER • CREATIVE DEVELOPER • 2026
               </textPath>
            </text>
         </svg>
         <div className="editorial-rotating-seal__core">
            <span className="seal-star">✦</span>
         </div>
      </div>
   </motion.div>
);

// 2. Interactive Live Status & Real-time Clock Badge (Top-Left End)
const LiveStatusBadge = () => {
   const [timeStr, setTimeStr] = useState("");

   useEffect(() => {
      const updateClock = () => {
         const now = new Date();
         setTimeStr(
            now.toLocaleTimeString("en-US", {
               hour12: true,
               hour: "2-digit",
               minute: "2-digit",
               second: "2-digit",
               timeZone: "Asia/Kolkata",
            })
         );
      };
      updateClock();
      const timer = setInterval(updateClock, 1000);
      return () => clearInterval(timer);
   }, []);

   return (
      <motion.div
         className="editorial-status-pill"
         initial={{ opacity: 0, y: -15 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
      >
         <div className="editorial-status-pill__pulse" aria-hidden="true">
            <span className="pulse-dot" />
            <span className="pulse-ring" />
         </div>
         <span className="editorial-status-pill__status">AVAILABLE FOR WORK</span>
         <span className="editorial-status-pill__sep">/</span>
         <span className="editorial-status-pill__clock">DELHI {timeStr}</span>
      </motion.div>
   );
};

// 3. Floating 3D Ambient Star Accent
const FloatingStar = ({ style, delay = 0 }) => (
   <motion.span
      className="editorial-hero__star"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
         opacity: [0.3, 0.9, 0.3],
         scale: [0.8, 1.2, 0.8],
         rotate: [0, 90, 180],
      }}
      transition={{
         duration: 6,
         delay,
         repeat: Infinity,
         ease: "easeInOut",
      }}
      aria-hidden="true"
   >
      ✦
   </motion.span>
);

function Header() {
   const heroImgSrc =
      images.heroPortrait ||
      (process.env.PUBLIC_URL
         ? `${process.env.PUBLIC_URL}/hero-portrait.jpg?v=2`
         : "/hero-portrait.jpg?v=2");

   // Interactive 3D Cursor Physics Parallax
   const mouseX = useMotionValue(0);
   const mouseY = useMotionValue(0);

   const springConfig = { damping: 20, stiffness: 100, mass: 0.8 };
   const smoothX = useSpring(mouseX, springConfig);
   const smoothY = useSpring(mouseY, springConfig);

   // Inverted parallax for background
   const bgX = useTransform(smoothX, [-400, 400], [18, -18]);
   const bgY = useTransform(smoothY, [-400, 400], [12, -12]);

   // 3D Perspective Rotation for centerpiece
   const rotateX = useTransform(smoothY, [-400, 400], [8, -8]);
   const rotateY = useTransform(smoothX, [-400, 400], [-10, 10]);

   // Depth translations
   const centerTextX = useTransform(smoothX, [-400, 400], [-14, 14]);
   const centerTextY = useTransform(smoothY, [-400, 400], [-10, 10]);
   const creativeTilt = useTransform(smoothX, [-400, 400], [-6, 2]);

   const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
   };

   const handleMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
   };

   return (
      <section
         className="editorial-hero"
         aria-label="Hero Section"
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
      >
         {/* 1. Full-Bleed Monochrome Background Portrait with 3D Depth */}
         <motion.img
            src={heroImgSrc}
            alt="Ridima Somany - Editorial Portrait"
            className="editorial-hero__portrait"
            style={{ x: bgX, y: bgY }}
            onError={(e) => {
               e.currentTarget.onerror = null;
               e.currentTarget.src = images.heroPortrait || "/hero-portrait.jpg";
            }}
         />

         {/* Radial & bottom vignette overlay for high contrast */}
         <div className="editorial-hero__vignette" />

         {/* Seamless dark bottom transition dissolve into the dark theme */}
         <div className="editorial-hero__bottom-transition" aria-hidden="true" />

         {/* Floating 3D Sparkle Elements */}
         <FloatingStar style={{ top: "18%", left: "14%" }} delay={0} />
         <FloatingStar style={{ top: "28%", right: "12%" }} delay={1.5} />
         <FloatingStar style={{ bottom: "25%", left: "22%" }} delay={3} />
         <FloatingStar style={{ bottom: "20%", right: "20%" }} delay={2} />

         {/* Top Accents: Live Status Badge (left) & Rotating Stamp (right) */}
         <div className="editorial-hero__top-accents">
            <LiveStatusBadge />

            {/* Top Center Editorial Edition Tag */}
            <div className="editorial-hero__edition-tag">
               <span>VOL. 01 // ED. 2026</span>
               <span className="dot">•</span>
               <span>28.6139° N, 77.2090° E</span>
            </div>

            <RotatingEditorialSeal />
         </div>

         {/* 2. Centerpiece Split-Layer "PORTFOLIO" Headline with True 3D Tilt */}
         <div className="editorial-hero__3d-stage">
            <motion.div
               className="editorial-hero__centerpiece"
               style={{
                  rotateX,
                  rotateY,
                  x: centerTextX,
                  y: centerTextY,
                  transformStyle: "preserve-3d",
               }}
            >
               {/* Micro Editorial Label above Headline */}
               <motion.div
                  className="editorial-hero__micro-label"
                  style={{ transform: "translateZ(35px)" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 }}
               >
                  <span>— SELECTED WORKS & ARCHIVE // 2024–2028 —</span>
               </motion.div>

               {/* 3. Floating 3D "Creative" Script Callout Box */}
               <motion.div
                  className="editorial-hero__creative-box"
                  style={{
                     rotate: creativeTilt,
                     transform: "translateZ(85px)",
                  }}
                  initial={{ opacity: 0, scale: 0.85, y: -20 }}
                  animate={{
                     opacity: 1,
                     scale: 1,
                     y: [0, -8, 0],
                  }}
                  transition={{
                     opacity: { duration: 0.8, delay: 0.35 },
                     scale: { duration: 0.8, delay: 0.35 },
                     y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.08 }}
               >
                  <span>Creative</span>
                  <div className="shine-sweep" />
               </motion.div>

               {/* Split-Typography Headline with Layered 3D Depth */}
               <motion.h1
                  className="editorial-hero__headline"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
               >
                  <span
                     className="editorial-hero__por"
                     style={{ transform: "translateZ(25px)" }}
                  >
                     POR
                  </span>
                  <span
                     className="editorial-hero__tf"
                     style={{ transform: "translateZ(65px)" }}
                  >
                     TF
                  </span>
                  <span
                     className="editorial-hero__olio"
                     style={{ transform: "translateZ(25px)" }}
                  >
                     OLIO
                  </span>
               </motion.h1>
            </motion.div>
         </div>

         {/* 4. Bottom Editorial Metadata Bar */}
         <div className="editorial-hero__metadata-bar">
            {/* Bottom-Left: Name & Role */}
            <motion.div
               className="editorial-hero__meta-left"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            >
               <p className="editorial-hero__name">Ridima Somany</p>
               <p className="editorial-hero__role">Software Engineer</p>
            </motion.div>

            {/* Bottom-Center: Animated Smooth Slide Transition Button */}
            <motion.a
               href="#about"
               className="editorial-hero__scroll-down"
               aria-label="Scroll to about section"
               initial={{ opacity: 0, y: -10 }}
               animate={{ opacity: 1, y: [0, 6, 0] }}
               transition={{
                  opacity: { duration: 0.8, delay: 0.8 },
                  y: { repeat: Infinity, duration: 2.2, ease: "easeInOut" },
               }}
            >
               <span className="editorial-hero__scroll-text">EXPLORE</span>
               <BsChevronDown className="editorial-hero__scroll-icon" />
            </motion.a>

            {/* Bottom-Right: Contact info & monochrome icon links */}
            <motion.div
               className="editorial-hero__meta-right"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            >
               <a
                  href="mailto:somanyridhima41@gmail.com"
                  className="editorial-hero__email"
               >
                  somanyridhima41@gmail.com
               </a>
               <p className="editorial-hero__phone">+917027211978</p>
               <div className="editorial-hero__social-icons">
                  <a
                     href="https://github.com/somanyridhima41-ux"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="GitHub - Ridima Somany"
                     className="editorial-hero__icon-link"
                  >
                     <BsGithub />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/ridima-somany-745303405/"
                     target="_blank"
                     rel="noreferrer"
                     aria-label="LinkedIn - Ridima Somany"
                     className="editorial-hero__icon-link"
                  >
                     <BsLinkedin />
                  </a>
               </div>
            </motion.div>
         </div>
      </section>
   );
}

export default AppWrap(Header, "home");
