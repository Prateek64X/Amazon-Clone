import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer_link">
      <a target="Github repo" href="http://github.com/Prateek64X/myStore">
        <p>Written By Prateek Panwar</p>
        <br />
      </a>
    </div>
  );
}

export default Footer;
