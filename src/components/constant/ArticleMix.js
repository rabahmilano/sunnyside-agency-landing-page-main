import React from "react";
import WindowWidth from "./WindowWidth";

const ArticleMix = ({ title, content, desktopImg, mobileImg, animation }) => {
  const size = WindowWidth() > 667;
  return (
    <article
      className="services__article"
      data-aos-anchor-placement="top-center"
      data-aos={animation}
    >
      <img
        src={size ? desktopImg : mobileImg}
        alt="article image"
        className="services__article__image"
      />
      <div className="services__article__fleet">
        <h2 className="services__article__title">{title}</h2>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default ArticleMix;
