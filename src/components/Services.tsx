'use client'

import { motion, Variants } from 'framer-motion'
import { Globe, Palette, Code, Figma, Smartphone, Lightbulb, Briefcase, Rocket } from 'lucide-react'
import CSSBackground from './CSSBackground'
import { ParallaxSection, ParallaxText } from './ParallaxSection'

const ExpoIcon = () => (
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" opacity="0.1" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <circle cx="12" cy="7" r="1.5" fill="currentColor" />
        <circle cx="12" cy="17" r="1.5" fill="currentColor" />
        <circle cx="7" cy="12" r="1.5" fill="currentColor" />
        <circle cx="17" cy="12" r="1.5" fill="currentColor" />
    </svg>
)

const services = [
    {
        icon: Globe,
        title: 'Webflow Development',
        description: 'Creating responsive, visually appealing websites with Webflow\'s powerful no-code platform.'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Crafting intuitive and engaging user experiences through research, wireframing, and high-fidelity prototypes.'
    },
    {
        icon: Code,
        title: 'Full Stack Development',
        description: 'Building robust and scalable web applications from front-end interfaces to back-end architecture.'
    },
    {
        icon: Figma,
        title: 'Web Design',
        description: 'Creating visually stunning and responsive websites that tell a compelling brand story and drive conversions.'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Building cross-platform mobile applications with React Native and Expo for iOS and Android.'
    },
    {
        icon: Lightbulb,
        title: 'Experience Design',
        description: 'Designing holistic experiences that seamlessly integrate user interaction, interface, and product functionality.'
    },
    {
        icon: Briefcase,
        title: 'IT Consulting',
        description: 'Providing strategic guidance to help businesses leverage technology and optimize their digital infrastructure.'
    },
    {
        icon: Rocket,
        title: 'Prototyping & MVP',
        description: 'Rapidly building and testing Minimum Viable Products to validate ideas and gather user feedback efficiently.'
    }
]

const Services = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    }

    return (
        <section id="services" className="min-h-screen py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
            <CSSBackground />

            <div className="container-max px-4 sm:px-6 md:px-8 relative z-10">
                <ParallaxText speed={0.3} className="mb-8 sm:mb-12 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-blue-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 font-semibold">WHAT I DO</p>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                            A Spectrum of Expertise.
                        </h2>
                        <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base">
                            From digital interfaces to physical products, I provide a comprehensive suite
                            of design and development services to bring your vision to life.
                        </p>
                    </motion.div>
                </ParallaxText>

                <ParallaxSection speed={0.2}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                variants={itemVariants}
                                className="group bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 card-hover hover:border-blue-500/60"
                            >
                                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors">
                                    <service.icon size={20} className="sm:w-6 sm:h-6 text-white" />
                                </div>

                                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white mb-2 sm:mb-3">
                                    {service.title}
                                </h3>

                                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </ParallaxSection>
            </div>
        </section>
    )
}

export default Services