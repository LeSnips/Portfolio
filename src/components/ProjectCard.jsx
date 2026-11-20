import React from 'react';

function ProjectCard({ project, onClick }) {
  if (project.empty) {
    return (
      <div className="border border-primary/20 rounded-lg p-5 min-h-[220px] opacity-30 bg-primary/5 flex items-center justify-center">
        <span className="text-primary/40 text-xs uppercase tracking-wider">Emplacement libre</span>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      className="border border-primary/40 rounded-lg p-5 min-h-[220px] flex flex-col justify-between cursor-pointer hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:-translate-y-1"
    >
      <div>
        <h4 className="font-bold text-lg text-light mb-2">{project.title}</h4>
        <p className="text-sm text-light/70 leading-relaxed line-clamp-3">
          {project.shortDescription}
        </p>
      </div>

      {/* Compétences sous forme de badges */}
      <div className="flex flex-wrap gap-1.5 mt-4">
        {project.skills?.map((skill, index) => (
          <span
            key={index}
            className="text-xs text-primary bg-primary/15 border border-primary/30 px-2 py-0.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;