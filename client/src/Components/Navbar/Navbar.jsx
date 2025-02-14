import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => setMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="nav">
      {/* Logo Section */}
      <div className="nav-logo">NutriAI</div>

      {/* Mobile Menu Toggle */}
      {mobile ? (
        <div className="nav-toggle" onClick={() => setMenuOpened(!menuOpened)}>
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
      ) : null}

      {/* Menu Links */}
      <ul
        className={`nav-menu ${
          mobile && menuOpened ? "nav-menu-open" : ""
        }`}
      >
        <li>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setMenuOpened(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="nav-link"
            onClick={() => setMenuOpened(false)}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="nav-link"
            onClick={() => setMenuOpened(false)}
          >
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
