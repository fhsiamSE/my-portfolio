import styles from './DownloadResume.module.css';
import { AiOutlineDownload, AiOutlineEye } from 'react-icons/ai';

function DownloadResume({ isExpanded }) {
  const handleDownload = () => {
    // Create link to download the PDF
    const link = document.createElement('a');
    link.href = '/public/Resume/Resume.pdf'; // Path to your PDF file
    link.download = '/public/Resumes/Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    // Open PDF in new tab for viewing
    window.open('/public/Resume/Resume.pdf', '_blank');
  };

  return (
    <div className={`${styles.aboutContainer} ${isExpanded ? styles.expanded : ''}`}>
      <h2>Resume</h2>
      <div className={styles.resumeActions}>
        <button className={styles.resumeButton} onClick={handleDownload}>
          <AiOutlineDownload className={styles.resumeIcon} />
          Download Resume
        </button>
        <button className={styles.resumeButton} onClick={handleView}>
          <AiOutlineEye className={styles.resumeIcon} />
          View Resume
        </button>
      </div>
    </div>
  );
}

export default DownloadResume;
