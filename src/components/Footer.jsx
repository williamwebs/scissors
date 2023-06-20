import React from "react";
import "./styles/footer.scss";
import logo from "../assets/logo-black.png";

import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  const data = [
    {
      title: "Why Scissor ?",
      links: [
        { title: "Scissor 101", link: "" },
        { title: "Integrations & API", link: "" },
        { title: "Pricing", link: "" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { title: "   Social Media", link: "" },
        { title: "Digital Marketing", link: "" },
        { title: "Customer Service", link: "" },
        { title: "For Developers", link: "" },
      ],
    },
    {
      title: "Products",
      links: [
        { title: "Link Management", link: "" },
        { title: "QR Codes", link: "" },
        { title: "Link-in-bio", link: "" },
      ],
    },
    {
      title: "Company",
      links: [
        { title: "About Scissor", link: "" },
        { title: "Careers", link: "" },
        { title: "Partners", link: "" },
        { title: "Press", link: "" },
        { title: "Contact", link: "" },
        { title: "Reviews", link: "" },
      ],
    },
    {
      title: "Resources",
      links: [
        { title: "Blog", link: "" },
        { title: "Resource Library", link: "" },
        { title: "Developers", link: "" },
        { title: "App Connectors", link: "" },
        { title: "Support", link: "" },
        { title: "Trust Center", link: "" },
        { title: "Browser Extension", link: "" },
        { title: "Mobile App", link: "" },
      ],
    },
    {
      title: "Features",
      links: [
        { title: "Branded Links", link: "" },
        { title: "Mobile Links", link: "" },
        { title: "Campaign", link: "" },
        { title: "Management & Analytics", link: "" },
        { title: "QR Code", link: "" },
        { title: "Generation", link: "" },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Privacy Policy", link: "" },
        { title: "Cookie Policy", link: "" },
        { title: "Terms of Service", link: "" },
        { title: "Acceptable Use Policy", link: "" },
        { title: "Code of Conduct", link: "" },
      ],
    },
  ];
  return (
    <footer>
      <div className="container">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="scissors logo" />
          </div>
          <div className="socials">
            <AiOutlineTwitter className="icon" />
            <AiOutlineInstagram className="icon" />
            <AiOutlineLinkedin className="icon" />
            <AiOutlineFacebook className="icon" />
          </div>
        </div>
        <div className="right">
          {data.map((item, index) => {
            return (
              <div className="col" key={index}>
                <h4>{item.title}</h4>
                {item.links.map((i, index) => (
                  <li key={index}>{i.title}</li>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
