import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsGrid({ title, projects, onProjectClick }) {
  return (
    <div className="max-w-6xl mx-auto mb-10">
      <h3 className="text-xl font-bold mb-4 border-b border-primary/30 pb-2 inline-block">
        {title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onClick={() => !project.empty && onProjectClick(project)} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsGrid;