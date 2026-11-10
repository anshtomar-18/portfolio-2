import React from "react";
import { motion } from "framer-motion";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Certifications.scss";

// SIH Custom Vector Logo
const SIHLogo = () => (
   <svg viewBox="0 0 220 80" className="cert-logo-svg cert-logo-svg--sih">
      {/* Lightbulb Icon with Brain/Circuits */}
      <g transform="translate(15, 8)">
         <path
            d="M 25 5 C 14 5 5 14 5 25 C 5 32 9 38 15 42 L 15 48 L 35 48 L 35 42 C 41 38 45 32 45 25 C 45 14 36 5 25 5 Z"
            fill="none"
            stroke="#ff9800"
            strokeWidth="3"
         />
         <path d="M 18 51 L 32 51 L 28 56 L 22 56 Z" fill="#ff9800" />
         {/* Left hemisphere (Orange) */}
         <path d="M 23 10 C 16 12 10 18 10 25 C 10 30 13 34 17 38 L 23 38 Z" fill="#ff7043" opacity="0.85" />
         {/* Right hemisphere (Green) */}
         <path d="M 27 10 C 34 12 40 18 40 25 C 40 30 37 34 33 38 L 27 38 Z" fill="#4caf50" opacity="0.85" />
      </g>
      {/* SIH Text */}
      <text x="75" y="32" className="sih-text-bold">Smart India</text>
      <text x="75" y="52" className="sih-text-bold">Hackathon</text>
      <text x="75" y="66" className="sih-text-sub">SIH 2026 FINALIST</text>
   </svg>
);

// Deloitte Vector Logo
const DeloitteLogo = () => (
   <div className="cert-logo-deloitte">
      <span className="deloitte-word">
         Deloitte<span className="deloitte-dot">.</span>
      </span>
   </div>
);

// Microsoft 4-Color Grid Logo
const MicrosoftLogo = () => (
   <div className="cert-logo-microsoft">
      <svg viewBox="0 0 48 48" className="ms-svg">
         <rect x="2" y="2" width="20" height="20" fill="#f25022" rx="2" />
         <rect x="26" y="2" width="20" height="20" fill="#7fba00" rx="2" />
         <rect x="2" y="26" width="20" height="20" fill="#00a4ef" rx="2" />
         <rect x="26" y="26" width="20" height="20" fill="#ffb900" rx="2" />
      </svg>
   </div>
);

const certificationsData = [
   {
      id: "sih",
      title: "Smart India Hackathon 2026",
      subtitle: "Finalist & Cleared College Round 2025",
      issuer: "Ministry of Education & AICTE",
      badge: "National Finalist",
      logo: <SIHLogo />,
      bannerBg: "rgba(255, 112, 67, 0.08)",
      accentColor: "#ff7043",
   },
   {
      id: "deloitte",
      title: "Data Analytics Virtual Experience",
      subtitle: "Deloitte Certified",
      issuer: "Deloitte Australia / Forage",
      badge: "Industry Certified",
      logo: <DeloitteLogo />,
      bannerBg: "rgba(134, 188, 37, 0.08)",
      accentColor: "#86bc25",
   },
   {
      id: "genai",
      title: "Generative AI",
      subtitle: "Microsoft & LinkedIn Certified",
      issuer: "Microsoft & LinkedIn Career Essentials",
      badge: "Official Certificate",
      logo: <MicrosoftLogo />,
      bannerBg: "rgba(0, 164, 239, 0.12)",
      accentColor: "#00a4ef",
   },
];

function Certifications() {
   return (
      <section className="app__certifications-section" aria-label="Certifications">
         <h2 className="head-text">
            Certifications &amp; <span>Achievements</span>
         </h2>
         <p className="certifications-subtitle">
            Verified credentials, national hackathon recognitions, and professional certificates
         </p>

         <div className="app__certifications-grid">
            {certificationsData.map((item, index) => (
               <motion.div
                  className="cert-card"
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, scale: 1.02 }}
               >
                  {/* Top Logo Container / Banner */}
                  <div
                     className="cert-card__banner"
                     style={{ background: item.bannerBg }}
                  >
                     <div className="cert-card__badge" style={{ borderColor: item.accentColor }}>
                        <span className="badge-dot" style={{ backgroundColor: item.accentColor }} />
                        {item.badge}
                     </div>
                     <div className="cert-card__logo-wrap">
                        {item.logo}
                     </div>
                  </div>

                  {/* Card Content */}
                  <div className="cert-card__body">
                     <h3 className="cert-card__title">{item.title}</h3>
                     <p className="cert-card__subtitle">{item.subtitle}</p>
                     <div className="cert-card__footer">
                        <span className="issuer-label">{item.issuer}</span>
                     </div>
                  </div>
               </motion.div>
            ))}
         </div>
      </section>
   );
}

export default AppWrap(
   MotionWrap(Certifications, "app__certifications"),
   "certifications",
   "app__primarybg"
);
