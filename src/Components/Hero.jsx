import ContactLinks from './ContactLinks';
import './Hero.css';

export default function Hero(){
    return (
        <section className="hero-section">
            <div className="name-container">
                <h1>Jonathan</h1>
                <h1>Hubert</h1>
            </div>
            <div className='separator-line'/> {/* separates name and text - animates in so can't use border of .intro-text */}
            <ContactLinks />
            <p className='intro-text'>
                Welcome to my portfolio! <br/> I'm a passionate and driven developer with background in research science. With my expertise in web development and my problem-solving skills, I'm committed to bringing innovative solutions to every project I work on
            </p>
            <a className='button learn-more-btn appear-animation' href='#projects'>Learn more</a>
        </section>
    )
}

