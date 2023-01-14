import React, { useState } from "react";
import { useEffect } from "react";
import "./nav.css";
import { GiHamburgerMenu } from "react-icons/gi";
function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    // Add the active class to the 1st <a> tag when the page loads
    document.querySelectorAll(".alink")[0].classList.add("active");
  }, []);

  function handleClick(e) {
    const allLinks = document.querySelectorAll(".alink");
    //Remove active class from all links
    allLinks.forEach((link) => link.classList.remove("active"));
    //Add active class to clicked link
    e.target.classList.add("active");
  }
  return (
    <>
      <div className={showMenu ? "menu mobile-menu" : "menu"}>
        <ul>
          <li>
            <a href="#" className="alink" onClick={handleClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className="alink" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#" className="alink" onClick={handleClick}>
              Resume
            </a>
          </li>
          <li>
            <a href="#" className="alink" onClick={handleClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="alink" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="hamburger-menu">
        <a href="#" onClick={() => setShowMenu(!showMenu)}>
          <GiHamburgerMenu style={{ color: "white" }} size={24} />
        </a>
      </div>
    </>
  );
}

export default Nav;
