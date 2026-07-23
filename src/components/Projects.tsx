import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';

const Projects = () => {
  const projects = [
    {
      title: "Peter Computer",
      description: "A modern computer retail website featuring a sleek product catalog, custom PC builder tool, and real-time inventory tracking. Built with React and integrated with a headless CMS for easy content management.",
      tags: ["React", "Tailwind CSS", "Vite"],
      live: "https://petercomputer.netlify.app/",
      image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      title: "Talk to School",
      description: "A comprehensive communication platform bridging teachers and parents. Features include real-time messaging, event scheduling, attendance tracking, and grade reporting. Available as both a mobile app and web-based admin dashboard.",
      tags: ["Figma"],
      live: "https://www.figma.com/design/N7hzOSfRLWxhYvGkOIvkzM/Untitled?node-id=1-3476&t=YV6uexuaSzjtn7Dc-1",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200&h=800"
    },
    {
      title: "Book Now",
      description: "A modern hotel booking platform with an intuitive interface for browsing and reserving accommodations.",
      tags: ["React", "CSS"],
      live: "https://booknow-azure.vercel.app/",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200&h=800"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">Projects</h2>
        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;