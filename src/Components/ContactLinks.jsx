import './ContactLinks.css';
import { FiMail, FiCodepen, FiGithub } from 'react-icons/fi';


export default function ContactLinks(){

    return (
        // Each link is represented by an icon and has a background shape that animates in on hover
        <div className="contact-links-container appear-animation">
            <a href='#contact' className="contact-link" title='Contact'>
                <FiMail className='contact-icon'/>
                <div className='hover-background' />
            </a>
            <a href='https://codepen.io/JHprojects' target='_blank' rel="noreferrer" className="contact-link" title='Codepen'>
                <FiCodepen className='contact-icon'/>
                <div className='hover-background' />
                </a>
            <a href='https://github.com/jhprojectsnz' target='_blank' rel="noreferrer" className="contact-link" title='Github'>
                <FiGithub className='contact-icon'/>
                <div className='hover-background' />
            </a>
        </div>
    )
}