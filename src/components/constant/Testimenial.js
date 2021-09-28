import React from "react";
import Avatar from "@mui/material/Avatar";
// import { testimenials } from "../../data";

const Testimenial = ({ image, name, content, job, animation, delay }) => {
  return (
    <article
      className="testimenials__content__article"
      data-aos-anchor-placement="top-center"
      data-aos={animation}
      data-aos-delay={delay}
    >
      <Avatar src={image} alt={name} sx={{ width: 72, height: 72 }} />
      <p>{content}</p>
      <h3>{name}</h3>
      <h4>{job}</h4>
    </article>
  );
};

export default Testimenial;
