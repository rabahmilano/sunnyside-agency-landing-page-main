import React from "react";
import WindowWidth from "./WindowWidth";

const ArticleImage = ({ mobileImg, desktopImg, animation }) => {
  const size = WindowWidth() > 768;
  return (
    <article
      className="services__article"
      data-aos-anchor-placement="center-bottom"
      data-aos={animation}
    >
      <img
        src={size ? desktopImg : mobileImg}
        alt="article image"
        className="services__article__image"
      />
    </article>
  );
};

export default ArticleImage;
