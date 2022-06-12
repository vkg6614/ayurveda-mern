import React from "react";
import "./Footer.css";
import arshlogo from "../../images/ARSH-logo.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook-f.png";
import youtube from "../../images/youtube.png";
import linkedin from "../../images/linkedin-in.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-div">
        <div className="footer-navlink">
          <img src={arshlogo} alt="logo-arsh" />
          <div>
            <h1>ABOUT</h1>
            <p>About Us</p>
            <p>Careers</p>
            <p>Rentals</p>
            <p>Custom Products</p>
          </div>
          <div>
            <h1>HELP</h1>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Warranty</p>
            <p>FAQ's</p>
          </div>
          <div>
            <h1>POLICY</h1>
            <p>Return Policy</p>
            <p>Terms of Use</p>
            <p>Privacy & Security</p>
            <p>Shipping policy</p>
          </div>
        </div>
        <div className="contact-details">
          <div>
            <i className="material-icons">add_location</i>
            <span>
              No. 55,Anitya Apartment..
              <br />
              Ground-B, Thindu Main Rd.
              <br />
              Maruthi Layout, Kodigehalli,
              <br />
              Bengaluru, Karnatka 560097
            </span>
          </div>

          <div>
            <i className="material-icons">email</i>
            <span>+91 83105 34680</span>
          </div>

          <div>
            <i className="material-icons">call</i>
            <span>ingo@arshpvtltd.com</span>
          </div>
        </div>
        <div className="footer-copyright-div">
          <p>Copyright @ 2021 ARSH theme by AKOI, All Rights Reserved</p>
          <p>Terms of Use | Privacy Policy</p>
        </div>
      </div>

      <div className="absolute-div">
        <h1>Be informed!</h1>
        <p>Sign up for newsletter</p>
        <p>
          Donec placerat,metus sed consectetur viverra, dolor nist
          <br />
          egestas ligula, ac gravida turpis
        </p>
        <input type="email" placeholder="Email" />
        <br />
        <button>Submit Now</button>
        <div className="contact-links">
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
          <img src={youtube} alt="youtube" />
          <img src={linkedin} alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
