import React, { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { ThemeContext } from "./context/Darkmode";
import natureimages from "./images/nature";
import museumArtsImages from "./images/museumArts";
import technologyImages from "./images/technology";

export default function Card() {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div>
        <h1 className="title">Walk this Way for Adventures</h1>
        <div
          id="art-gallery"
          className="AImges"
          style={{ background: theme === "light" ? "#fff" : "black" }}>
          {natureimages.map((image, index) => (
            <LazyLoadImage
              className="img"
              effect="blur"
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
            <LazyLoadImage
              className="img"
              effect="blur"
              src={image}
              key={index}
              alt={`Museum Art Image ${index + 1}`}
            />
          ))}
        </div>

        <h1 className="title">The Art of Innovation</h1>
        <div
          id="art-gallery"
          className="AImges"
          style={{ background: theme === "light" ? "#fff" : "black" }}>
          {technologyImages.map((image, index) => (
            <LazyLoadImage
              className="img"
              effect="blur"
              src={image}
              key={index}
              alt={`Technology Image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
