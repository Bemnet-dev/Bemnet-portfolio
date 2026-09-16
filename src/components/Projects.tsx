'use client'

import { ExternalLink } from 'lucide-react'

interface Project {
    name: string
    category: string
    subCategory?: string
    roles: string[]
    description: string
    timeline: string
    link: string
    image: string
}

const projects: Project[] = [
    {
        name: 'Gezana Properties',
        category: 'Luxury Real Estate Developer',
        subCategory: 'Architectural Showcase & Listings',
        roles: ['Web Development', 'UI/UX Design'],
        description: 'A prestigious luxury real estate developer platform showcasing bespoke architectural estates and development portfolios.',
        timeline: '2026',
        link: 'https://www.gezanestates.com/',
        image: 'https://res.cloudinary.com/dbwtd7ulh/image/upload/v1786046841/file_00000000d67871f4b9682e9cf6b8a9e1_fgxo3i.png'
    },
    {
        name: 'SERVAX Solutions',
        category: 'Corporate Industrial Hub',
        subCategory: 'Enterprise Platform & Showcase',
        roles: ['Corporate Web Design', 'Frontend Development'],
        description: 'A premium corporate hub and multidivisional showcase for industrial engineering, waterproofing systems, and chemical synthesis.',
        timeline: '2026',
        link: 'https://servax.vercel.app/',
        image: 'https://res.cloudinary.com/dbwtd7ulh/image/upload/v1784398525/e70c2bb2-ca15-4f56-9dd1-0e9f72d8a177.png'
    },
    {
        name: 'Tuscan Hound',
        category: 'Pet Concierge & Management',
        subCategory: 'Next.js & Cloudinary Platform',
        roles: ['Full-Stack Development', 'UI/UX Design'],
        description: 'A comprehensive pet management and concierge system with scheduling, booking, and vaccination tracking.',
        timeline: '2026',
        link: 'https://tuscan-hound.vercel.app/',
        image: 'https://res.cloudinary.com/dfqk8vwps/image/upload/q_auto/f_auto/v1781467143/1-_H1_1_lnbr7y.png'
    },
    {
        name: 'Hulu Properties',
        category: 'Real Estate Platform',
        subCategory: 'Web Design & Development',
        roles: ['Web Design', 'Front-End Development'],
        description: 'A modern real estate marketplace for luxury houses, land, and vehicles.',
        timeline: '2026',
        link: 'https://huluproperties.vercel.app',
        image: 'https://res.cloudinary.com/dqkhfls1w/image/upload/v1787749163/Screenshot_2026-08-25_193002_rxcvwg.png'
    },
    {
        name: 'FitMarket',
        category: 'Fitness Marketplace',
        subCategory: 'E-commerce & Booking',
        roles: ['Product Design', 'Web Development'],
        description: 'A fitness and wellness marketplace connecting clients with elite trainers.',
        timeline: '2026',
        link: 'https://fitmarket.bemnet.vercel.app',
        image: 'https://res.cloudinary.com/dqkhfls1w/image/upload/v1787749157/Screenshot_2026-08-25_193023_ikfxwx.png'
    },
    {
        name: 'Eventrix',
        category: 'Event Ticketing',
        subCategory: 'Web Application',
        roles: ['Frontend Design', 'Ticketing UI'],
        description: 'An event management and ticketing platform with seamless booking integration.',
        timeline: '2026',
        link: 'https://eventrix.bemnet.vercel.app',
        image: 'https://res.cloudinary.com/dqkhfls1w/image/upload/v1787749158/Screenshot_2026-08-25_193047_eeqqup.png'
    }
]

const Projects = () => {
    return (
        <section id="projects" className="mt-0 pt-0 pb-16 sm:pb-20 md:pb-24 bg-transparent text-white relative">
            <div className="container-max px-4 sm:px-6 md:px-8">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 sm:mb-12 pb-4 border-b border-white/20">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white uppercase">
                        Work
                    </h2>
                </div>

                {/* Editorial 2-Column Grid Layout exactly as in reference */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
                    {projects.map((project, index) => (
                        <a
                            key={project.name}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.name} project`}
                            className="group block border-t border-white/20 py-5 sm:py-6 hover:bg-white/[0.02] transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500"
                        >
                            <div className="flex items-start gap-4 sm:gap-6">
                                {/* Thumbnail Image */}
                                <div className="relative w-36 sm:w-44 md:w-48 lg:w-52 aspect-[16/10] bg-zinc-900 overflow-hidden shrink-0 border border-white/10">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Text Info */}
                                <div className="flex-1 min-w-0 flex flex-col justify-start">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug group-hover:text-blue-400 transition-colors">
                                            {project.name}
                                        </h3>
                                        <ExternalLink className="w-3.5 h-3.5 text-gray-500 group-hover:text-blue-400 shrink-0 mt-1 transition-colors" />
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-300 font-serif italic mt-1 sm:mt-1.5">
                                        {project.category}
                                    </p>
                                    <p className="text-xs text-gray-500 font-sans mt-1 line-clamp-1">
                                        {project.subCategory}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom Border */}
                <div className="border-t border-white/20 mt-0" />
            </div>
        </section>
    )
}

export default Projects
