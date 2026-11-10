import React from "react";
import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../constants";
import "./Contact.scss";

function Contact() {
   return (
      <>
         <h2 className="head-text">Let's Connect!!</h2>
         <div className="app__footer-cards">
            <div className="app__footer-card">
               <img src={images.email} alt="email" />
               <a href="mailto:somanyridhima41@gmail.com" className="p-text">
                  somanyridhima41@gmail.com
               </a>
            </div>

            <div className="app__footer-card">
               <img src={images.mobile} alt="phone" />
               <a href="tel:+917027211978" className="p-text">
                  +91 7027211978
               </a>
            </div>

            <div className="app__footer-card">
               <img src={images.linkedln} alt="linkedin" />
               <a
                  href="https://www.linkedin.com/in/ridima-somany-745303405/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-text"
               >
                  LinkedIn
               </a>
            </div>

            <div className="app__footer-card">
               <img src={images.github} alt="github" />
               <a
                  href="https://github.com/somanyridhima41-ux"
                  target="_blank"
                  rel="noreferrer"
                  className="p-text"
               >
                  GitHub
               </a>
            </div>
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(Contact, "app__footer"),
   "contact",
   "app__whitebg"
);
