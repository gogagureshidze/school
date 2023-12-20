import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function ThemeBtn() {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const data = useContext(ThemeContext);
  // GLOBAL DATA
  const { toggleTheme } = data;

  return (
    <button
      style={{
        padding: "12px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
        border: "2px solid" + theme.syntax,
        borderRadius: "8px",
        backgroundColor: theme.bg,
        color: theme.syntax,
        transition: "all 0.3s ease",
        outline: "none",
      }}
      onClick={(e) => {
        e.preventDefault();
        toggleTheme();
      }}
    >
      შეცვალე ფონი
    </button>
  );
}

export default ThemeBtn;
