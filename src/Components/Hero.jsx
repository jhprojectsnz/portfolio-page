import ContactLinks from "./ContactLinks";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="name-container">
          <h1>Jonathan</h1>
          <h1>Hubert</h1>
          <h3>Web Developer</h3>
        </div>
        {/* separates name and text - animates in so can't use border of .intro-text */}
        <div className="separator-line" />
        <p className="intro-text">
          <span className="hero-bold">Welcome!</span>
          <br /> I'm a self-taught developer based in Auckland, NZ. <br />I
          specialise in solving problems and creating custom web applications. I
          enjoy taking on new challenges and learning new skills.
        </p>
      </div>
      <ContactLinks />
      <a
        className="button learn-more-btn appear-animation hover"
        href="#projects"
      >
        Learn more
      </a>
    </section>
  );
}
