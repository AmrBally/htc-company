import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div id="footer-wrap">
      <footer className="footer">
        <div className="top-footer">
          <div className="row">
            <div className="col-md-3">
              <div className="footer-logo">
                <Link className="link" href="/" title="Mercury">
                  HTC.
                </Link>
                <p className="tagline">A product of Smart Coating.</p>
              </div>
            </div>
            <div className="col-md-2">
              <h4>Lien</h4>
              <ul className="footer-link">
                <li>
                  <Link to="/" className="link" href="/" title="Home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="link" href="/" title="Home">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="link" href="/" title="Home">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <h4>À Propos</h4>
              <ul className="footer-link">
                <li>
                  <Link className="link" href="/" title="Faq">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link className="link" href="/" title="Blog">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4>Link Contacter</h4>
              <ul className="footer-link">
                <li>
                  <Link
                    className="link"
                    href="mail-to:smartlight.eip@gmail.com"
                    title="Contact"
                  >
                    amr.eip@gmail.com
                  </Link>
                </li>
                <li>
                  <div className="icons">
                    <SocialIcon
                      href="#"
                      title="Facebook"
                      network="facebook"
                      bgColor="#ffffff"
                      fgColor="black"
                    />
                    <SocialIcon
                      href="#"
                      title="Link"
                      network=""
                      bgColor="#ffffff"
                      fgColor="black"
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="row">
            <div className="col-md-5">
              <p className="copyright pt-3">
                Copyright &copy; 2023 Smartcoating!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
