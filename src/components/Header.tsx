import React from "react";
import "../App.css";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";

import { useState, useEffect, useRef } from "react";

const Header: React.FC = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const targetElementRef = useRef<HTMLDivElement | null>(null);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  //cancel header drop down if any part of the widow is clicked
  //except header
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      targetElementRef.current &&
      !targetElementRef.current.contains(event.target as Node)
    ) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleOutsideClick);
  });

  return (
    <header ref={targetElementRef} className={`${dropDown ? "show" : ""}`}>
      <div className="header">
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
            <li>
              {" "}
              <button className="nav-button">Projects</button>{" "}
            </li>
          </ul>
        </nav>

        <nav className="menu-nav">
          <button onClick={handleDropDown} className="menu-btn">
            <Icon
              path={!dropDown ? mdiMenu : mdiClose}
              size={1}
              color="white"
            />
          </button>
        </nav>
      </div>

      <div className={`drop-down ${dropDown ? "show" : ""}`}>
        <ul>
          <li className="drop-list">
            <button>About</button>
          </li>
          <li className="drop-list">
            <button>Contact</button>
          </li>
          <li className="drop-list">
            <button>Resume</button>
          </li>
          <li className="drop-list">
            <button>Projects</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

//`drop-down ${dropDown ? "show" : ""}`
