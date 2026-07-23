'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const projects = [
    {
        id: 1,
        name: 'TEBAREK',
        roles: ['Creative Direction', 'Web Design', 'Webflow Development'],
        description: 'Experience smarter financial insights designed for freelancers and small businesses. Spot trends, forecast with clarity, and get friendly support anytime.',
        fullDescription: 'TEBAREK is a comprehensive financial platform built for freelancers and small business owners. It provides real-time financial insights, trend analysis, and forecasting tools with a user-friendly interface designed to simplify financial management.',
        timeline: '1 Week',
        myRole: 'Web Designer',
        link: '#',
        color: 'from-blue-600 to-blue-800'
    },
    {
        id: 2,
        name: 'LA MONJE',
        roles: ['Web Development', 'Post Production'],
        description: 'La Monje is a creative agency specializing in brand strategy, digital marketing, and event activation.',
        fullDescription: 'La Monje is a creative agency specializing in brand strategy, digital marketing, and event activation. They assist brands in clarifying their story, reaching their target audience, and achieving measurable growth.',
        timeline: '1 Week',
        myRole: 'Web Design, Web Development',
        link: '#',
        color: 'from-indigo-600 to-blue-800'
    },
    {
        id: 3,
        name: 'DURASEAL LTD',
        roles: ['Web Design', 'Webflow Development'],
        description: 'DuraSeal Ltd specializes in high-performance wood floor coatings, offering products like DuraSeal Quick Coat and water-based finishes.',
        fullDescription: 'DuraSeal Ltd specializes in high-performance wood floor coatings, offering products like DuraSeal Quick Coat and water-based finishes. They are trusted by contractors for delivering reliable and durable solutions.',
        timeline: '3 Weeks',
        myRole: 'Web Design, Webflow Development',
        link: '#',
        color: 'from-blue-700 to-indigo-900'
    },
    {
        id: 4,
        name: 'HOMNA LTD',
        roles: ['Creative Direction', 'Web Development'],
        description: 'Homna Ltd is a leading provider of construction chemicals, drainage systems, and finishing materials in East Africa.',
        fullDescription: 'Homna Ltd is a leading provider of construction chemicals, drainage systems, and finishing materials in East Africa. They deliver high-quality solutions that enhance the durability and efficiency of building projects.',
        timeline: '4 Weeks',
        myRole: 'Web Design, Web Dev',
        link: '#',
        color: 'from-indigo-700 to-blue-900'
    },
    {
        id: 5,
        name: 'IMPACT4AFRICA',
        roles: ['Web Development'],
        description: 'Impact4Africa is an impact investment company focused on developing the agricultural value chain in Rwanda and Namibia.',
        fullDescription: 'Impact4Africa is an impact investment company focused on developing the agricultural value chain in Rwanda and Namibia. They invest in regenerative agriculture and agro-processing to create successful enterprises.',
        timeline: '1 Week',
        myRole: 'Web Design, Web Dev',
        link: '#',
        color: 'from-blue-600 to-indigo-800'
    }
]

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0])

    return (
        <section id="projects" className="min-h-screen py-32 bg-black">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-blue-500 text-lg mb-4 font-semibold">SELECTED PROJECTS</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">
                        <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
                            Where Design Meets Impact.
                        </span>
                    </h2>
                </motion.div>

                {/* Main Layout: Featured Project + Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Featured Project - Large Display */}
                    <motion.div
                        key={selectedProject.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-blue-500/20 group h-full">
                            {/* Browser Header */}
                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-6 py-4 border-b border-blue-500/10">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60 group-hover:bg-red-500 transition-colors" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60 group-hover:bg-yellow-500 transition-colors" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/60 group-hover:bg-green-500 transition-colors" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-400 bg-gray-900/50 px-3 py-2 rounded w-fit">
                                    <Globe size={14} />
                                    <span>{selectedProject.name.toLowerCase()}.com</span>
                                </div>
                            </div>

                            {/* Featured Project Content */}
                            <div className="relative">
                                {/* Showcase Image/Background */}
                                <div className={`h-96 bg-gradient-to-br ${selectedProject.color} relative overflow-hidden`}>
                                    <motion.div
                                        className="absolute inset-0 opacity-40"
                                        animate={{
                                            background: [
                                                'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                                                'radial-gradient(circle at 100% 100%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                                                'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)'
                                            ]
                                        }}
                                        transition={{ duration: 6, repeat: Infinity }}
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                                        <motion.div
                                            animate={{ y: [0, -8, 0] }}
                                            transition={{ duration: 4, repeat: Infinity }}
                                        >
                                            <h2 className="text-5xl font-bold text-white mb-4">{selectedProject.name}</h2>
                                            <p className="text-gray-200 text-lg max-w-md mx-auto">{selectedProject.description}</p>
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Project Details */}
                                <div className="p-8 bg-black">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.roles.map((role) => (
                                            <span
                                                key={role}
                                                className="px-3 py-1 text-xs uppercase tracking-wider text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full"
                                            >
                                                {role}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                        {selectedProject.fullDescription}
                                    </p>

                                    <div className="grid grid-cols-2 gap-6 mb-8 pb-8 border-b border-gray-800">
                                        <div>
                                            <p className="text-gray-500 text-sm mb-2">Timeline</p>
                                            <p className="text-white font-semibold">{selectedProject.timeline}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm mb-2">My Role</p>
                                            <p className="text-white font-semibold">{selectedProject.myRole}</p>
                                        </div>
                                    </div>

                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all font-medium"
                                    >
                                        <ExternalLink size={18} />
                                        Visit Project
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar - Other Projects */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32">
                            <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4 font-semibold">
                                More Projects
                            </h3>
                            <div className="space-y-3 max-h-[600px] overflow-y-auto scrollbar-hide">
                                {projects.map((project) => (
                                    <motion.button
                                        key={project.id}
                                        onClick={() => setSelectedProject(project)}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        whileHover={{ x: 10 }}
                                        transition={{ duration: 0.3 }}
                                        className={`w-full text-left p-4 rounded-lg transition-all duration-300 group ${selectedProject.id === project.id
                                                ? 'bg-blue-600/20 border border-blue-500/60'
                                                : 'bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30'
                                            }`}
                                    >
                                        <h4 className="font-semibold text-sm text-white mb-1 flex items-center justify-between">
                                            {project.name}
                                            <ChevronRight size={14} className={`transition-transform ${selectedProject.id === project.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                        </h4>
                                        <div className="flex flex-wrap gap-1">
                                            {project.roles.slice(0, 2).map((role) => (
                                                <span
                                                    key={role}
                                                    className="text-xs text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full"
                                                >
                                                    {role.split(' ')[0]}
                                                </span>
                                            ))}
                                            {project.roles.length > 2 && (
                                                <span className="text-xs text-gray-500">+{project.roles.length - 2}</span>
                                            )}
                                        </div>
                                    </motion.button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects