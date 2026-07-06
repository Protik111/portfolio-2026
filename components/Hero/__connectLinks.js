import { FaLinkedinIn, FaMedium, FaStackOverflow } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

export const connectionLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rafiur-rahman-protik/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Twitter",
    link: "https://x.com/Protik111",
    icon: <FaTwitter />,
  },
  {
    name: "GitHub",
    link: "https://github.com/Protik111",
    icon: <FaGithub />,
  },
  {
    name: "StackOverflow",
    link: "https://stackoverflow.com/users/16166513/rafiur-rahman-protik",
    icon: <FaStackOverflow />,
  },
  {
    name: "Medium",
    link: "https://medium.com/@rafiurrahmanprotik",
    icon: <FaMedium />,
  },
  {
    name: "Mail",
    link: "mailto:rafiurprotik111@gmail.com",
    icon: <MdEmail />,
  },
];
