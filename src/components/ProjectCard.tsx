import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectProps {
  project: {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    live: string;
    image: string;
  };
  reverse?: boolean;
}

const ProjectCard = ({ project, reverse = false }: ProjectProps) => {
  const isInternalLink = project.live.startsWith('/');

  return (
    <div className={`relative grid md:grid-cols-2 gap-4 ${
      reverse ? 'md:text-right' : ''
    }`}>
      <div className={`md:order-${reverse ? 2 : 1}`}>
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
        />
      </div>
      
      <div className={`md:order-${reverse ? 1 : 2} flex flex-col justify-center`}>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{project.title}</h3>
        <p className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>
        <ul className={`flex flex-wrap gap-4 mb-4 ${
          reverse ? 'md:justify-end' : ''
        }`}>
          {project.tags.map((tag) => (
            <li key={tag} className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              {tag}
            </li>
          ))}
        </ul>
        <div className={`flex gap-4 ${
          reverse ? 'md:justify-end' : ''
        }`}>
          {project.github && (
            <a 
              href={project.github} 
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {isInternalLink ? (
            <Link 
              to={project.live} 
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300"
            >
              <ExternalLink size={20} />
            </Link>
          ) : (
            <a 
              href={project.live} 
              className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;