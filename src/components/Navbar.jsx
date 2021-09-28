import React, { useState, useEffect, useRef } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { ReactComponent as Logo } from "../images/logo.svg";
import { links } from "../data";

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);
  const refContainerLinks = useRef(null);
  const refLinks = useRef(null);

  const handleClick = () => {
    setIsShow((prevValue) => {
      return !prevValue;
    });
  };

  useEffect(() => {
    const linksHeight = refLinks.current.clientHeight;
    if (isShow) {
      refContainerLinks.current.style.height = `${linksHeight}px`;
    } else {
      refContainerLinks.current.style.height = "0";
      refContainerLinks.current.style.overflow = "hidden";
    }
  }, [isShow]);

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <div className="navbar__header">
          <a href="/">
            <Logo className="logo navbar__logo" />
          </a>
          <MenuRoundedIcon
            className="navbar__toggle"
            fontSize="large"
            onClick={handleClick}
          />
        </div>

        <div className="navbar__links-container" ref={refContainerLinks}>
          <ul className="navbar__menu" ref={refLinks}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id} className="navbar__menu__link">
                  <a href={url}>{text}</a>
                </li>
              );
            })}
            <li className="navbar__menu__link">
              <a href="#footer">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
