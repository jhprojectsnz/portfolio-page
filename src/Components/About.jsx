import "./About.css";
import Skills from "./skills";
import aboutImage from "../assets/aboutimage.jpg";
import { motion } from "framer-motion";

// Framer motion used to animate in elements as they come into view for the first time

export default function About() {
  return (
    <section className="about-section" id="about">
      <motion.div
        className="about-container"
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.2,
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <div className="subtitle-container">
          <h2>About</h2>
        </div>
        <div className="about-content">
          <img
            className="about-image"
            src={aboutImage}
            alt="cartoon man at computer"
          />
          <p className="about-text main-text">
            Hi! I’m Jonathan Hubert, a web developer with a background as a
            research scientist.
            <br />
            <br />
            As a research scientist, I developed a strong foundation in critical
            thinking, problem-solving, and attention to detail. These skills
            have proven invaluable in my transition to web development, where I
            approach each project with a rigorous and analytical mindset.
            <br />
            <br />
            What I love most about web development is the ability to bring ideas
            to life. In the same way that a scientist designs experiments to
            test hypotheses, a web developer designs websites and applications
            to meet user needs.
            <br />
            <br />
            I'm passionate about staying up-to-date with the latest trends and
            technologies in the field, and I'm always eager to take on new
            challenges.
          </p>
        </div>
      </motion.div>
      <Skills />
    </section>
  );
}
