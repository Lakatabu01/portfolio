const Footer = () => {
  return (
    <footer>
      <section className="glitch-div">
        <h3 className="collaborate"> Let's collaborate </h3>
        <button className="email-btn">Bamgbadeolanrewaju@gmail.com</button>
      </section>

      <div className="buy-coffee">
        <p>
          <span className="coffee-txt">
            If you find the content on my porfolio, blog, or elsewhere helpful
            and want to show extra support, you can buy me a coffee{" "}
          </span>{" "}
          here ☕
        </p>

        <img
          className="dancer"
          src="https://media.tenor.com/aWxn9I76-oQAAAAj/shumsirhk-shum.gif"
          alt=""
        />
      </div>

      <div>
        <p className="last">© Olanrewaju 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
