import React from "react";
import "../App.css";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import { mdiMenu } from "@mdi/js";

const Header: React.FC = () => {
  return (
    <header>
      <div className="star">
        <Icon path={mdiStar} size={1} />
      </div>

      <nav className="list-nav">
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

      <nav className="menu-nav">
        <button className="menu-btn">
          <Icon path={mdiMenu} size={1} color="white" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
