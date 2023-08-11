import React, { useRef } from "react";
import { useState, useEffect } from "react";
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
import { weather, weather1, weather2 } from "./PhotoImports";
import { weather3, weather4, weather5 } from "./PhotoImports";
import { tic, tic1, tic2, tic3 } from "./PhotoImports";

const MyProjects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetElementRef = useRef<HTMLDivElement | null>(null);
  const targetElementRef1 = useRef<HTMLDivElement | null>(null);

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
    window.addEventListener("touchmove", () => {
      handleScroll(targetElementRef);
      handleScroll(targetElementRef1);
    });

    return () =>
      window.removeEventListener("touchmove", () => {
        handleScroll(targetElementRef);
        handleScroll(targetElementRef1);
      });
  }, []);

  return (
    <div
      ref={targetElementRef}
      className={`projects ${isVisible ? "swirl-in-fwd" : ""}`}
    >
      <h1>My Projects</h1>
      <section className="single-project">
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
            aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
            voluptates corrupti tempora aut totam itaque a quasi deserunt
            eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Magni, exercitationem?
          </p>
        </div>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
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
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
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
            <button className="code-btn">View code</button>
            <p
              className="preview
            "
            >
              Preview &#8594;
            </p>
          </div>
        </div>
      </section>

      <section className="single-project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
          voluptates corrupti tempora aut totam itaque a quasi deserunt
          eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, exercitationem?
        </p>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
              srcSet={`
        ${cart} 200w,
        ${cart1} 615w,
        ${cart2} 800w
        `}
              src={cart2}
              alt=""
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
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
            <button className="code-btn">View code</button>
            <p className="preview">Preview &#8594; </p>
          </div>
        </div>
      </section>

      <section className="single-project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
          voluptates corrupti tempora aut totam itaque a quasi deserunt
          eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, exercitationem?
        </p>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
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
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
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
            <button className="code-btn">View code</button>
            <p className="preview">Preview &#8594; </p>
          </div>
        </div>
      </section>

      <section className="single-project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
          voluptates corrupti tempora aut totam itaque a quasi deserunt
          eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, exercitationem?
        </p>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
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
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
              srcSet={`
              ${cv3} 200w,
              ${cv4} 800w"
              `}
              src={cv3}
              alt="Resume of a Devops engineer"
            />
          </div>

          <div className="project-links">
            <button className="code-btn">View code</button>
            <p className="preview">Preview &#8594; </p>
          </div>
        </div>
      </section>

      <section className="single-project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
          voluptates corrupti tempora aut totam itaque a quasi deserunt
          eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, exercitationem?
        </p>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
              srcSet={`
            ${weather} 200w,
            ${weather1} 653w,
            ${weather2} 800w
`}
              src={weather2}
              alt="Screenshot of weaather app"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
              srcSet={`
              ${weather3} 200w,
              ${weather4} 733w,
              ${weather5} 800w
`}
              src={weather5}
              alt=" screenshot of the input field of a weather"
            />
          </div>

          <div className="project-links">
            <button className="code-btn">View code</button>
            <p className="preview">Preview &#8594; </p>
          </div>
        </div>
      </section>

      <section className="single-project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
          voluptates corrupti tempora aut totam itaque a quasi deserunt
          eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, exercitationem?
        </p>

        <div>
          <div className="img-grp">
            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
              srcSet={`
              ${tic} 200w,
              ${tic1} 800w
`}
              src={tic1}
              alt="Screenshot of Tic-tac-toe-game"
            />

            <img
              className="project-image"
              sizes="(max-width: 768px) 70vw, (max-width: 1400px) 25vw, 800px"
              srcSet={`
              ${tic2} 200w,
              ${tic3} 800w
`}
              src={tic1}
              alt="Screenshot of Tic-tac-toe-game"
            />
          </div>

          <div className="project-links">
            <button className="code-btn">View code</button>
            <p className="preview">Preview &#8594; </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyProjects;
