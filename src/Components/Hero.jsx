import ContactLinks from "./ContactLinks";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="name-container">
          <h1>Jonathan</h1>
          <h1>Hubert</h1>
          <h3>Web developer</h3>
        </div>
        <div className="separator-line" />
        {/* separates name and text - animates in so can't use border of .intro-text */}
        <p className="intro-text">
          <span className="hero-bold">Welcome to my portfolio!</span> <br /> I'm
          a self-taught web developer with a passion for solving complex
          problems. I work with HTML, CSS, JavaScript, and various frameworks
          and libraries to build websites that solve real-world problem I'm
          committed to bringing innovative solutions to every project I work on
        </p>
      </div>
      <ContactLinks />
      <a className="button learn-more-btn appear-animation" href="#projects">
        Learn more
      </a>
    </section>
  );
}
