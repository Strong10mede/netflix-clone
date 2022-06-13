import React, { useEffect, useState } from "react";

function Nav() {
  const [show, handleShow] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    //everytime useEffect fires due to any reason,before firing off again remove eventListener so you dont have 20 eventlistener
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src="" alt="Netflix Logo" />
      <img className="nav__avatar" src="" alt="Netflix Logo" />
    </div>
  );
}

export default Nav;
