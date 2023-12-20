import React, { useContext } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import ThemeBtn from "../toggleTheme/themeBtn";
import { ThemeContext } from "../../context/ThemeContext";
function Navbar() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;


  return (
    <div
      style={{
        color: theme.syntax,
        background: theme.bg,
      }}
      className="navbar"
    >
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <nav className="navbarContainer">
          <div className="navbarText">
            <span>გაზეთი ელიონი</span>
          </div>
          <div className="navbarButton">
            <ThemeBtn />
          </div>
        </nav>
      </Link>
    </div>
  );
}

export default Navbar;
