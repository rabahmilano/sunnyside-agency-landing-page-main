import React from "react";

const ArticleText = (props) => {
  return (
    <article
      className="services__article"
      data-aos-anchor-placement="center-bottom"
      data-aos={props.animation}
    >
      <div className="services__article__content">
        <h2 className="services__article__title">{props.title}</h2>
        <p>{props.parag}</p>
        <button className="services__article__btn">learn more</button>
      </div>
    </article>
  );
};

export default ArticleText;
