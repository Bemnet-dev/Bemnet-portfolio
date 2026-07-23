'use client'

import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react'

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const socialLinks = [
        { icon: Github, href: 'https://github.com/bemnet884', label: 'GitHub' },
        { icon: Linkedin, href: 'https://linkedin.com/in/bemnet-yitagesu', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:bemnetyitagesu@gmail.com', label: 'Email' }
    ]

    const quickLinks = [
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ]

    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_70%)]" />
            </div>

            <div className="container-max relative z-10">
                {/* Main Footer Content */}
                <div className="py-16 grid md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-white">
                            Bemnet Yitagesu
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                            Full-stack developer passionate about creating exceptional digital experiences.
                            Let&apos;s build something amazing together.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-110 hover:-translate-y-1"
                                    aria-label={social.label}
                                >
                                    <social.icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            Quick Links
                        </h4>
                        <div className="space-y-2">
                            {quickLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => {
                                        const element = document.querySelector(link.href)
                                        if (element) {
                                            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 100
                                            window.scrollTo({
                                                top: offsetTop,
                                                behavior: 'smooth'
                                            })
                                        }
                                    }}
                                    className="block text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:translate-x-2"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">
                            Get In Touch
                        </h4>
                        <div className="space-y-2 text-gray-400">
                            <p>Addis Ababa, Ethiopia</p>
                            <a
                                href="mailto:bemnetyitagesu@gmail.com"
                                className="hover:text-primary-400 transition-colors duration-300"
                            >
                                bemnetyitagesu@gmail.com
                            </a>
                            <p className="text-sm">
                                Available for freelance opportunities
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800" />

                {/* Bottom Footer */}
                <div className="py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-gray-400 text-sm flex items-center space-x-1">
                        <span>© 2024 Bemnet Yitagesu. Made with</span>
                        <Heart size={16} className="text-red-500 fill-current animate-pulse" />
                        <span>and Next.js</span>
                    </p>

                    {/* Back to Top Button */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-all duration-300 group transform hover:scale-110 hover:-translate-y-1"
                        aria-label="Back to top"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer