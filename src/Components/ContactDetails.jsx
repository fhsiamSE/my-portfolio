import styles from './Profile.module.css';
import { AiFillFacebook, AiFillLinkedin, AiFillMail, AiFillPhone } from 'react-icons/ai';

function ContactDetails({ isExpanded }) {
  return (
    <div className={`${styles.aboutContainer} ${isExpanded ? styles.expanded : ''}`}>
       <h2>Contact Details</h2> <br />
      <div className={styles.contactWrapper}>
        <div className={styles.contactGrid}>
        <a href="tel:+8801998890092" >  
            <div className={styles.contactCard}>
           <AiFillPhone className={styles.contactIcon} />
            <h3>Phone</h3>
          </div>
          </a>
          <a href="mailto:faisalhossainsiam@gmail.com">
          <div className={styles.contactCard}>
            <AiFillMail className={styles.contactIcon} />
            <h3>Email</h3>
          </div>
            </a>
            <a href="https://www.facebook.com/share/1CEGEw1BJ1/?mibextid=wwXIfr">
          <div className={styles.contactCard}>
            <AiFillFacebook className={styles.contactIcon} />
            <h3>Facebook</h3>
          </div>
            </a>
            <a href="https://www.linkedin.com/in/faisal-hossain-siam?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
          <div className={styles.contactCard}>
            <AiFillLinkedin className={styles.contactIcon} />
            <h3>LinkedIn</h3>
          </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
