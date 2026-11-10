import React from "react";
import { About, Header, Work, Skills, Certifications, Contact } from "./container";
import { Navbar, Preloader } from "./components";
import "./App.scss";

function App() {
   return (
      <div className="app">
         <Preloader />
         <Navbar />
         <Header />
         <About />
         <Work />
         <Skills />
         <Certifications />
         <Contact />
      </div>
   );
}

export default App;
