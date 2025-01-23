import React from "react";
import { BsFacebook, BsTwitterX, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "../static/css/footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        {/* Social Media Links */}
        <div className="social">
          <Link to="/" className="anc" aria-label="Instagram">
            <BsInstagram />
          </Link>
          <Link to="/" className="anc" aria-label="Twitter">
            <BsTwitterX />
          </Link>
          <Link to="/" className="anc" aria-label="Facebook">
            <BsFacebook />
          </Link>
        </div>

        {/* Footer Text */}
        <div className="footer-text">
          <p>
            Copyright &#169; 2045{" "}
            <Link to="https://aggregateintelligence.com/">Your Site Name</Link> All Rights Reserved.
          </p>
          <p>
            Designed By{" "}
            <Link to="https://aggregateintelligence.com/">Naresh & Harris</Link>{" "}
            & <a href="/">Vishnu</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
