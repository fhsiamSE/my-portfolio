import styles from './Profile.module.css';

function AboutMe({ isExpanded }) {
  return (
    <div className={`${styles.aboutContainer} ${isExpanded ? styles.expanded : ''}`}>
      <h2>About Me</h2> 
      <p>Hello! I'm a passionate developer with expertise in web development.</p>
      <br />
      <h5>I am a software engineer with 2+ years of experience at DreamOnline Ltd. and Adanture Dhaka Ltd., both Japanese-based IT companies in Bangladesh. 
        My expertise includes JavaScript, PHP, HTML, CSS, and more. <br />
        I am passionate about building efficient, innovative solutions and thrive in collaborative environments.<br /> 
        My experience in international teams has helped me grow both technically and professionally.</h5>
      <div className={styles.aboutContent}>
        <hr className={styles.divider} />
        <div className={styles.experienceSection}> <br />
          <h3>Education </h3> <br />
          <h6>Narayanganj High School and College [2000-20013]</h6> <br />
          <h6>Government Tolaram College [2014-2016]</h6> <br />
          <h6>University of Liberal Arts Bangladesh [2018-2022]</h6>
        </div>
        <hr className={styles.divider} />
        <div className={styles.skillsSection}>
          <h3>Skills</h3>
          <br/>
          <div className={styles.skillsList}> 
            <span>HTML/CSS</span> 
            <span>JavaScript</span>
            <span>React</span>
            <span>PHP</span>
            <span>Laravel</span>
            {/* Add more skills as needed */}
          </div>
        </div>
        <hr className={styles.divider} />
        <div className={styles.experienceSection}>
          <h3>Experience</h3> <br />
          <p>1. DreamOnline Ltd </p>
          <h6>Junior Software Engineer</h6> 
          <h6>Fronted</h6>
          <h6>2023-2024</h6><br />
          <p>2. Adanture Dhaka Ltd</p>
          <h6>Junior Software Engineer</h6> 
          <h6>Backend</h6>
          <h6>2024-Continuing</h6><br />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
