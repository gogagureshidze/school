import React, { useState, useContext, useEffect } from "react";
import "./paper1.css";
import Footer from "../../footer/Footer";
import { ThemeContext } from "../../../context/ThemeContext";

const Paper1 = ({ imageUrls }) => {
  const [zoomCoords, setZoomCoords] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(false); 
  const { isLightTheme, light, dark } = useContext(ThemeContext); // GLOBAL DATA
  const theme = isLightTheme ? light : dark;

  const handleImageClick = (event) => {
    const { left, top } = event.target.getBoundingClientRect();
    const x = event.clientX - left;
    const y = event.clientY - top;
    setZoomCoords({ x, y });
  };

const toTop = () =>  window.scrollTo(0,0)

  useEffect(() => {
    setLoading(true); 
    
    const delay = setTimeout(() => {
      setLoading(false); 
    }, 2000); 
    return () => clearTimeout(delay); 
  }, []);

  toTop()
  return (
    <div style={{ color: theme.syntax, background: theme.bg }}>
      <div className="scroll-container">
        {loading ? (
          <div>იტვირთება გთხოვთ მოიცადოთ...</div> 
        ) : (
          <div className="image-container">
            {imageUrls.map((imageUrl, index) => (
              <div key={index} className="zoom-container">
                <input type="checkbox" id={`zoom_img_${index}`} />
                <label htmlFor={`zoom_img_${index}`}>
                  <img
                    src={imageUrl}
                    alt={`${index + 1}`}
                    className="image"
                    onClick={handleImageClick}
                    style={{
                      transformOrigin: `${zoomCoords.x}px ${zoomCoords.y}px`,
                    }}
                  />
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer position="static" />
    </div>
  );
};

export default Paper1;
