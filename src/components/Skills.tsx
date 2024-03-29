import { useState, useEffect, useRef } from "react";
import React from "react";

const Skills: React.FC = () => {
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
    <section className="skills">
      <h2>Skills</h2>
      <div
        ref={targetElementRef}
        className={`skill-grp ${isVisible ? "slide-in-left" : ""}`}>
        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML logo"
          />
          <p>HTML</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS logo"
          />

          <p>CSS</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="Javascript logo"
          />

          <p>Javascript</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="Typescript logo"
          />

          <p>Typescript</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React logo"
          />
          <p>React</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git logo"
          />

          <p>Git</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="Redux logo"
          />

          <p>Redux</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
            alt="Webpack logo"
          />

          <p>Webpack</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
            alt="Firebase logo"
          />

          <p>Firebase</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Linux logo"
          />

          <p>Linux CLI</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
            alt="NPM logo"
          />

          <p>NPM</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            alt="Jest logo"
          />

          <p>Jest</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/babel/babel-original.svg"
            alt="Babel logo"
          />

          <p>Babel</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="data:image/jpeg;base64,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"
            alt="Vite logo"
          />

          <p>Vite</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="data:image/jpeg;base64,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"
            alt="Vitest logo"
          />

          <p>Vitest</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACvCAMAAADzNCq+AAAAY1BMVEX///84vfgjufgvu/geuPjp9/73/P/t+f7i9P76/v+r4PzU7/3z+/+l3vvM7P265fxlyfmR1/tCwPiB0vpZxvlzzfrI6/3a8v6d2/u+5/w8v/iy4vxgyPlSxPmn3/t90fqL1frNJVehAAAI+0lEQVR4nO2daZuyOgyGhwaRRQQKFQQZ+P+/8rDpuODIkrSnzHt/9BoZ+tglTZP060s5u/TsRpUIk5Jzo4WXoYgjPzjae9XvphTLPmeCG8AYNBj3tB+w5vP8EgW2pfpFFeCkbmi0whi/08qUh9nxT2lknSv+WZoHkSAs/spgO4um30zW5qYRM8PCUf3u5KT1EnGuErHqqLoBpATlYnGuEuX+QXUrqHA5WyXOIBHUm5yJAhR1eoWizS1nXomlTqcQ81U3CBUrxlSnheVn1Y3C42ysm5XHFbrYqtuFg1Nhd54eYK7qpmFgc4LO08PCnerWrSag6Tw9ALrPQpFJKE8Di1W3cBWCsvd0QKnxGAvJ5WkEMrTdk4VkM/MDuq5j9IPrKpCWk5A0eRqBhOrGzieSJ08zCSW6eT1c4oX9WSCul9PjKLP3dALlOvWgnZyV60EgQyNDKJGvTyOQNhv6WvboGkhVN3waR7lz8w+ghUCWgsE1wJCHGMmBW6VOHwNwBaLYuUhf2ukEKiiOAUqV8jTgCeSZBCtiprT7NACWHbQ3cqQn3T/0nTx9RA/rgn20EMjhFH6BeKTxrTClqP3gfDoFRVYLzpZHKUgTqAR2wnjOA7uX7gMmj4OXcZwW1dpYhV/0yREECsHI8Y+xn9Z2YHn01mazfSqJIF89sQpmAL5XyX7oPsCSDz3UE1QKrbSkW+ceC9Y9Y4T72QfMxPv8DbuiUYit8tp3vk9AH173sw8rJ76hTXPKYRaLm+F07gfAX73qW1cAY0bnDHKKLsSyha3Y9yfi63rgGNbPu1WzvHkHEl/+QvPFG34tfOOwGFq54FjcJREoWeCUvjViafd7z7DzWuQrTymsaoDZFl519V0xdIe/1yvPqkXfPpD4ZGeOseNtJiQwfvrFffG0+EUSRwX59Gl2fzcNsgm2yUx6eVYYVTRHikxMGylWdjfEIVnejDec2tat29L5JAIBZJ8tPcc37v85wdZUwPrHkixj7Uan/n2/YddPVny5rh0jOAjy0IXjAeP+O4l2RfK8x2H4cXvN8MJ46pnM/QgsF763fziScPanLHn1RRHMPl8VsOU7njtOhP7Z1oXJE1FnflG4flYlfDxFz8QPSXM4i3CeRClQL1Ln6oWXpM6fv7jgtOSe1EQzqKgF+gjJsQXijK9YIEAaCA8kmNEldJP0FHKCU+U9rj1FGnX/AYK1Hf8gX51AsGx7LRt1AmmSm6hoDiLYeBGhZBXDMuJkoKAHUWws6FAgkE5BwjePrTSww/PIsSkye99iajM339jRZa++yoPif5CMJSPHrkPXNLJYTjS1qW1JBiKn9JM8Og6ugSN1xKJOZvMY+wttFwLAPw2UC2nUMJR6JdeNkZLECHWYeng0PoFeI6cHCMIM1YBbY2mAhfqPrRsu9kIGhsbL+gj7GDPaFVisibNwOrYwkRQCFmqRbjiXHUrENDCxSXVa9hlfKRGDWDdXzzy8ClbUKS1dvfyESzgEC+vc8myzA+sJ6xwb5nSN2qiN8s+IM5C6Vck+FtruAlou9XlDtuAMLK+oQ26w56AeuJZp52EUpKqKRzsNVoujtHy1c9gdAzeLRZKUJedlmSRtmf+sONkHFS928E5uVIVJmbf5pWYD5LxMRNy+kYL3+R+RBvXl2ptfR3rbo01e+ce/ONgtr433nFBcv7t4IA40qsmznn0gjDn3DrQDj0fe9qvqtzhBuMhkhaYbaVvBcTJ2vdye74LXN23Qn5K1ToUtb5fPa3fLg0LJJofZGe/egY/lAvQDNzkdWLgt0zHCLm4ALN7Ocu9RnMkBbOW8iao2OhNbWOz3CV2m2vy09P8dR7rzbqNNS9d8FqIO7weu9c7VJ49pA5I0GUlIqf1tahTK/4ik8rtM6DkJSatOrGfclsTizYBcTlYG9FPzPQRlUmiRnXWl2TJmS6/drFX4nyMxHeQmkEYhbkJF6W99Qvtp6hN9RJfMmVRVTrUm15mquNVjEAi7B1HEpSoaXR0mrkAugT6vpa1lgtqDvBDxYVck3Yb3DvMbrSU7CptKeVUihiWQw00C5xsff+vbtQP0Fw9gDbGQEVRB+B7pPm1QYxL5wdFLU+8YfEdhPiX0Z7lAKIZixQhK7zoj4hgj4U0Hz18UdixPoIgZJn4oxNPa3t478N7zcKyAaLJan2Tduob52oe84OSP6iTn312fBxctauGR5dV/e1p5COqrPaSYs8sUp1WR01TbXVUVvztYIBhed4sX4xMPN52MZB5ac9drX0Eaf3j9FNqBOVbInqQ2BiQLNwdWv3+kKxw/P1u1IKkazxd57a8Z4AzdOLz5NeZbaHZJMsYW7A+uJ+KAv/caboWBfMnERnJ1hVnPfAvnlh2PX0nDGe4duCwb9yRhQsBn/Vbej98cf3bue+byhZWmjNqM4/l99fMTEfhqL6325opZ3yPZb0A+7WjMerQzaC5dWic7URk1Fn42VA/Zw/8mWNy/YX2v3NFEmzUbneLX/mDXTwYGww9tbKyq9fvmPVE4HjAm3mWNpv5L2gPB1qsZXhilyQ4khtAgUR4X3oPVZ3mugJGcEIYfUVQwnJqsFplAvUZglGFcR1kWxSGHcTcdxTlauGZDeA+pQL1KV979Ab7t0xiHaM5aS0FwwwMUsTIe4ox/UCsQwc6r2R1gBnCpFQh/496A2yVVCqRFkIM6gQD/SioKlAmkS21rRQLpEmMlww4ageC6STIUCASlTqkKjvRANN3i8CXHEulXvZnEa/8OfQKEf6jlpXGsPbNXQyGrB+kpj5Sq8TrL8/W1k7HO63stQ4Mgn4RMnbJ/XinIQvE69L93wKaoiX6FlVon0ffQpbOyWnXbUCCqVLGFIh4D6FWEGkyxodLxuxCraPwAGHql9X7kiDlPA6s31HkGziXSKAMmNPNmTOSEoRCY27yVoSON1+VuAINoAybPL1hFsuLegUuhkxt1IXZWzk+SaisBZ9vuOnfYbjijUDIAM0SxzTn5LY73LeBjTmJ374D4/iMlpF/YeW4d8mvy5j39Z0nsn/7MoHqPfTwXWR1XImwRVd3eOuDZW6gi+Y9//OM9/wEuQoe2zzDLwQAAAABJRU5ErkJggg=="
            alt="Tailwind logo"
          />

          <p>Tailwind CSS</p>
        </div>

        <div className="each-skill">
          <img
            className="devicons"
            src="data:image/png;base64,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"
            alt="NextJs logo"
          />

          <p>NextJS</p>
        </div>
      </div>
    </section>
  );
};
export default Skills;
