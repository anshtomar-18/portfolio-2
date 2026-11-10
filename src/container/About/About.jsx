import React from "react";
import { motion } from "framer-motion";
import "./About.scss";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";

function About() {
   const abouts = [
      {
         title: "Software Engineer",
         description:
            "Passionate developer building high-performance web and mobile platforms with Next.js, React.js, TypeScript, Tailwind CSS, Node.js, and Supabase.",
         imageUrl: images.about01,
      },
      {
         title: "AI & Data Solutions",
         description:
            "Architecting intelligent applications using LLM API integrations, RAG pipelines, LangChain, vector databases (pgvector/Pinecone), and prompt engineering.",
         imageUrl: images.about02,
      },
      {
         title: "Java Intern @ CantiLever",
         description:
            "Developed full-featured banking systems with auth, deposits, and transaction histories, along with real-time socket chat applications using Java, JDBC, and MySQL.",
         imageUrl: images.about03,
      },
      {
         title: "Education & Achievements",
         description:
            "B.Tech in Information Technology at Maharaja Agrasen Institute of Technology (8.8 CGPA). Smart India Hackathon Finalist & Deloitte Analytics Certified.",
         imageUrl: images.about04,
      },
   ];

   return (
      <>
         <h2 className="head-text">
            About
            <span> Me!</span>
         </h2>
         <div className="app__profiles">
            {abouts.map((about, index) => (
               <motion.div
                  className="app__profile-item"
                  key={about.title + index}
                  whileInView={{ opacity: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5, type: "tween" }}
               >
                  <img src={about.imageUrl} alt={about.title} />
                  <h2 className="bold-text" style={{ marginTop: 20 }}>
                     {about.title}
                  </h2>
                  <p className="p-text" style={{ marginTop: 10 }}>
                     {about.description}
                  </p>
               </motion.div>
            ))}
         </div>
      </>
   );
}

export default AppWrap(
   MotionWrap(About, "app__about"),
   "about",
   "app__whitebg"
);
