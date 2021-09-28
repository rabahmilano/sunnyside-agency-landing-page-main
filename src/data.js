import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

export const links = [
  {
    id: 1,
    url: "#about",
    text: "about",
  },
  {
    id: 2,
    url: "#services",
    text: "services",
  },
  {
    id: 3,
    url: "#projects",
    text: "projects",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FacebookRoundedIcon />,
    label: "facebook",
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <TwitterIcon />,
    label: "twitter",
  },
  {
    id: 3,
    url: "https://github.com/rabahmilano/",
    icon: <GitHubIcon />,
    label: "github",
  },
];

export const testimenials = [
  {
    id: 1,
    image: "https://i.ibb.co/BPLzmTG/image-emily.jpg",
    content:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    job: "Marketing Director",
  },
  {
    id: 2,
    image: "https://i.ibb.co/xj7FQWV/image-thomas.jpg",
    content:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
    name: "Thomas S.",
    job: "Chief Operating Officer",
  },
  {
    id: 3,
    image: "https://i.ibb.co/GMKvQfm/image-jennie.jpg",
    content:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
    name: "Jennie F.",
    job: "Business Owner",
  },
];
