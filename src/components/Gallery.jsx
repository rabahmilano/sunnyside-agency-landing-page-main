import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

import AOS from "aos";

import coneMobile from "../images/mobile/image-gallery-cone.jpg";
import coneDesktop from "../images/desktop/image-gallery-cone.jpg";
import milkbottlesMobile from "../images/mobile/image-gallery-milkbottles.jpg";
import milkbottlesDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import sugarcubesMobile from "../images/mobile/image-gallery-sugar-cubes.jpg";
import sugarcubesDesktop from "../images/desktop/image-gallery-sugar-cubes.jpg";

import WindowWidth from "./constant/WindowWidth";

const useImageStyles = makeStyles({
  root: {
    display: "block",
    width: "100%",
    height: "100%",
  },
});

const Gallery = () => {
  const size = WindowWidth() > 899;
  const imageStyles = useImageStyles();

  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);

  return (
    <Grid container id="projects">
      <Grid
        item
        xs={6}
        md={3}
        data-aos-anchor-placement={size ? "bottom-bottom" : "top-center"}
        data-aos={size ? "zoom-in" : "fade-down-right"}
        data-aos-delay="0"
      >
        <img
          className={imageStyles.root}
          src={size ? milkbottlesDesktop : milkbottlesMobile}
          alt="picture"
        />
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        data-aos-anchor-placement={size ? "bottom-bottom" : "top-center"}
        data-aos={size ? "zoom-in" : "fade-down-left"}
        data-aos-delay={size ? "500" : "0"}
      >
        <img
          className={imageStyles.root}
          src={size ? orangeDesktop : orangeMobile}
          alt="picture"
        />
      </Grid>

      <Grid
        item
        xs={6}
        md={3}
        data-aos-anchor-placement={size ? "bottom-bottom" : "bottom-bottom"}
        data-aos={size ? "zoom-in" : "fade-up-right"}
        data-aos-delay={size ? "1000" : "0"}
      >
        <img
          className={imageStyles.root}
          src={size ? coneDesktop : coneMobile}
          alt="picture"
        />
      </Grid>
      <Grid
        item
        xs={6}
        md={3}
        data-aos-anchor-placement={size ? "bottom-bottom" : "bottom-bottom"}
        data-aos={size ? "zoom-in" : "fade-up-left"}
        data-aos-delay={size ? "1500" : "0"}
      >
        <img
          className={imageStyles.root}
          src={size ? sugarcubesDesktop : sugarcubesMobile}
          alt="picture"
        />
      </Grid>
    </Grid>
  );
};

export default Gallery;
