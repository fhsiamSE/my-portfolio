import { useState } from 'react'
import Sidebar from "./Components/SideBar"
import ProfilePic from "./Components/ProfilePic"
import AboutMe from "./Components/AboutMe"
import ProjectDetails from "./Components/ProjectDetails"
import ContactDetails from "./Components/ContactDetails"
import DownloadResume from "./Components/DownloadResume"

function App() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSection, setActiveSection] = useState('About');

  const handleSidebarToggle = (expanded) => {
    setIsExpanded(expanded);
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'About':
        return <AboutMe isExpanded={isExpanded} />;
      case 'Projects':
        return <ProjectDetails isExpanded={isExpanded} />;
      case 'Contact':
        return <ContactDetails isExpanded={isExpanded} />;
      case 'Resume Download':
        return <DownloadResume isExpanded={isExpanded} />;
      default:
        return <AboutMe isExpanded={isExpanded} />;
    }
  };

  return (
    <div>
      <Sidebar 
        onToggle={handleSidebarToggle} 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <ProfilePic isExpanded={isExpanded} />
      {renderActiveSection()}
    </div>
  );
}

export default App;
