'use client'

import { useState } from 'react'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Peter Computer",
      description: "A comprehensive e-commerce platform for computer hardware and custom PC building. Features include real-time inventory tracking, custom PC configurator, user reviews, and secure payment integration.",
      longDescription: "Built with React and TypeScript, this full-stack e-commerce solution includes advanced features like dynamic pricing based on component compatibility, 3D PC builder visualization, and AI-powered recommendations. The backend is powered by Node.js with PostgreSQL for robust data management.",
      tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"],
      category: "fullstack",
      live: "https://petercomputer.netlify.app/",
      github: "https://github.com/bemnet884/peter-computer",
      image: "https://images.unsplash.com/photo-1537498425277-c283d32ef9db?auto=format&fit=crop&q=80&w=1200&h=800",
      featured: true
    },
    {
      id: 2,
      title: "Talk to School",
      description: "A modern communication platform bridging the gap between educators, students, and parents. Includes real-time messaging, event scheduling, grade tracking, and administrative dashboards.",
      longDescription: "Designed in Figma with a focus on accessibility and user experience. The platform features role-based interfaces for teachers, students, and parents, with real-time notifications and comprehensive analytics for educational institutions.",
      tags: ["Figma", "UI/UX", "React", "Socket.io", "MongoDB"],
      category: "design",
      live: "https://www.figma.com/design/N7hzOSfRLWxhYvGkOIvkzM/Talk-to-School",
      github: "#",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200&h=800",
      featured: true
    },
    {
      id: 3,
      title: "Book Now",
      description: "A sleek hotel booking platform with intuitive search, filtering, and reservation capabilities. Features include dynamic pricing, availability calendar, and integrated payment processing.",
      longDescription: "This project showcases modern web development practices with server-side rendering, optimistic UI updates, and responsive design. Built with performance in mind, featuring lazy loading, image optimization, and efficient state management.",
      tags: ["Next.js", "React", "CSS Modules", "API Integration"],
      category: "frontend",
      live: "https://booknow-azure.vercel.app/",
      github: "https://github.com/bemnet884/book-now",
      image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1200&h=800",
      featured: false
    }
  ]

  const filters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Design', value: 'design' }
  ]

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.category === filter)

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container-max relative z-10">
        <div className="animate-fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for creating
              meaningful digital experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full mt-6" />
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterOption) => (
              <button
                key={filterOption.value}
                onClick={() => setFilter(filterOption.value)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 ${filter === filterOption.value
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-50 dark:hover:bg-gray-700'
                  }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {filteredProjects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <div
                    className="w-full h-64 bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Fallback text if image doesn't load */}
                    <span className="opacity-50">{project.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Project Links Overlay */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-primary-600 transition-colors transform hover:scale-110"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-gray-700 hover:text-primary-600 transition-colors transform hover:scale-110"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-sm rounded-lg">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project.id)}
                    className="text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors transform hover:translate-x-2"
                  >
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* More Projects Grid */}
          {filteredProjects.length > 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center">
                More Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.slice(2).map((project) => (
                  <div
                    key={project.id}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                    onClick={() => setSelectedProject(project.id)}
                  >
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {project.description.substring(0, 100)}...
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform scale-95 hover:scale-100 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const project = projects.find(p => p.id === selectedProject)
              if (!project) return null

              return (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                      {project.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors transform hover:scale-110"
                    >
                      ×
                    </button>
                  </div>

                  <div
                    className="w-full h-64 bg-gradient-to-br from-primary-400 to-blue-600 rounded-xl mb-6 flex items-center justify-center text-white text-2xl font-bold"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Fallback text if image doesn't load */}
                    <span className="opacity-50">{project.title}</span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.longDescription}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        View Live
                      </a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    )}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects