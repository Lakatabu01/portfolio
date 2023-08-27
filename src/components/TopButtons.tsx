const Buttons = () => {
  return (
    <section className="top-buttons">
      <a
        href="https://drive.google.com/file/d/18_4VXZU3bDxB510WoDsXoG3Ef_uy0xty/view?usp=drivesdk"
        aria-label="link to send download resume"
      >
        {" "}
        <button className="resume-button">Resume</button>
      </a>{" "}
      <a
        href="mailto:bamgbadeolanrewaju@gmail.com"
        aria-label="link to send me an email"
      >
        <button className="hire-me-button">Hire me</button>
      </a>
    </section>
  );
};

export default Buttons;
