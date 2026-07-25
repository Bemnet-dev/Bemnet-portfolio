'use client'

import { motion, Variants } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ParallaxSection, ParallaxText } from './ParallaxSection'

const projects = [
    {
        name: 'TEBAREK',
        roles: ['Creative Direction', 'Web Design', 'Webflow Development'],
        description: 'Experience smarter financial insights designed for freelancers and small businesses. Spot trends, forecast with clarity, and get friendly support anytime.',
        timeline: '1 Week',
        myRole: 'Web Designer',
        link: '#',
        color: 'from-blue-600 to-blue-800'
    },
    {
        name: 'LA MONJE',
        roles: ['Web Development', 'Post Production'],
        description: 'La Monje is a creative agency specializing in brand strategy, digital marketing, and event activation.',
        timeline: '1 Week',
        myRole: 'Web Design, Web Development',
        link: '#',
        color: 'from-indigo-600 to-blue-800'
    },
    {
        name: 'DURASEAL LTD',
        roles: ['Web Design', 'Webflow Development'],
        description: 'DuraSeal Ltd specializes in high-performance wood floor coatings, offering products like DuraSeal Quick Coat and water-based finishes.',
        timeline: '3 Weeks',
        myRole: 'Web Design, Webflow Development',
        link: '#',
        color: 'from-blue-700 to-indigo-900'
    },
    {
        name: 'HOMNA LTD',
        roles: ['Creative Direction', 'Web Development'],
        description: 'Homna Ltd is a leading provider of construction chemicals, drainage systems, and finishing materials in East Africa.',
        timeline: '4 Weeks',
        myRole: 'Web Design, Web Dev',
        link: '#',
        color: 'from-indigo-700 to-blue-900'
    },
    {
        name: 'IMPACT4AFRICA',
        roles: ['Web Development'],
        description: 'Impact4Africa is an impact investment company focused on developing the agricultural value chain in Rwanda and Namibia.',
        timeline: '1 Week',
        myRole: 'Web Design, Web Dev',
        link: '#',
        color: 'from-blue-600 to-indigo-800'
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
                            <div className={`h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br ${currentProject.color} relative overflow-hidden flex-shrink-0`}>
                                <motion.div
                                    animate={{
                                        background: [
                                            'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                                            'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.15) 0%, transparent 50%)',
                                            'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.15) 0%, transparent 50%)'
                                        ]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity }}
                                    className="absolute inset-0"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="text-white font-bold text-5xl opacity-70"
                                        >
                                            {currentProject.name}
                                        </motion.div>
                                    </div>
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
                                            className="px-2 sm:px-3 py-1 text-xs uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
                                        >
                                            {role}
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