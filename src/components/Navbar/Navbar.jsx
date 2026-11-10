import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";

const navItems = ["home", "about", "work", "skills", "certifications", "contact"];

function Navbar() {
   const [toggle, setToggle] = useState(false);
   const [scrolled, setScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 60) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   return (
      <nav className={`app__navbar ${scrolled ? "app__navbar--scrolled" : ""}`}>
         <div className="app__navbar-logo">
            <a href="#home" className="app__navbar-brand" aria-label="Ridima Somany">
               <span className="brand-highlight">R</span>IDIMA
               <span className="brand-sub"> SOMANY</span>
            </a>
         </div>
         <ul className="app__navbar-links">
            {navItems.map((item) => (
               <li key={`link-${item}`} className="app__flex p-text">
                  <div />
                  <a href={`#${item}`}>{item}</a>
               </li>
            ))}
         </ul>
         <div className="app__navbar-menu">
            <HiMenuAlt4 onClick={() => setToggle(true)} />
            {toggle && (
               <motion.div
                  whileInView={{ x: [300, 0] }}
                  transition={{ duration: 0.85, ease: "easeOut" }}
               >
                  <HiX onClick={() => setToggle(false)} />
                  <ul>
                     {navItems.map((item) => (
                        <li key={item}>
                           <a
                              href={`#${item}`}
                              onClick={() => setToggle(false)}
                           >
                              {item}
                           </a>
                        </li>
                     ))}
                  </ul>
               </motion.div>
            )}
         </div>
      </nav>
   );
}

export default Navbar;
