'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Figma } from 'lucide-react'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import CSSBackground from './CSSBackground'
import { ParallaxSection, ParallaxText } from './ParallaxSection'

const Footer = () => {
    const [mounted, setMounted] = useState(false)
    const [currentYear, setCurrentYear] = useState(2026)

    useEffect(() => {
        setMounted(true)
        setCurrentYear(new Date().getFullYear())
    }, [])

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Bemnet-dev', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/bemnet-developer/', label: 'LinkedIn' },
        { icon: Figma, href: 'https://www.figma.com/@bemnetyitagesum', label: 'Figma' },
    ]

    const footerLinks = [
        { name: 'Work', path: '#projects' },
        { name: 'Services', path: '#services' },
        { name: 'About', path: '#about' },
        { name: 'Contact', path: '#contact' },
    ]

    return (
        <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-black/40 via-[#030712]/75 to-[#020409]/95 backdrop-blur-xl pt-16 sm:pt-20 pb-10 sm:pb-12 text-white">
            <CSSBackground />

            {/* Glowing Accent Top Bar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent pointer-events-none" />

            {/* Soft Ambient Radial Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container-max px-4 sm:px-6 md:px-8 relative z-10">
                {/* Main Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12">
                    {/* Brand & Identity Column */}
                    <div className="md:col-span-6 lg:col-span-5 flex flex-col items-start">
                        <ParallaxText speed={0.2}>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 font-mono">
                                    BEMNET YITAGESU
                                </h3>
                                <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                                    Full-stack developer & creative designer building high-performance web applications, fluid motion experiences, and thoughtful digital interfaces.
                                </p>
                            </motion.div>
                        </ParallaxText>
                    </div>

                    {/* Navigation Links Column */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <ParallaxSection speed={0.15}>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.15 }}
                            >
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                                    Navigation
                                </p>
                                <ul className="space-y-3">
                                    {footerLinks.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.path}
                                                className="text-sm text-gray-400 hover:text-white transition-colors"
                                            >
                                                {link.name}
                                            </a>
                                        </li>
                                    ))}
                                    <li>
                                        <Link
                                            href="/cv"
                                            className="text-sm text-blue-400/90 hover:text-blue-300 transition-colors"
                                        >
                                            Curriculum Vitae
                                        </Link>
                                    </li>
                                </ul>
                            </motion.div>
                        </ParallaxSection>
                    </div>

                    {/* Social Connect Column */}
                    <div className="md:col-span-3 lg:col-span-4">
                        <ParallaxSection speed={0.15}>
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4">
                                    Connect & Follow
                                </p>
                                <div className="flex flex-wrap gap-2.5">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs sm:text-sm text-gray-300 hover:text-white bg-white/[0.03] hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/40 rounded-lg transition-all duration-300"
                                            aria-label={social.label}
                                        >
                                            <social.icon size={15} className="text-blue-400" />
                                            <span>{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </ParallaxSection>
                    </div>
                </div>

                {/* Bottom Bar Divider & Meta */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p suppressHydrationWarning>
                        &copy; {currentYear} Bemnet Yitagesu. All rights reserved.
                    </p>

                    <div className="flex items-center gap-4">
                        <span className="text-gray-500">
                            Designed & Built with Next.js & WebGL
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer