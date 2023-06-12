import ProjectCard from "./ProjectCard";
import mealPlannerImg from '../assets/mealplanner.jpg'
import profileImg from '../assets/profile.jpg';
import './Projects.css';

export default function Projects(){
    const projects = [
        {
            name:'Quick Meal Planner',
            type:'project',
            img: mealPlannerImg,
            url:'#',
            github:'#',
            technologies:['HTML/CSS', 'JavaScript', 'React'],
            discription:'Fridge empty? Can\'t decide what to cook? Get delicious meal suggestions and generate a sorted shopping list in minutes.'
        },  
        {
            name:'Portfolio page',
            type:'project',
            img: profileImg,
            github:'#',
            technologies:['HTML/CSS', 'JavaScript', 'React'],
            discription:'My portfolio page outlining my latest projects, skills and ways to get in contact'
        },  
        {
            name:'Direct from grower',
            type:'project',
            technologies:['HTML/CSS', 'JavaScript', 'React'],
            discription:'Search for friut and vegetable growers with roadside stalls, market days and click and collect services. Buy direct to get fresh produce at affordable prices while supporting our local farmers'
        }
    ];
    
    return (
        <section id="projects">
            <div className="subtitle-container">
                <h2>Projects</h2>
            </div>
            <div className="projects-container">
            {projects.map(project => <ProjectCard key={project.name} data={project}/>)}
            </div>
        </section>
    )
 }