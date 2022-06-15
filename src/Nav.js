import React, { useEffect, useState } from "react";
import Netflix_Logo from "./Netflix-Logo.png";
import Netflix_Avatar from "./Netflix-avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    //everytime useEffect fires due to any reason,before firing off again remove eventListener so you dont have 20 eventlistener
    //it removes the old added listener listener from CleanUp function and adds the new one
    //CleanUp function is called when UseEffect is called again or on umounted
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={Netflix_Logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={Netflix_Avatar} alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
