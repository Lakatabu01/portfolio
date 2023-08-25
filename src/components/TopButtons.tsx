const Buttons = () => {
  return (
    <section className="top-buttons">
      <button className="resume-button">
        <a href="https://drive.google.com/file/d/18_4VXZU3bDxB510WoDsXoG3Ef_uy0xty/view?usp=drivesdk">
          {" "}
          Resume
        </a>{" "}
      </button>
      <button className="hire-me-button">
        <a
          href="mailto:bamgbadeolanrewaju@gmail.com"
          aria-label="link to send me an email"
        >
          Hire me
        </a>
      </button>
    </section>
  );
};

export default Buttons;
