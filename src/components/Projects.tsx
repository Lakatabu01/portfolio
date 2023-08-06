import React from "react";
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
import { cart, cart1, cart2 } from "./PhotoImports";

const MyProjects: React.FC = () => {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <section className="single-project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
          voluptates corrupti tempora aut totam itaque a quasi deserunt
          eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, exercitationem?
        </p>

        <img
          className="project-image"
          sizes="(max-width: 600px) 80vw, (max-width: 1400px) 25vw, 800px"
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
          sizes="(max-width: 600px) 80vw, (max-width: 1400px) 25vw, 800px"
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
      </section>

      <section className="single-project">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
          aspernatur, reprehenderit dolore, veritatis facilis fuga sapiente
          voluptates corrupti tempora aut totam itaque a quasi deserunt
          eligendi! Sunt accusantium suscipit at. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Magni, exercitationem?
        </p>

        <img
          className="project-image"
          sizes="(max-width: 600px) 80vw, (max-width: 1400px) 25vw, 800px"
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
          sizes="(max-width: 600px) 80vw, (max-width: 1400px) 25vw, 800px"
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
      </section>
      <section></section>
    </div>
  );
};

export default MyProjects;
