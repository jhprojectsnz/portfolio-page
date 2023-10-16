import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiVisualstudiocode,
  SiGithub,
  SiGit,
  SiFigma,
} from "react-icons/si";
import { BiDevices } from "react-icons/bi";
import "./skills.css";
import { motion } from "framer-motion";

// Framer motion used to animate in elements as they come into view for the first time
export default function Skills() {
  return (
    <motion.div
      className="skills-section"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.2,
        },
      }}
      viewport={{ once: true }}
    >
      <h4 className="skills-subtitle">Frontend Development Skills</h4>
      <div className="skills-container">
        <div className="skill">
          <SiHtml5 className="skill-icon" />
          <p className="skill-text">HTML5</p>
        </div>
        <div className="skill">
          <SiCss3 className="skill-icon" />
          <p className="skill-text">CSS3</p>
        </div>
        <div className="skill">
          <SiJavascript className="skill-icon" />
          <p className="skill-text">JavaScript</p>
        </div>
        <div className="skill">
          <SiReact className="skill-icon" />
          <p className="skill-text">React</p>
        </div>
        <div className="skill">
          <BiDevices className="skill-icon" />
          <p className="skill-text">Responsive Web Design</p>
        </div>
        <div className="skill">
          <SiVisualstudiocode className="skill-icon" />
          <p className="skill-text">VS code</p>
        </div>
        <div className="skill">
          <SiGithub className="skill-icon" />
          <p className="skill-text">Github</p>
        </div>
        <div className="skill">
          <SiGit className="skill-icon" />
          <p className="skill-text">Git</p>
        </div>
        <div className="skill">
          <SiFigma className="skill-icon" />
          <p className="skill-text">Figma</p>
        </div>
      </div>
    </motion.div>
  );
}
