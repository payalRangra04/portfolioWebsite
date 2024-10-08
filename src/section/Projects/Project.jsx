import styles from './ProjectsStyles.module.css';
import api  from '../../assets/1.png';
import dice from '../../assets/dice.png';
import personality from '../../assets/personality.png';
import ProjectCard from '../../common/ProjectCard';


function Projects() {
    return (
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={api}
            link="https://github.com/payalRangra04/420DW3_07278_Project"
            h3="Task API"
            p="Python API"
          />
          <ProjectCard
            src={personality}
            link="https://github.com/payalRangra04/WebClientProject"
            h3="Personality Test"
            p="Website"
          />
          <ProjectCard
            src={dice}
            link="https://github.com/payalRangra04/DiceProject"
            h3="Dice IT"
            p="IOS Application"
          />
         
          
        </div>
      </section>
    );
  }

export default Projects;