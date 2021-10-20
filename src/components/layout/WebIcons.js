import React from "react";
import { FaHtml5, FaCss3, FaReact, FaSass, FaBootstrap, FaGithub, FaHotjar } from "react-icons/fa";
import { SiJavascript, SiAdobephotoshop, SiVisualstudio, SiAdobeillustrator, SiAdobexd, SiWix, SiWordpress, SiShopify, SiFilezilla, SiMamp, SiStrapi } from "react-icons/si";

function WebIcons() {
  return (
    <div className="web-icons-wrapper">
      <FaHtml5 id="html5" />
      <FaCss3 />
      <SiJavascript id="java" />
      <FaSass id="sass" />
      <FaReact id="react" />
      <FaGithub />
      <FaBootstrap id="bootstrap" />
      <FaHotjar id="hotjar" />
      <SiAdobephotoshop id="adobeps" />
      <SiAdobeillustrator id="adobeillu" />
      <SiAdobexd id="adobexed" />
      <SiWix id="mywix" />
      <SiWordpress id="mywp" />
      <SiMamp id="mymamp" />
      <SiShopify id="myshopify" />
      <SiFilezilla id="hotjar" />
      <SiStrapi id="strapi" />
      <SiVisualstudio id="studiocode" />
    </div>
  );
}

export default WebIcons;
