import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import { useRef } from "react";

function NavBar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>
        <span style={{ color: "#3387EC" }}>H </span>
        <span style={{ color: "red" }}>T </span>
        <span style={{ color: "#3387EC" }}>C</span>
      </h3>
      <nav ref={navRef}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Products</Link>
        <Link to="/contactus">Contact us</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default NavBar;
