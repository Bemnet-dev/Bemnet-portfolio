'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'
import { AnimatedBackground } from './AnimatedBackground'
import { ParallaxSection, ParallaxText } from './ParallaxSection'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    const socialLinks = [
        { icon: Github, href: 'https://github.com/bemnet884', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/bemnet-yitagesu', label: 'LinkedIn' },
        { icon: Instagram, href: '#', label: 'Instagram' },
        { icon: Twitter, href: '#', label: 'Twitter' }
    ]

    const footerLinks = [
        { name: 'Work', path: '#projects' },
        { name: 'Services', path: '#services' },
        { name: 'About', path: '#about' },
        { name: 'Contact', path: '#contact' }
    ]

    return (
        <footer className="py-12 sm:py-16 md:py-20 bg-black border-t border-white/10 relative overflow-hidden">
            <AnimatedBackground />

            <div className="container-max px-4 sm:px-6 md:px-8 relative z-10">
                <div className="flex flex-col items-center">
                    {/* Name */}
                    <ParallaxText speed={0.3}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 sm:mb-8"
                        >
                            <h3 className="text-lg sm:text-2xl font-bold text-white">BEMNET YITAGESU</h3>
                        </motion.div>
                    </ParallaxText>

                    {/* Navigation Links */}
                    <ParallaxSection speed={0.2} className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8"
                        >
                            {footerLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm md:text-base"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </motion.div>
                    </ParallaxSection>

                    {/* Social Links */}
                    <ParallaxText speed={-0.1} className="w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8"
                        >
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 sm:p-3 text-gray-400 hover:text-blue-400 transition-colors border border-gray-700 rounded-lg hover:border-blue-500"
                                    aria-label={social.label}
                                >
                                    <social.icon size={16} className="sm:w-5 sm:h-5" />
                                </a>
                            ))}
                        </motion.div>
                    </ParallaxText>

                    {/* Copyright */}
                    <ParallaxSection speed={0.25}>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-center"
                            suppressHydrationWarning
                        >
                            <p className="text-gray-500 text-xs sm:text-sm">
                                &copy; {currentYear} Bemnet Yitagesu. All rights reserved.
                            </p>
                            <p className="text-gray-600 text-xs mt-2">
                                Crafted by Bemnet Yitagesu
                            </p>
                        </motion.div>
                    </ParallaxSection>
                </div>
            </div>
        </footer>
    )
}

export default Footer