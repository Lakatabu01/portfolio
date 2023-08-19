import React from "react";
import "../App.css";
import Icon from "@mdi/react";
import { mdiLinkedin } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import { mdiGmail } from "@mdi/js";

const Social: React.FC = () => {
  return (
    <div className="socials">
      <div>
        <a
          href="https://twitter.com/lakatabu01"
          aria-label="G0 to my x.com or Twitter profile"
        >
          <img
            className="social-image"
            src="https://seeklogo.com/images/T/twitter-x-logo-101C7D2420-seeklogo.com.png?v=638258862800000000"
            alt="twitter logo"
          />
        </a>
      </div>

      <div>
        <a
          href="https://github.com/Lakatabu01"
          aria-label="G0 to github profile"
        >
          <Icon path={mdiGithub} size={1.4} />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/bamgbade-olanrewaju-072a7a20a/"
          aria-label="G0 to my linkedin profile"
        >
          <Icon path={mdiLinkedin} size={1.4} />
        </a>
      </div>
      <div>
        <a
          href="mailto:bamgbadeolanrewaju@gmail.com"
          aria-label="link to send me an email"
        >
          <Icon path={mdiGmail} size={1.4} />
        </a>
      </div>
    </div>
  );
};

export default Social;

//`drop-down ${dropDown ? "show" : ""}`
