const Footer = () => {
  return (
    <footer>
      <section className="glitch-div">
        <h3 className="collaborate"> Let's collaborate </h3>

        <a
          href="mailto:bamgbadeolanrewaju@gmail.com"
          aria-label="link to send me an email">
          <button className="email-btn"> Send me an email</button>
        </a>
      </section>

      <div className="buy-coffee">
        <p>
          <span className="coffee-txt">
            If you find the content on my porfolio, blog, or elsewhere helpful
            and want to show extra support, you can buy me a coffee{" "}
          </span>{" "}
          <a href="https://www.buymeacoffee.com/bamgbadeol8">here ☕</a>
        </p>

        <img
          className="dancer"
          src="https://media.tenor.com/aWxn9I76-oQAAAAj/shumsirhk-shum.gif"
          alt="Dancing man"
        />
      </div>

      <div>
        <p className="last">© Olanrewaju 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
