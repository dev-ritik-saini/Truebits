import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footers = () => {
  return (
    <footer className="footer-section">
      <div className="container grid grid-three-cols">
        <div className="footer-contact">
          <div className="icon">
            <MdPlace />
          </div>
          <div>
            <p>Find us</p>
            <p>Phagwara, Punjab</p>
          </div>
        </div>
        <div className="footer-contact">
          <div className="icon">
            <IoCallSharp />
          </div>
          <div>
            <p>Call us</p>
            <p>+91 1234567890</p>
          </div>
        </div>
        <div className="footer-contact">
          <div className="icon">
            <TbMailPlus />
          </div>
          <div>
            <p>Mail us</p>
            <p>ritikksainii26@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container">
          <div className="grid grid-two-cols">
            <div className="copyright-text">
              <p>
                Copyright &copy; 2025, All Right Reserved
                <NavLink
                  to="https://www.linkedin.com/in/devz-ritik-saini"
                  target="_blank"
                >
                  Ritik Saini
                </NavLink>
              </p>
            </div>
            <div className="footer-menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/">Portfolio</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
