import React from 'react';
import { X, ExternalLink } from 'lucide-react';

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-anthracite border border-primary rounded-xl p-6 md:p-10 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-[0_0_40px_rgba(124,58,237,0.2)]"
      >
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-5 right-5 text-light/50 hover:text-primary transition-colors"
        >
          <X size={26} />
        </button>

        {/* En-tête du projet */}
        <div className="pr-8 mb-6">
          <h2 className="text-3xl font-bold text-light mb-1">{project.title}</h2>
          {project.subtitle && (
            <p className="text-lg text-primary/90 font-medium">{project.subtitle}</p>
          )}
        </div>

        {/* Compétences */}
        {project.skills && project.skills.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs font-medium bg-primary/20 text-light border border-primary/40 px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Description détaillée */}
        <div className="space-y-4 text-light/85 leading-relaxed mb-8">
          {Array.isArray(project.fullDescription) ? (
            project.fullDescription.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{project.fullDescription}</p>
          )}
        </div>

        {/* Galerie photos (s'affiche uniquement si des images sont renseignées) */}
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-primary/80 mb-3">
              Aperçu
            </h3>
            <div className={`grid gap-4 ${project.images.length > 1 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {project.images.map((img, index) => (
                <div key={index} className="overflow-hidden rounded-lg border border-primary/30 bg-black/30">
                  <img
                    src={img.src}
                    alt={img.alt || project.title}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Liens externes (GitHub, démo, rapport PDF, etc.) */}
        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-4 border-t border-primary/20">
            {project.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-secondary text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                {link.label}
                <ExternalLink size={16} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;