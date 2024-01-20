import React, { useEffect } from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <footer>
      <a href="#" data-aos="fade-up" className="footer__logo">
        BUDDY IN YOUR CARE
      </a>

      <div data-aos="fade-up" className="footer__socials">
        <a href="#" data-aos="fade-up">
          <FaFacebookF />
        </a>
        <a href="#" data-aos="fade-up">
          <FaInstagram />
        </a>
        <a href="#" data-aos="fade-up">
          <FaTelegramPlane />
        </a>
        <a href="#" data-aos="fade-up">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small data-aos="fade-up">
          Copyright &copy; 2023 CareBuddy - All Rights Reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
