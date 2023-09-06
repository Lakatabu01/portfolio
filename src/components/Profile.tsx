import React, { useRef } from "react";
//import { programmer, programmer1 } from "./PhotoImports";

import {cartoon, cartoon1, cartoon2, cartoon3, cartoon4, cartoon5, cartoon6, cartoon7, cartoon8} from "./PhotoImports";
import { useState, useEffect } from "react";

const Profile: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const targetElementRef = useRef<HTMLDivElement | null>(null);

  //Function that checks if element is visible to change state
  //which inturn triggers style for transitioning
  const handleScroll = () => {
    if (targetElementRef.current) {
      const elementRect = targetElementRef.current.getBoundingClientRect();
      const elementTop = elementRect.top;
      const windowHeight = window.innerHeight;
      if (elementTop < windowHeight) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={targetElementRef}
      className={`profile ${isVisible ? "slider" : ""}`}
    >
    <div className="about">
      <div className="all-profile-text">
        <p className="profile-text">
          <span className="quote">" </span>
          Hello there, i love to build beautiful user friendly{" "}
          <span className="white">interfaces</span> that follow Web Content
          Accessibility guidelines. Beyond coding, I have a flair for{" "}
          <span className="white">technical writing</span>, where I enjoy
          crafting clear and informative documentation to simplify complex
          concepts for diverse audiences.
        </p>

        <p className="profile-text">
          Whether I'm on my own or part of a team, my goal is simple, deliver{" "}
          <span className="white">quality</span> that matches{" "}
          <span className="white">user</span> needs. I'm always eager to tackle
          what I don't know, <span className="white">learning</span> new things
          along the way.
        </p>

        <p className="profile-text">
          {" "}
          When I'm not coding or writing, you'll find me indulging in my two
          other passions, listening to <span className="white">music</span> that
          fuels my inspiration and hitting the{" "}
          <span className="white">gym</span> regularly to stay active and
          focused. So excited to share my portfolio with you. Alright ...thats
          enough introduction why don't you have a look around 
          <span className="quote"> "</span>
        </p>
      </div>
    </div>
      
      <div className="image-container">
      
         <img
          className="image"
          sizes=" (max-width: 768px) 80vw, (max-width: 900px) 80vw, (max-width: 1400px) 40vw, 400px"
          srcSet={`
          ${cartoon4} 200w,
          ${cartoon5}  396w,
          ${cartoon6}  525w,
          ${cartoon7}  704w,
          ${cartoon8}  872w,
          ${cartoon} 1014w,
          ${cartoon1} 1305w,
          ${cartoon2} 1359w,
          ${cartoon3} 1400w
          `}
          src={cartoon3}

          alt="Animation of a programmer at his workstation" />
      </div>

      

     
    </section>
  );
};

export default Profile;
