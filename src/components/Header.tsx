import React from "react";
import "../App.css";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";

const Header = () => {
  return (
    <header>
      <div>
        <Icon path={mdiStar} size={1} />
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
