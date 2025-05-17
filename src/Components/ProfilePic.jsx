import styles from './ProfilePic.module.css'
import profileImage2 from './Pictures/0.jpg'
// import profileImage from './Pictures/prof.jpg'

function ProfilePic({ isExpanded }) {
  return (
    <div className={`${styles.profileContainer} ${isExpanded ? styles.expanded : ''}`}>
      <div className={styles.imageWrapper}>
        <img
          src={profileImage2}
          alt="Profile"
          className={styles.profileImage2}
        />
        <div className={styles.nameOverlay}>
          <h1>MD Faisal Hossain</h1>
          <h5>Hello! I'm a passionate developer with expertise in web development</h5>
        </div>
      </div>
    </div>
  );
}

export default ProfilePic;
