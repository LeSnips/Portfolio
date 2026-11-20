import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProjectsGrid from './components/ProjectsGrid';
import ProjectModal from './components/ProjectModal';
import { infoProjects, horsInfoProjects } from './data/projectsData';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="bg-anthracite text-light min-h-screen font-sans p-4 md:p-8">
      <Navbar />
      
      {/* Point d'ancrage "À Propos" */}
      <div id="a-propos" className="scroll-mt-28">
        <Profile />
      </div>
      
      {/* Point d'ancrage "Projets" */}
      <div id="projets" className="scroll-mt-28">
        <ProjectsGrid title="Dans l'info" projects={infoProjects} onProjectClick={setSelectedProject} />
        <ProjectsGrid title="Hors info" projects={horsInfoProjects} onProjectClick={setSelectedProject} />
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}

export default App;