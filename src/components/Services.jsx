import React, { useEffect } from "react";

import AOS from "aos";

import ArticleImage from "./constant/ArticleImage";
import ArticleText from "./constant/ArticleText";
import ArticleMix from "./constant/ArticleMix";

import TransformDesktop from "../images/desktop/image-transform.jpg";
import TransformMobile from "../images/mobile/image-transform.jpg";
import StandOutMobile from "../images/mobile/image-stand-out.jpg";
import StandOutDesktop from "../images/desktop/image-stand-out.jpg";
import GraphicMobile from "../images/mobile/image-graphic-design.jpg";
import GraphicDesktop from "../images/desktop/image-graphic-design.jpg";
import PhotographyMobile from "../images/mobile/image-photography.jpg";
import PhotographyDesktop from "../images/desktop/image-photography.jpg";

import WindowWidth from "./constant/WindowWidth";

const Services = () => {
  const large = WindowWidth() >= 968;
  const xlarge = WindowWidth() >= 1200;

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="services" id="services">
      <div className="services__simple">
        <ArticleImage
          animation={large ? "fade-left" : "fade-right"}
          mobileImg={TransformMobile}
          desktopImg={TransformDesktop}
        />
        <ArticleText
          animation={large ? "fade-right" : "fade-left"}
          title="Transform your brand"
          parag="We are a full-service creative agency specializing in helping brands
          grow fast.Engage your clients through compelling visuals that do most of the
          marketing for you."
        />
      </div>

      <div className="services__simple">
        <ArticleImage
          animation="fade-right"
          mobileImg={StandOutMobile}
          desktopImg={StandOutDesktop}
        />
        <ArticleText
          animation="fade-left"
          title="Stand out to the right audience"
          parag="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        />
      </div>

      <div className="services__mixte">
        <ArticleMix
          animation={xlarge ? "fade-right" : "zoom-in"}
          mobileImg={GraphicMobile}
          desktopImg={GraphicDesktop}
          title="Graphic Design"
          content="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        />
        <ArticleMix
          animation={xlarge ? "fade-left" : "zoom-in"}
          mobileImg={PhotographyMobile}
          desktopImg={PhotographyDesktop}
          title="Photography"
          content="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        />
      </div>
    </div>
  );
};

export default Services;
