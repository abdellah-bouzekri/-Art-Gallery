import { useContext } from "react";
import { ThemeContext } from "./context/Darkmode";
import "./App.css";
import Card from "./Card";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  function scroolGallery() {
    const gallery = document.getElementById("art-gallery");
    if (gallery) {
      gallery.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
      <div
        className="container"
        style={{ background: theme === "light" ? "#fff" : "black" }}>
        <div
          className="list"
          style={{ color: theme === "light" ? "black" : "white" }}>
          <h1 className="big-title">BEYOND BOUNDARIES AN IMMERSIVE</h1>
        </div>
        <div className="content">
          <button
            className="btn-gallery"
            onClick={scroolGallery}
            style={{
              background: theme === "light" ? "black" : "white",
              fontFamily: "Impact",
              color: theme === "light" ? "white" : "black",
              padding: "40px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}>
            Art Gallery
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="28px"
                viewBox="0 -960 960 960"
                width="28px"
                fill="#e8eaed">
                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
              </svg>
            </span>
          </button>
        </div>
        <button
          className="btn"
          onClick={toggleTheme}
          style={{ position: "absolute", top: "10px", right: "10px" }}>
          {theme === "light" ? " ☀️" : "🌙"}
        </button>
      </div>
      <Card />
    </>
  );
}

export default App;
