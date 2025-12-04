import React, { useState, useEffect, use } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);       // stato per menu a tendina
  const [windowWidth, setWindowWidth] = useState(0);     // stato per larghezza finestra

  // imposta larghezza finestra dopo l'uso
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // chiudi menu a tendina se si passa a desktop
  useEffect(() => {
    if (windowWidth > 700) {
      setMenuOpen(false);
    }
  }, [windowWidth]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img
          src="https://eu.aimcontrollers.com/wp-content/uploads/2024/01/XBOX_PREDESIGN_PRO_DOUBLE__CHERRY-1.png"
          alt="Xbox"
          className="navbar-logo"
        />
        <h1 className="navbar-title">BEST INDIE GAMES</h1>
      </div>

      <div className="navbar-right">
        <div className="navbar-links">
          <a href="https://www.playstation.com/" target="_blank">PLAYSTATION</a>
          <a href="https://www.xbox.com/" target="_blank">XBOX</a>
          <a href="https://www.nintendo.com/" target="_blank">NINTENDO</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {menuOpen && (  // mostra menu a tendina se aperto
          <div className="dropdown-menu">
            <a href="https://www.playstation.com/" target="_blank">PLAYSTATION</a>
            <a href="https://www.xbox.com/" target="_blank">XBOX</a>
            <a href="https://www.nintendo.com/" target="_blank">NINTENDO</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;