import React, { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import { ThemeContext } from "../../context/ThemeContext";
import Text from "../../components/text/Text";
function Home() {
  const { isLightTheme, light, dark } = useContext(ThemeContext); // GLOBAL DATA
  const theme = isLightTheme ? light : dark;

  return (
    <div>
      <Text></Text>

      <div
        className="home"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        <div className="featured">
          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/1"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>1</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/2"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>2</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/3"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>3</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/4"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>4</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/5"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>5</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/6"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>6</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/7"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>7-8</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/8"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>9</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/9"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>10</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/10"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>11</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/11"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>12</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/13"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>13</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/14"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>14</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/16"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>15-16</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/17"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>17</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/18"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>18</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/19"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>19</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/20"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>20</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/21"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>21</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/22"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>22</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/23"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>გაზეთი ნომერი</h1>
                <h2>23</h2>
              </div>
            </Link>
          </div>

          <div className="featuredItem">
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/paper/new"
            >
              <img
                src={process.env.PUBLIC_URL + "/images/elioni.jpeg"}
                alt=""
                className="featuredImg img"
              />
              <div className="featuredTitles">
                <h1>ახალი</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default Home
