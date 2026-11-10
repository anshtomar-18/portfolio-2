import React from "react";

const navItems = ["home", "about", "work", "skills", "certifications", "contact"];

function NavigationDots({ active }) {
   return (
      <div className="app__navigation">
         {navItems.map((item, index) => (
            <a
               className="app__navigation-dot"
               href={`#${item}`}
               key={item + index}
               aria-label={`Navigate to ${item}`}
               style={active === item ? { backgroundColor: "var(--secondary-color)" } : {}}
            >
               <span style={{ display: "none" }}>{item}</span>
            </a>
         ))}
      </div>
   );
}

export default NavigationDots;
