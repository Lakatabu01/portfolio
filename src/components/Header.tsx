import React from "react";
import "../App.css";

const Header = () => {
  return (
    <header>
      <div>
        <p>Logo</p>
      </div>

      <nav>
        <ul>
          <li>
            {" "}
            <button className="nav-button">About</button>{" "}
          </li>
          <li>
            {" "}
            <button className="nav-button">Contact</button>
          </li>
          <li>
            {" "}
            <button className="nav-button">Resume</button>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
