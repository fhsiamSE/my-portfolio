import { useState } from 'react';
import styles from './Sidebar.module.css';
import { FaBars } from 'react-icons/fa';
import { AiOutlineUser, AiOutlinePhone, AiOutlineFundProjectionScreen, AiOutlineCloudDownload } from 'react-icons/ai';

function Sidebar({ onToggle, activeSection, setActiveSection }) {
  const [isExpanded, setIsExpanded] = useState(true);

  const menuItems = [
    { name: 'About', icon: <AiOutlineUser /> },
    { name: 'Projects', icon: <AiOutlineFundProjectionScreen /> },
    { name: 'Contact', icon: <AiOutlinePhone /> },
    { name: 'Resume Download', icon: <AiOutlineCloudDownload /> },
  ];

  const toggleSidebar = () => {
    const newExpandedState = !isExpanded;
    setIsExpanded(newExpandedState);
    onToggle(newExpandedState);
  };

  const handleItemClick = (itemName) => {
    setActiveSection(itemName);
  };

  return (
    <div className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
      <button className={styles.toggleBtn} onClick={toggleSidebar}>
        <FaBars />
      </button>
      <div className={styles.content}>
        <ul className={styles.menuList}>
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className={`${styles.menuItem} ${activeSection === item.name ? styles.active : ''}`}
              onClick={() => handleItemClick(item.name)}
            >
              <span className={styles.icon}>{item.icon}</span>
              {isExpanded && <span className={styles.label}>{item.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
