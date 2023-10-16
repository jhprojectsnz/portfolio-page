import "./ProjectCard.css";
import { FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Framer motion used to animate in elements as they come into view for the first time

export default function ProjectCard({ data }) {
  return (
    <motion.div
      className="project-card"
      key={data.name}
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
      <div className="project-text-container">
        <h3>{data.name}</h3>
        <div className="technologies">
          {data.technologies.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      {data.discription && <p className="project-text">{data.discription}</p>}
      {data.img ? (
        <img className="project-img" src={data.img} alt={data.name} />
      ) : (
        <div className="project-img default-img">Coming Soon</div>
      )}
      <div className="btn-container">
        {data.url && (
          <a
            href={data.url}
            target="_blank"
            rel="noreferrer"
            className="button project-btn"
          >
            Demo
          </a>
        )}
        {data.github && (
          <a
            href={data.github}
            target="_blank"
            rel="noreferrer"
            className="button project-btn"
          >
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
