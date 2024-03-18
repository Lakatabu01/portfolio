import React, { useRef } from "react";
import { useState, useEffect } from "react";
import Icon from "@mdi/react";
import { mdiArrowRightThin } from "@mdi/js";
import {
  waldo1,
  waldo2,
  waldo3,
  waldo4,
  waldo5,
  waldo6,
  waldo7,
  waldo8,
  waldo9,
  waldo10,
  waldo11,
} from "./PhotoImports";
import { cart, cart1, cart2, cart3, cart4, cart5 } from "./PhotoImports";
import { card, card1, card2, card3, card4, card5, card6 } from "./PhotoImports";
import { cv, cv1, cv2, cv3, cv4 } from "./PhotoImports";
import { axia, axia1, axia2, axia5 } from "./PhotoImports";
import {
  enterprise,
  enterprise2,
  enterprise3,
  enterprise4,
} from "./PhotoImports";
import talentPool1 from "../assets/talent-pool/Talent-pool (1).png";
import talentPool2 from "../assets/talent-pool/Talent-pool.png";

const MyProjects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetElementRef = useRef<HTMLDivElement | null>(null);

  //Accept reference of each component
  //to check if they are visible so state can change
  //which then triggers animation by adding the CSS class
  const handleScroll = (target: React.RefObject<HTMLElement>) => {
    if (target.current) {
      const elementRect = target.current.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  // const firstComponent = handleScroll(targetElementRef);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll(targetElementRef);
    });

    return () =>
      window.removeEventListener("scroll", () => {
        handleScroll(targetElementRef);
      });
  }, []);

  return (
    <div
      data-testid="projects"
      ref={targetElementRef}
      className={`projects ${isVisible ? "swirl-in-fwd" : ""}`}>
      <h1>My Projects</h1>

      <section className="single-project">
        <div>
          <h3>Talent Pool</h3>
          <p>
            This ongoing real life project represents a collaborative effort,
            involving coordination with various team members, from designers to
            project managers. Through Next.js, TypeScript, Tailwind CSS and
            other technologies I've developed the frontend section of a platform
            that promises to redefine tech talent acquisition. Its blend of
            design finesse, seamless functionality, and collaborative features
            positions it as a viable solution in the evolving recruitment
            landscape
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              src={talentPool1}
              alt="talent pool landing page"
              className="project-image"
            />
            <img
              src={talentPool2}
              alt="talent pool landing page"
              className="project-image"
            />
          </div>

          <div className="project-links">
            <a href="https://github.com/Lakatabu01/talent-pool">
              <button className="code-btn">View code</button>
            </a>

            <div>
              {" "}
              <a
                href="https://talent-pool-rose.vercel.app/"
                className="preview
              ">
                <p>Preview</p>
                <Icon path={mdiArrowRightThin} size={1} />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="single-project">
        <div>
          <h3>Open Enterprise</h3>
          <p>
            Built using Next.js and TypeScript with a refined and user-friendly
            UI. Styled with Tailwind CSS, this Showcase Page, an exact replica
            of its Figma file, seamlessly merges design and functionality.
            Experience open collaboration, rewarding contributors with
            fractional ownership.
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
              ${enterprise} 200w,
              ${enterprise2} 800w
`}
              src={enterprise2}
              alt="Screenshot of Open Enterprise landing page"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
              ${enterprise3} 200w,
              ${enterprise4} 800w
`}
              src={enterprise4}
              alt="Screenshot of Tic-tac-toe-game"
            />
          </div>

          <div className="project-links">
            <a href="https://github.com/Lakatabu01/open-enterprise">
              <button className="code-btn">View code</button>
            </a>

            <div>
              {" "}
              <a
                href="https://open-enterprise-lakatabu01.vercel.app"
                className="preview
              ">
                <p>Preview</p>
                <Icon path={mdiArrowRightThin} size={1} />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="single-project">
        <div>
          <h3>Axia Africa</h3>
          <p>
            Inspired by an original design, explore the world of online
            education through my take on a bootcamp lead capture page. built
            with React and Vite framework, this responsive design offers a
            seamless browsing experience. Tailwind CSS was used for styling,
            making it visually appealing across devices.
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
            ${axia} 200w,
            ${axia1} 800w,
          `}
              src={axia2}
              alt="Screenshot of Axia Africa Landing page"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
              ${axia2} 200w,
              ${axia5} 800w,
`}
              src={axia5}
              alt=" screenshot of the input field of a weather"
            />
          </div>

          <div className="project-links">
            <a href="https://github.com/Lakatabu01/axia-africa">
              <button className="code-btn">View code</button>
            </a>

            <div>
              {" "}
              <a
                href="https://axia-africa-clone.vercel.app"
                className="preview
              ">
                <p>Preview</p>
                <Icon path={mdiArrowRightThin} size={1} />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="single-project">
        <div>
          <h3>Photo tagging app</h3>
          <p>
            This project is a "Where is Waldo" game that allows users to find
            Waldo and his friends in a busy scene. The app is built using React,
            TypeScript, Firebase, Redux toolkit and styled-components Users can
            search for Waldo and his friends in a busy scene. Users can track
            their progress and see the characters they have found. Users can
            submit their score to a leaderboard and compete with other players.
            This project was unit tested with Jest
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
              ${waldo1} 200w,
             ${waldo2} 471w,
             ${waldo3} 738w,
             ${waldo4} 800w
            `}
              src={waldo4}
              alt="Screenshot of Where is waldo game"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
        ${waldo5} 200w,
        ${waldo6} 369w,
        ${waldo7} 496w,
        ${waldo8} 602w,
        ${waldo9} 696w,
        ${waldo10} 788w,
        ${waldo11} 800w"
`}
              src={waldo11}
              alt="Screenshot of score board"
            />
          </div>

          <div className="project-links">
            <a href="https://github.com/Lakatabu01/where-is-waldo.git">
              <button className="code-btn"> View code</button>
            </a>

            <div>
              <a
                href="https://lakatabu01.github.io/where-is-waldo/"
                className="preview
            ">
                {" "}
                <p>Preview</p>
                <Icon path={mdiArrowRightThin} size={1} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="single-project">
        <div>
          <h3>Shopping cart</h3>
          <p>
            I built a shopping cart application using React and
            react-router-dom. The application has a user-friendly interface that
            allows users to browse through products with ease and add items to
            their cart. The application uses three routes The application was
            built using the following technologies: React, react-router-dom and
            Shopping cart API. This project demonstrates my ability to use React
            and react-router-dom to build a functional and user-friendly
            application.
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
        ${cart} 200w,
        ${cart1} 615w,
        ${cart2} 800w
        `}
              src={cart2}
              alt="Screenshot of different products"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
          ${cart3} 200w,
          ${cart4} 699w,
          ${cart5} 800w"
`}
              src={cart5}
              alt="Screenshot of different products"
            />
          </div>

          <div className="project-links">
            <a href="https://github.com/Lakatabu01/shopping-cart">
              {" "}
              <button className="code-btn"> View code</button>
            </a>

            <div>
              <a
                href="https://lakatabu01.github.io/shopping-cart/"
                className="preview
            ">
                <p>Preview </p>
                <Icon path={mdiArrowRightThin} size={1} />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="single-project">
        <div>
          <h3>Memory card game</h3>
          <p>
            I took on the challenge of building a captivating Memory Card game
            using React, showcasing not only my technical skills but also my
            creative approach to interactive web applications. In this game,
            users accumulate points by clicking on various images, but there's a
            catch, every image can only be clicked once throughout the game.
            This distinctive feature adds an element of strategy and memory
            exercise, making the game not only entertaining but also mentally
            stimulating
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
            ${card} 200w,
            ${card1} 550w,
            ${card2} 800w
