import "./contactForm.css";
import { motion } from "framer-motion";

// Framer motion used to animate in elements as they come into view for the first time

export default function ContactForm() {
  return (
    <section className="contact-section" id="contact">
      <motion.div
        className="contact-container"
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
          <h2>Contact</h2>
        </div>
        <div className="contact-content">
          <div className="contact-text">
            <h4>Get in touch!</h4>
            <p className="main-text">
              Let's work together to bring your web development vision to life.
              Whether you have a specific project in mind or think I'd be a good
              fit for your team, I'm here to help. With my passion for learning
              and ability to solve complex problems, I'm confident I can provide
              innovative solutions that meet your needs. I look forward to
              discussing how we can collaborate.
            </p>
          </div>
          <form
            className="contact-form"
            name="contact"
            action="https://formspree.io/f/mgejrrde"
            method="POST"
          >
            <div className="input-container">
              <label htmlFor="name">Name</label> <br />
              <input type="text" id="name" name="name" required />
            </div>
            <div className="input-container">
              <label htmlFor="email">Email</label> <br />
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-container form-wide">
              <label htmlFor="message">Message</label> <br />
              <textarea id="message" name="message" required></textarea>
            </div>
            <div className="form-right">
              <input className="button" type="submit" />
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
