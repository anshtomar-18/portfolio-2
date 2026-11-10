import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

function SocialMedia() {
   return (
      <div className="app__social">
         <div>
            <a
               href="https://github.com/somanyridhima41-ux"
               target="_blank"
               rel="noreferrer"
               aria-label="GitHub"
            >
               <BsGithub />
            </a>
         </div>
         <div>
            <a
               href="https://www.linkedin.com/in/ridima-somany-745303405/"
               target="_blank"
               rel="noreferrer"
               aria-label="LinkedIn"
            >
               <BsLinkedin />
            </a>
         </div>
         <div>
            <a
               href="mailto:somanyridhima41@gmail.com"
               aria-label="Email"
            >
               <SiGmail />
            </a>
         </div>
      </div>
   );
}

export default SocialMedia;
