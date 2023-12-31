import ProjectCard from "./ProjectCard";
import mealPlannerImg from "../assets/mealplanner.jpg";
import profileImg from "../assets/profile.jpg";
import producefinderImg from "../assets/producefinder.jpg";
import "./Projects.css";

export default function Projects() {
  const projects = [
    {
      name: "Find Fresh Produce",
      img: producefinderImg,
      url: "https://findfreshproduce.vercel.app/",
      github: "https://github.com/jhprojectsnz/produce-finder",
      technologies: ["HTML/CSS", "JavaScript", "React"],
      discription: (
        <>
          Many growers around NZ sell fresh, affordable fruit and vegetables
          directly to consumers at roadside stalls, market and small shops. But
          unless you're passing by, it's hard to know where these stalls are and
          what they have in stock. <br />
          <br />
          This web app connects growers with consumers - maximising New
          Zealanders access to fresh produce directly from the source. <br />
          <br />
          <details>
            <summary>More Details</summary>
            The Demo version (Front-end only) encompasses the complete user
            experience - search, save, create, update or delete stalls as if you
            were a buyer or a seller.
          </details>
        </>
      ),
    },
    {
      name: "Quick Meal Planner",
      img: mealPlannerImg,
      url: "https://quickmealplanner.vercel.app/",
      github: "https://github.com/jhprojectsnz/meal-planner",
      technologies: ["HTML/CSS", "JavaScript", "React"],
      discription: (
        <>
          Trying to decide what to cook for dinners is not always easy. Then
          once you decide, getting a shopping list together can be tedious.
          <br />
          <br />
          This web app streamlines this process - suggesting delicious recipes
          so the user doesn't have to decide. A shopping list for the selected
          recipes is generated and sorted automatically, simplifying the
          supermarket shop.
        </>
      ),
    },
    {
      name: "Portfolio page",
      img: profileImg,
      github: "https://github.com/jhprojectsnz/portfolio-page",
      technologies: ["HTML/CSS", "JavaScript", "React"],
      discription: (
        <>
          My portfolio page displaying my latest projects, skills and ways to
          get in touch.
        </>
      ),
    },
  ];

  return (
    <section id="projects">
      <div className="subtitle-container">
        <h2>Projects</h2>
      </div>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard key={project.name} data={project} />
        ))}
      </div>
    </section>
  );
}
