import React from "react";

import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";
import { withBase } from "../utils/basePath";

import { useMediaQuery } from "@mui/material";

const SidebarNav = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const links = [
    <a key="1" href={withBase("/#intro")}><span className="nav-dot" />home</a>,
    <a key="2" href={withBase("/#about")}><span className="nav-dot" />about</a>,
    <a key="3" href={withBase("/#experience")}><span className="nav-dot" />experience</a>,
    <a key="4" href={withBase("/#projects")}><span className="nav-dot" />software</a>
  ];

  return (
    <div className="sidebar-nav">
      {!isMobile && (
        <div className="sidebar-links">
          {links.map((link, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div>{link}</div>
            </FadeInSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
