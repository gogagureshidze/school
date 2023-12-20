import React, { useContext } from "react";
import './footer.css'
import { ThemeContext } from "../../context/ThemeContext";

const Footer = ({position}) => {
  const currentYear = new Date().getFullYear(); // Get the current year dynamically
const { isLightTheme, light, dark } = useContext(ThemeContext); // GLOBAL DATA
const theme = isLightTheme ? light : dark;

  return (
    <div
      style={{
        color: theme.syntax,
        background: theme.bg,
        position,
        border: ".5px solid "+ theme.syntax, 
        borderRadius: '3px'
      }}
      className="footer"
    >
      <p>გაზეთი ელიონი &copy; {currentYear}</p>
    </div>
  );
};

export default Footer;
