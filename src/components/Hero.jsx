import React from "react";
import Navbar from "./Navbar";
import MobileHeroImage from "../images/mobile/image-header.jpg";
import DesktopHeroImage from "../images/desktop/image-header.jpg";
import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";
import WindowWidth from "./constant/WindowWidth";

const Hero = () => {
  const size = WindowWidth() > 768;

  return (
    <div className="hero" id="about">
      <Navbar />
      <div className="hero__container">
        <img
          src={size ? DesktopHeroImage : MobileHeroImage}
          alt="hero image"
          className="hero__image"
        />
        <div className="hero__content">
          <h1 className="hero__content__title">we are creative</h1>
          <Arrow />
        </div>
      </div>
    </div>
  );
};

export default Hero;
