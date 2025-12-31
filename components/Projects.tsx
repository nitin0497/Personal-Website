import React from 'react';
import { PROJECTS } from '../constants';
import SectionHeader from './SectionHeader';
import { Github, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div>
      <SectionHeader title="Key Projects" />
      <div className="grid grid-cols-1 gap-16">
        {PROJECTS.map((project, index) => (
          <div key={index} className="flex flex-col gap-8 border-b border-slate-200 pb-16 last:border-0 last:pb-0">
            {/* Header */}
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
              {project.githubLink && (
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <Github size={18} />
                  <span>View on GitHub</span>
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Description */}
            <p className="text-slate-700 leading-relaxed text-lg">
              {project.description}
            </p>

            {/* Key Contributions */}
            <div className="space-y-6">
              {project.keyContributions?.map((contrib, cIdx) => (
                <div key={cIdx}>
                  {contrib.title && (
                    <h4 className="text-lg font-bold text-slate-800 mb-2">{contrib.title}</h4>
                  )}
                  <ul className="list-disc list-outside ml-5 space-y-2 text-slate-700 marker:text-blue-400">
                    {contrib.items.map((item, iIdx) => (
                      <li key={iIdx} className="leading-relaxed pl-1">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
