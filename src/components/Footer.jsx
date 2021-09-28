import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { links, social } from "../data";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <Logo
          width="180px"
          height="auto"
          viewBox="0 0 124 24"
          className="footer__logo"
        />

        <ul className="footer__links">
          {links.map((link) => {
            const { id, url, text } = link;
            return (
              <li key={id}>
                <a className="footer__links__link" href={url}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="footer__socialLinks">
          {social.map((item) => {
            const { id, url, icon, label } = item;
            return (
              <li key={id}>
                <a
                  className="footer__socialLinks__link"
                  target="_blank"
                  href={url}
                  aria-label={label}
                >
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>

        <p class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://codepen.io/rabahmilano/" target="_blank">
            Rabah ABED
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
