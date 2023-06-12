import './contactForm.css';
import { motion } from 'framer-motion';

// Framer motion used to animate in elements as they come into view for the first time

export default function ContactForm() {
    return (
    <section className='contact-section' id='contact'>
        <div className='subtitle-container'>
            <h2>Contact</h2>
        </div>
        <motion.div 
        className='contact-container'
        initial={{
            opacity:0,
            x:-100,
            }}
        whileInView={{
            opacity:1, 
            x:0,
            transition: {
                delay: 0.2,
                duration: 0.7
                }
            }}
        viewport={{ once: true  }}
        >
            <div className='contact-text'>
                <h4>Get in touch!</h4>
                <p className='main-text'>Let's work together to bring your web development vision to life! Whether you have a specific project in mind or are interested in potential employment opportunities, I'm here to help. With my passion for learning and problem-solving skills, I'm confident that I can provide innovative solutions that meet your needs.I look forward to discussing how we can work together.</p>
            </div>       
            <form className='contact-form' name="contact" >
                <div className='input-container'>
                    <label htmlFor="name">Name</label> <br />
                    <input type="text" id="name" name="name" required />
                </div>
                <div className='input-container'>
                    <label htmlFor="email">Email</label> <br />
                    <input type="email" id="email" name="email" required />
                </div>
                <div className='input-container form-wide'>
                    <label htmlFor="message">Message</label> <br />
                    <textarea id="message" name="message" required></textarea>
                </div>
                <div className='form-right'>
                    <input className='button' type="submit" value="Submit message" />
                </div>
            </form>
        </motion.div>
    </section> 
    )
}