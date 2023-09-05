import React, { useRef } from "react";
import image from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_1000.jpg";
import image1 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_200.jpg";
import image2 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_487.jpg";
import image3 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_707.jpg";
import image4 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_886.jpg";
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
      <div>
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
      {/* 
      <div className="image-container">
        <img
          className="image"
          sizes=" (max-width: 768px) 80vw, (max-width: 900px) 80vw, (max-width: 1400px) 40vw, 400px"
          srcSet={`
            ${image1} 200w,
            ${image2} 487w,
            ${image3} 707w,
            ${image4} 886w,
            ${image} 1000w
            `}
          src={image}
          alt="A man smiling"
        />
      </div>
      */}
    </section>
  );
};

export default Profile;