`}
              src={card2}
              alt="Photo of Memory card game"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
             ${card3} 200w,
            ${card4} 485w,
            ${card5} 711w,
            ${card6} 800w
`}
              src={card6}
              alt="Photo of Memory card game"
            />
          </div>

          <div className="project-links">
            <a href="https://github.com/Lakatabu01/memory-card">
              <button className="code-btn">View code</button>
            </a>

            <div>
              {" "}
              <a
                href="https://lakatabu01.github.io/memory-card/"
                className="preview
            ">
                <p>Preview</p>
                <Icon path={mdiArrowRightThin} size={1} />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>

      <section className="single-project">
        <div>
          <h3>Resume builder</h3>
          <p>
            I built a React app that allows users to create and modify their own
            resumes using a ready template. The app is built with JavaScript and
            React CSS, and it is hosted on GitHub Pages. The app is a valuable
            addition to my portfolio because it demonstrates my skills in React
            development, JavaScript, and CSS. It also shows that I am able to
            build user-friendly and functional applications.
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
            ${cv} 200w,
            ${cv1} 764w,
            ${cv2} 800w
`}
              src={cv2}
              alt="Resume of a Devops engineer"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 90vw, (max-width: 1400px) 25vw, 30vw"
              srcSet={`
              ${cv3} 200w,
              ${cv4} 800w"
              `}
              src={cv3}
              alt="Resume of a Devops engineer"
            />
          </div>

          <div className="project-links">
            <a href="https://github.com/Lakatabu01/cv-application">
              <button className="code-btn"> View code</button>
            </a>

            <div>
              {" "}
              <a
                href="https://lakatabu01.github.io/cv-application/"
                className="preview
            ">
                <p>Preview </p>
                <Icon path={mdiArrowRightThin} size={1} />
              </a>{" "}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
