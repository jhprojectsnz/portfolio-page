import ProjectCard from "./ProjectCard";
import calculatorImg from '../assets/calculator.jpg';
import pongImg from '../assets/pong.jpg';
import drumMachineImg from '../assets/drummachine.jpg';
import quoteGeneratorImg from '../assets/quotegenerator.jpg';

import './Projects.css';

export default function Tutorials(){
   
   const projects = [
    {
        name:'React Calculator',
        type:'tutorial',
        img: calculatorImg,
        url:'https://codepen.io/JHprojects/pen/LYmvoGJ',
    },
    {
        name:'Pong',
        type:'tutorial',
        img: pongImg,
        url:'https://codepen.io/JHprojects/pen/YzOxevd',
    },
    {
        name:'Drum Machine',
        type:'tutorial',
        img: drumMachineImg,
        url:'https://codepen.io/JHprojects/pen/ZEoJYWw',
    },
    {
        name:'Random Quote Generator',
        type:'tutorial',
        img: quoteGeneratorImg,
        url:'https://codepen.io/JHprojects/pen/ExLjPXg',
    }
   ];

   const projectElements = projects.map(project => <ProjectCard data={project}/>)
   
    return (
        <section>
            <div className="subtitle-container">
                <h2>Tutorials and coarse projects</h2>
            </div>
            <div className="tutorials-container">
                {projectElements}
            </div>
        </section>
    )
}