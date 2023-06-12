// import ContactLinks from './ContactLinks';
// import './Hero.css';
// import {motion} from "framer-motion";

// export default function Hero(){
//     return (
//         <section className="fullnametitle-section">
//             <div className='fullnametitle-container'>
//                 <motion.div 
//                 className="name-container"
//                 animate={{x:[-200, 0], opacity:[0, 1]}}
//                 transition={{
//                     duration: 1,
//                     times: [0, 1],
//                   }}
//                 >
//                     <h1>Jonathan</h1>
//                     <h1>Hubert</h1>
//                 </motion.div>
//                 <motion.div 
//                 className='separator-line'
//                 animate={{y:[-200, 0], opacity:[0, 1]}}
//                 transition={{
//                     duration: 1,
//                     times: [0, 1],
//                   }}
//                 />
//                 <ContactLinks />
//                 <motion.p 
//                 className='intro-text'
//                 animate={{x:[200, 0], opacity:[0, 1]}}
//                 transition={{
//                     duration: 1,
//                     times: [0, 1],
//                   }}>
//                     Welcome to my portfolio! <br/> I'm a passionate and driven developer with background in research science. With my expertise in web development and my problem-solving skills, I'm committed to bringing innovative solutions to every project I work on
//                 </motion.p>
//             </div>
//             <a 
//             className='button' 
//             href='#projects'
          
//             >
//             Learn more
//             </a>
            
//         </section>
//     )
// }

// import './ProjectCard.css';
// import { FaAngleRight } from 'react-icons/fa';
// import { motion } from "framer-motion";

// export default function ProjectCard({data}) {

//     return (
//         <motion.div 
//         key={data.name}
//         initial={{
//             opacity:0,
//             x:-100,
//             }}
//         whileInView={{
//             opacity:1, 
//             x:0,
//             transition: {
//               delay: 0.2,
//               duration: 0.7
//               }
//         }}
//         viewport={{ once: true }}
//         className='project-card'
//         >   
//             {data.img ?
//             <img className="project-img" src={data.img} alt={data.name}/> :
//             <div className='project-img default-img'>Coming Soon</div>
//             }
//             <h3>{data.name}</h3>
//             {data.discription && <p className='project-text'>{data.discription}</p>}
//             <div className='technologies'>
//                 <p>HTML/CSS</p>
//                 <p>JavaScript</p>
//                 <p>React</p>
//                 <p>React</p>
//                 <p>React</p>
//             </div>
//             <div className="btn-container">
//                 {data.url && <a href={data.url} target='_blank' rel="noreferrer" className='project-btn'>Demo<FaAngleRight/></a>}
//                 {data.github && <a href={data.github} target='_blank' rel="noreferrer" className='project-btn'>GitHub<FaAngleRight/></a>}
//             </div>
//         </motion.div>
//     )
// }



/* old version */
/* .big-card {
    height: 25rem;
}

.small-card {
    height: 19rem;
}

.project-card-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 1rem;
    border-radius: 20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: all 0.2s ease;

    overflow: hidden;
    min-width: 15rem;
    max-width: 15rem; 
}

.project-img {
    width: fit-content;
    height: 200px;
    margin-bottom: 1rem;
}

.default-img {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    width: fit-content;
    height: 200px; 
    margin-bottom: 1rem;
    background-color: rgb(114, 114, 114);
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    font-weight: bold;
}

.project-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 85%;
}

.project-text h3 {
    margin: 0.5rem 0;
    width: 100%;
    text-align: center;
}

.project-text p {
    margin: 0;
    font-size: 0.9rem;
}

.btn-container {
    position:absolute;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    width: 90%;
    margin-bottom: 1rem; 
}

.project-btn {
    display: flex;
    align-items: center;
    gap: 2px;
    background-color: rgb(240, 24, 0);
    border: none;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
    line-height: 1rem;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 25px;
    padding: 8px 15px;
}

.project-card-container:hover {
    scale: 1.05;
    transform: translate(0, -0.5rem);
} */