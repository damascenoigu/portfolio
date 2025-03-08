import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  githubUrl: string;
  demoUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tech,
  features,
  githubUrl,
  demoUrl,
}) => {
  return (
    <div className="group relative bg-black/20 p-6 rounded-lg border border-[#9380DB]/20 hover:border-[#9380DB]/50 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-[#9380DB]/5 to-[#00FFFF]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <h3 className="text-xl font-semibold mb-3 text-[#9380DB]">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2 text-[#00FFFF]">Tecnologias:</h4>
        <div className="flex flex-wrap gap-2">
          {tech.map((t, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-[#9380DB]/20 text-[#9380DB]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold mb-2 text-[#00FFFF]">Funcionalidades:</h4>
        <ul className="list-disc list-inside text-sm text-gray-300">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#00FFFF] transition-colors"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-gray-300 hover:text-[#00FFFF] transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;