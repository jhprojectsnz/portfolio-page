import './navbar.css';
import logo from '../assets/JHdark.jpg';

export default function Navbar() {

    // Anchor tags used for nav links to other parts of the page
    // These contain text and a underline that animates in on hover
    // Logo is absolute potion in the top left of the page 

    return (
        <nav className="navbar appear-animation">
            <img className='nav-logo' src={logo} alt='JH logo' />
            <a href="#projects" className='nav-link-container'>
                <p className="nav-link-text">Projects</p>
                <div className='nav-underline' />
            </a>
            <a href="#about" className='nav-link-container'>
                <p className="nav-link-text">About</p>
                <div className='nav-underline' />
            </a>
            <a href="#contact" className='nav-link-container'>
                <p className="nav-link-text">Contact</p>
                <div className='nav-underline' />
            </a>
        </nav>
    )
}
