import React from "react";

import "../index.css";

const Footer = () => (
  <footer>
    <div className="footerRight">
      <p>&copy; {new Date().getFullYear()} Mommy Fails</p>
    </div>
    <div className="footerLeft">
      <p>Built by <a href="https://yangcs907.github.io/chrisyang907/index.html">CSY</a></p>
    </div>
  </footer>
);

export default Footer;
