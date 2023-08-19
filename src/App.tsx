import "./App.css";
import React from "react";
import { useRef } from "react";
import Icon from "@mdi/react";
import { mdiStar } from "@mdi/js";
import { mdiMenu } from "@mdi/js";
import { mdiClose } from "@mdi/js";
import { useState, useEffect } from "react";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Buttons from "./components/TopButtons";
import MyProjects from "./components/Projects";
import Skills from "./components/Skills";
import BlogPosts from "./components/BlogPosts";
import Footer from "./components/Footer";
import Social from "./components/Social";

interface ComponentRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

const App: React.FC = () => {
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

  const componentRefs: ComponentRefs = {
    component1: useRef<HTMLDivElement>(null),
    component2: useRef<HTMLDivElement>(null),
    component3: useRef<HTMLDivElement>(null),
    component4: useRef<HTMLDivElement>(null),
    component5: useRef<HTMLDivElement>(null),
  };

  const scrollToComponent = (componentName: string) => {
    const componentRef = componentRefs[componentName];
    if (componentRef.current) {
      // component 2 is tiny so this conditional checks and adjusts the scroll
      componentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <header className={`${dropDown ? "show" : ""}`}>
        <div className="header">
          <div className="star">
            <Icon path={mdiStar} size={1} />
          </div>

          <nav className="list-nav">
            <ul>
              <li>
                {" "}
                <button
                  className="nav-button"
                  onClick={() => {
                    setDropDown(false);
                    scrollToComponent("component1");
                  }}
                >
                  About
                </button>{" "}
              </li>
              <li>
                {" "}
                <button
                  className="nav-button"
                  onClick={() => {
                    setDropDown(false);
                    scrollToComponent("component2");
                  }}
                >
                  Contact
                </button>
              </li>
              <li>
                {" "}
                <button
                  onClick={() => scrollToComponent("component3")}
                  className="nav-button"
                >
                  Skills
                </button>{" "}
              </li>
              <li>
                {" "}
                <button
                  className="nav-button"
                  onClick={() => {
                    setDropDown(false);
                    scrollToComponent("component4");
                  }}
                >
                  Projects
                </button>{" "}
              </li>
              <li>
                {" "}
                <button
                  className="nav-button"
                  onClick={() => {
                    setDropDown(false);
                    scrollToComponent("component5");
                  }}
                >
                  Blogs
                </button>{" "}
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
              <button
                onClick={() => {
                  setDropDown(false);
                  scrollToComponent("component1");
                }}
              >
                About
              </button>
            </li>
            <li className="drop-list">
              <button
                onClick={() => {
                  setDropDown(false);
                  scrollToComponent("component2");
                }}
              >
                Contact
              </button>
            </li>
            <li className="drop-list">
              <button
                onClick={() => {
                  setDropDown(false);
                  scrollToComponent("component3");
                }}
              >
                Skills
              </button>
            </li>
            <li className="drop-list">
              <button
                onClick={() => {
                  setDropDown(false);
                  scrollToComponent("component1");
                }}
              >
                Projects
              </button>
            </li>
            <li className="drop-list">
              <button
                onClick={() => {
                  setDropDown(false);
                  scrollToComponent("component5");
                }}
              >
                Blogs
              </button>
            </li>
          </ul>
        </div>
      </header>
      <main>
        <div ref={componentRefs.component2}>
          <Intro />
          <Social />
        </div>

        <div ref={componentRefs.component1}>
          <Profile />
        </div>

        <Buttons />

        <div ref={componentRefs.component4}>
          <MyProjects />
        </div>

        <div ref={componentRefs.component3}>
          <Skills />
        </div>

        <div ref={componentRefs.component5}>
          <BlogPosts />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
