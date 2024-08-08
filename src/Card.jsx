import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./context/Darkmode";
import natureimages from "./images/nature";
import museumArtsImages from "./images/museumArts";
import technologyImages from "./images/technology";

export default function Card() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div>
        <h1 className="title">Walk this Way for Adventures</h1>
        <div
          id="art-gallery"
          className="AImges"
          style={{ background: theme === "light" ? "#fff" : "black" }}>
          {natureimages.map((image, index) => (
            <img
              className="img"
              loading="lazy"
              src={image}
              key={index}
              alt={`Nature Image ${index + 1}`}
            />
          ))}
        </div>
        <h1 className="title">Galleries of Grandeur</h1>
        <div
          id="art-gallery"
          className="AImges"
          style={{ background: theme === "light" ? "#fff" : "black" }}>
          {museumArtsImages.map((image, index) => (
            <img
              className="img"
              src={image}
              loading="lazy"
              key={index}
              alt={`Nature Image ${index + 1}`}
            />
          ))}
        </div>
        <h1 className="title">The Art of Innovation</h1>
        <div
          id="art-gallery"
          className="AImges"
          style={{ background: theme === "light" ? "#fff" : "black" }}>
          {technologyImages.map((image, index) => (
            <img
              className="img"
              loading="lazy"
              src={image}
              key={index}
              alt={`Nature Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
