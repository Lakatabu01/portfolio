import React from "react";
import image from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_1000.jpg";
import image1 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_200.jpg";
import image2 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_487.jpg";
import image3 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_707.jpg";
import image4 from "../assets/profile-image/IMG-1360_f8rd4s_c_scale,w_886.jpg";

const Profile: React.FC = () => {
  return (
    <section className="profile">
      <div>
        <p className="profile-text">
          Hello there, I'm Bamgbade Olanrewaju a{" "}
          <span className="white">frontend web developer</span>, i love to build
          beautiful user friendly interfaces that follow Web Content
          Accessibility guidelines. Beyond coding, I have a flair for{" "}
          <span className="white">technical writing</span>, where I enjoy
          crafting clear and informative documentation to simplify complex
          concepts for diverse audiences.
        </p>

        <p className="profile-text">
          {" "}
          When I'm not coding or writing, you'll find me indulging in my two
          other passions: listening to <span className="white">music</span> that
          fuels my inspiration, and hitting the{" "}
          <span className="white">gym</span> regularly to stay active and
          focused. So excited to share my portfolio with you. Alright ...thats
          enough introduction why don't you have a look around
        </p>

        <p className="profile-text">
          Hello there, I'm Bamgbade Olanrewaju a{" "}
          <span className="white">frontend web developer</span>, i love to build
          beautiful user friendly interfaces that follow Web Content
          Accessibility guidelines. Beyond coding, I have a flair for technical
          writing, where I enjoy crafting clear and informative documentation to
          simplify complex concepts for diverse audiences.
        </p>
      </div>
      <div className="image-container">
        <img
          className="image"
          sizes=" (max-width: 600px) 80vw, (max-width: 1400px) 40vw, 400px"
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
    </section>
  );
};

export default Profile;
