import styles from './projectDetails.module.css';
import { AiFillGithub, AiFillEye } from 'react-icons/ai';
import ebiddaloy from './Pictures/ebiddaloy.png';
import tokisuki from './Pictures/tokisuki.png';
import skyticket from './Pictures/skyticket.png';


function ProjectDetails({ isExpanded }) {
  const projects = [
    {
      title: "eBiddaloy",
      description: "eBidyaloy is an online learning platform designed to meet the educational needs of students. It offers virtual presence for physical institutions, providing access to various study aids and online learning resources. Students can easily sign up to explore a wide range of educational tools and content.",
      technologies: ["React", "Laravel", "MySQL"],
      demo: "https://ebd-dev.dreamonlinelimited.xyz/",
      image: ebiddaloy
    },
    
    {
      title: "Tokisuki",
      description: "Luxury Watch Trading is an online platform for purchasing luxury watches. It allows users to buy watches through traditional methods or take part in exclusive watch auctions.",
      technologies: ["Vue.js", "Node.js", "MongoDB", "Tailwind CSS"],
      demo: "https://tokisuki.com/",
      image: tokisuki
    },
    {
      title: "Skyticket",
      description: "Skyticket is a Japanese online travel agency offering flight bookings, accommodations, car rentals, and study abroad services. It supports 42 languages and serves over 19 million users annually. The platform also integrates advanced technologies like the NDC standard for real-time flight data.",
      technologies: ["PHP", "JavaScript", "Docker"],
      demo: "https://skyticket.jp/",
      image: skyticket
    }
  ];

  return (
    <div className={`${styles.aboutContainer} ${isExpanded ? styles.expanded : ''}`}>
      <h2>My Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img src={project.image} alt={project.title} />
            </div>
            <hr className={styles.divider} />
            <div className={styles.projectContent}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.techStack}>
                {project.technologies.map((tech, i) => (
                  <span key={i} className={styles.techBadge}>{tech}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <AiFillEye /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectDetails;
