'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react'

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
        <footer className="py-16 bg-black border-t border-white/10">
            <div className="container-max">
                <div className="flex flex-col items-center">
                    {/* Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-8"
                    >
                        <h3 className="text-2xl font-bold text-white">BEMNET YITAGESU</h3>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-wrap items-center justify-center gap-6 mb-8"
                    >
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center justify-center gap-6 mb-8"
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 text-gray-400 hover:text-white transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon size={20} />
                            </a>
                        ))}
                    </motion.div>

                    {/* Copyright */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center"
                    >
                        <p className="text-gray-500 text-sm">
                            &copy; {currentYear} Bemnet Yitagesu. All rights reserved.
                        </p>
                        <p className="text-gray-600 text-xs mt-2">
                            Crafted by Bemnet Yitagesu
                        </p>
                    </motion.div>
                </div>
            </div>
        </footer>
    )
}

export default Footer