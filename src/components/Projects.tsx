'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'
import { ParallaxSection } from './ParallaxSection'

const projects = [
    {
        name: 'HULU PROPERTIES',
        roles: ['Web Design', 'Web Development'],
        description: 'A modern real estate platform showcasing properties with advanced filtering, search functionality, and property management features.',
        timeline: '2 Weeks',
        myRole: 'Full Stack Developer',
        link: 'https://huluproperties.vercel.app/',
        image: 'https://res.cloudinary.com/dqkhfls1w/image/upload/v1787749163/Screenshot_2026-08-25_193002_rxcvwg.png',
        color: 'from-blue-600 to-blue-800'
    },
    {
        name: 'BOOKNOW',
        roles: ['Web Development', 'Booking System'],
        description: 'A comprehensive booking and appointment scheduling platform with real-time availability, payment integration, and customer management.',
        timeline: '2 Weeks',
        myRole: 'Full Stack Developer',
        link: 'https://booknow-azure.vercel.app/',
        image: 'https://res.cloudinary.com/dqkhfls1w/image/upload/v1787749158/Screenshot_2026-08-25_193115_whq0kb.png',
        color: 'from-purple-600 to-blue-800'
    },
    {
        name: 'EVENTRIX',
        roles: ['Web Development', 'Frontend Design'],
        description: 'An event management and ticketing platform allowing users to create, manage, and attend events with seamless booking integration.',
        timeline: '3 Weeks',
        myRole: 'Full Stack Developer',
        link: 'https://eventrix.bemnet.vercel.app/',
        image: 'https://res.cloudinary.com/dqkhfls1w/image/upload/v1787749158/Screenshot_2026-08-25_193047_eeqqup.png',
        color: 'from-indigo-600 to-blue-800'
    },
    {
        name: 'FITMARKET',
        roles: ['Web Development', 'E-commerce Design'],
        description: 'A fitness and wellness e-commerce platform featuring product listings, shopping cart functionality, and secure checkout integration.',
        timeline: '2 Weeks',
        myRole: 'Full Stack Developer',
        link: 'https://fitmarket.bemnet.vercel.app/',
        image: 'https://res.cloudinary.com/dqkhfls1w/image/upload/v1787749157/Screenshot_2026-08-25_193023_ikfxwx.png',
        color: 'from-blue-700 to-indigo-900'
    }
]

const Projects = () => {
    const [activeProject, setActiveProject] = useState(0)
    const [mounted, setMounted] = useState(false)
    const cardRefs = projects.map(() => ({ current: null }))

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        let timeoutId: NodeJS.Timeout | null = null

        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -30% 0px', // Even more centered
            threshold: 0.8 // Require 80% of element to be visible
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = projects.findIndex(p => p.name === entry.target.getAttribute('data-project'))
                    if (index !== -1) {
                        // Clear any existing timeout
                        if (timeoutId) {
                            clearTimeout(timeoutId)
                        }

                        // Add a longer delay to prevent rapid changes
                        timeoutId = setTimeout(() => {
                            setActiveProject(index)
                        }, 800) // Increased delay to 800ms
                    }
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        // Use a timeout to ensure DOM is ready
        setTimeout(() => {
            projects.forEach((project) => {
                const element = document.querySelector(`[data-project="${project.name}"]`)
                if (element) observer.observe(element)
            })
        }, 200)

        return () => {
            if (timeoutId) clearTimeout(timeoutId)
            observer.disconnect()
        }
    }, [mounted])

    const currentProject = projects[activeProject]

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

                {/* Main Layout: Featured Project on Left, Selector Cards on Right */}
                <ParallaxSection speed={0.3} className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start">
                    {/* Featured Project - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-8 w-full order-2 lg:order-1"
                    >
                        <div className="bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-2xl overflow-hidden transition-all duration-300 group">
                            {/* Featured Website Preview Area */}
                            <div className="relative overflow-hidden">
                                {currentProject.image ? (
                                    <motion.img
                                        key={currentProject.image}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1.5 }}
                                        src={currentProject.image}
                                        alt={currentProject.name}
                                        className="w-full h-auto block object-contain"
                                    />
                                ) : (
                                    <div className={`h-96 sm:h-[500px] md:h-[600px] bg-gradient-to-br ${currentProject.color} relative overflow-hidden flex items-center justify-center`}>
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                            className="text-white font-bold text-4xl opacity-70"
                                        >
                                            {currentProject.name}
                                        </motion.div>
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 sm:p-8 md:p-10 flex flex-col">
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-5 transition-colors">
                                    {currentProject.name}
                                </h3>

                                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                                    {currentProject.roles.map((role) => (
                                        <span
                                            key={role}
                                            className="px-3 py-1.5 text-xs uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/30 rounded-full font-medium"
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
                                    {currentProject.description}
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-800">
                                    <div className="text-sm text-gray-500">
                                        <span className="block">
                                            <span className="text-gray-400">Role:</span> {currentProject.myRole}
                                        </span>
                                    </div>
                                    <a
                                        href={currentProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg transition-all duration-300 font-semibold text-sm sm:text-base"
                                    >
                                        Visit Site
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Projects Navigation - Right Side as Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 flex flex-col gap-3 sm:gap-4 order-1 lg:order-2"
                    >
                        {projects.map((project, index) => (
                            <motion.button
                                key={project.name}
                                data-project={project.name}
                                onClick={() => setActiveProject(index)}
                                className={`text-left rounded-lg overflow-hidden transition-all duration-300 group ${activeProject === index
                                    ? 'ring-2 ring-blue-500'
                                    : ''
                                    }`}
                            >
                                <div className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${project.color} border ${activeProject === index
                                    ? 'border-blue-400/50 shadow-lg shadow-blue-500/30'
                                    : 'border-gray-700/50'
                                    } transition-all duration-300`}>
                                    {/* Card Content */}
                                    <div className="p-3 sm:p-4 bg-gray-950/80 backdrop-blur-sm">
                                        <h4 className={`font-bold text-sm sm:text-base mb-1 line-clamp-1 transition-colors duration-300 ${activeProject === index
                                            ? 'text-blue-400'
                                            : 'text-white'
                                            }`}>
                                            {project.name}
                                        </h4>
                                        <p className="text-xs text-gray-400 line-clamp-1 mb-2">
                                            {project.roles[0]}
                                        </p>
                                        <p className="text-xs text-gray-500 line-clamp-2">
                                            {project.description.substring(0, 50)}...
                                        </p>
                                    </div>

                                    {/* Active Indicator */}
                                    {activeProject === index && (
                                        <motion.div
                                            layoutId="activeIndicator"
                                            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-400"
                                            transition={{ type: 'spring', stiffness: 380, damping: 40 }}
                                        />
                                    )}
                                </div>
                            </motion.button>
                        ))}
                    </motion.div>
                </ParallaxSection>
            </div>
        </section>
    )
}

export default Projects