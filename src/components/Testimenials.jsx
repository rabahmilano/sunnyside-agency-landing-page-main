import React, { useEffect } from "react";
// import { testimenials } from "../data";
import Testimenial from "./constant/Testimenial";

import AOS from "aos";

import WindowWidth from "./constant/WindowWidth";

const Testimentials = () => {
  const xlarge = WindowWidth() >= 1200;
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="testimenials">
      <h4 className="testimenials__title">client testimonials</h4>
      <div className="testimenials__content">
        {/* don't able to add AOS nimation-delay */}
        {/* {testimenials.map((item) => {
          return <Testimenial key={item.id} {...item} />;
        })} */}

        <Testimenial
          animation="flip-right"
          delay="0"
          image="https://i.ibb.co/BPLzmTG/image-emily.jpg"
          content="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          job="Marketing Director"
        />
        <Testimenial
          animation="flip-right"
          delay={xlarge ? "500" : "0"}
          image="https://i.ibb.co/xj7FQWV/image-thomas.jpg"
          content="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          job="Chief Operating Officer"
        />
        <Testimenial
          animation="flip-right"
          delay={xlarge ? "1000" : "0"}
          image="https://i.ibb.co/GMKvQfm/image-jennie.jpg"
          content="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          job="Business Owner"
        />
      </div>
    </div>
  );
};

export default Testimentials;
