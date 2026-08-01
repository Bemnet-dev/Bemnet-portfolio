'use client'

import { motion, Variants } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ParallaxSection, ParallaxText } from './ParallaxSection'

const projects = [
    {
        name: 'Hulu Properties',
        roles: ['Web Design', 'Front-End Development', 'Product UX'],
        description: 'A premium real estate marketplace for luxury houses, land, and vehicles with polished listing discovery and secure contact workflows.',
        timeline: '2 Weeks',
        myRole: 'Design + Front-End',
        link: 'https://huluproperties.vercel.app',
        color: 'from-emerald-600 to-slate-900',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        screenshot: 'https://s.wordpress.com/mshots/v1/https://huluproperties.vercel.app?w=1200'
    },
    {
        name: 'FitMarket',
        roles: ['Product Design', 'Web Development', 'Marketplace Experience'],
        description: 'A fitness marketplace connecting clients with elite trainers, gym instructors, and nutritionists through seamless booking flows and profile discovery.',
        timeline: '2 Weeks',
        myRole: 'Full-Stack Front-End',
        link: 'https://fitmarket.bemnet.vercel.app',
        color: 'from-cyan-500 to-slate-800',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        screenshot: 'https://s.wordpress.com/mshots/v1/https://fitmarket.bemnet.vercel.app?w=1200'
    },
    {
        name: 'Eventrix',
        roles: ['Web App Development', 'Brand Experience', 'Ticketing UI'],
        description: 'A premium event ticketing platform with fast booking, event discovery, and secure sign-in flows designed for memorable live experiences.',
        timeline: '2 Weeks',
        myRole: 'Front-End Development',
        link: 'https://eventrix.bemnet.vercel.app',
        color: 'from-violet-600 to-slate-900',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        screenshot: 'https://s.wordpress.com/mshots/v1/https://eventrix.bemnet.vercel.app?w=1200'
    },
    {
        name: 'BookNow Azure',
        roles: ['Travel UI', 'Booking Platform', 'Responsive Design'],
        description: 'A vacation booking platform for hotels and holiday stays, purpose-built to showcase destinations and simplify reservations for travelers.',
        timeline: '2 Weeks',
        myRole: 'Web Design + Dev',
        link: 'https://booknow-azure.vercel.app',
        color: 'from-sky-500 to-slate-900',
        technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Vercel'],
        screenshot: 'https://s.wordpress.com/mshots/v1/https://booknow-azure.vercel.app?w=1200'
    }
]

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const currentProject = projects[activeProject]

    if (!mounted) {
        return null
    }

    return (
        <section id="projects" className="min-h-screen py-16 sm:py-24 md:py-32 bg-black">
            <div className="container-max px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 sm:mb-12 md:mb-16"
                >
                    <p className="text-blue-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 font-semibold">SELECTED PROJECTS</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
                            Where Design Meets Impact.
                        </span>
                    </h2>
                </motion.div>

                {/* Main Layout: Featured Project + Side Carousel */}
                <ParallaxSection speed={0.3} className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-stretch">
                    {/* Featured Project - Wide */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-2 h-full"
                    >
                        <div className="bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-500/60 transition-all duration-300 group h-full flex flex-col">
                            {/* Featured Image Area */}
                            <div className="relative overflow-hidden rounded-3xl h-56 sm:h-64 md:h-72 lg:h-80 bg-slate-950">
                                <img
                                    src={currentProject.screenshot}
                                    alt={`Screenshot of ${currentProject.name}`}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-slate-950/35" />
                                <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-slate-950/80 text-white px-3 py-2 rounded-full text-xs uppercase tracking-[0.22em]">
                                    Screenshot Preview
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-400 transition-colors">
                                    {currentProject.name}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {currentProject.roles.map((role) => (
                                        <span
                                            key={role}
                                            className="px-2 sm:px-3 py-1 text-xs uppercase tracking-wider text-slate-100 bg-slate-700/20 border border-slate-600 rounded-full"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {currentProject.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 sm:px-3 py-1 text-xs uppercase tracking-wider text-slate-100 bg-blue-500/10 border border-blue-500/20 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 text-base sm:text-lg md:text-lg mb-6 sm:mb-8 leading-relaxed flex-1">
                                    {currentProject.description}
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-800">
                                    <div className="text-xs sm:text-sm text-gray-500">
                                        <span className="block mb-1">Timeline: {currentProject.timeline}</span>
                                        <span className="block">Role: {currentProject.myRole}</span>
                                    </div>
                                    <a
                                        href={currentProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm sm:text-base w-full sm:w-auto"
                                    >
                                        Visit Site
                                        <ExternalLink size={16} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Side Carousel - Scrollable Projects */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-1"
                    >
                        <div className="h-full flex flex-col">
                            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">More Projects</h3>

                            {/* Scrollable Container */}
                            <div className="flex-1 overflow-y-auto space-y-2 sm:space-y-4 pr-2">
                                {projects.map((project, index) => (
                                    <motion.button
                                        key={project.name}
                                        onClick={() => setActiveProject(index)}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`w-full p-3 sm:p-4 rounded-lg text-left transition-all duration-300 ${activeProject === index
                                            ? 'bg-blue-600/30 border border-blue-500 shadow-lg shadow-blue-500/20'
                                            : 'bg-gray-900/50 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800'
                                            }`}
                                    >
                                        <h4 className={`font-bold mb-1 sm:mb-2 text-sm sm:text-base ${activeProject === index ? 'text-blue-400' : 'text-white'
                                            }`}>
                                            {project.name}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-gray-400 line-clamp-2">
                                            {project.description}
                                        </p>
                                        <div className="mt-1 sm:mt-2 text-xs text-gray-500">
                                            {project.timeline}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </ParallaxSection>
            </div>
        </section>
    )
}

export default Projects