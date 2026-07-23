'use client'

import { motion, Variants } from 'framer-motion'
import { Globe, Palette, Code, Figma, Cpu, Lightbulb, Briefcase, Rocket } from 'lucide-react'

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
        icon: Cpu,
        title: 'Industrial Design',
        description: 'Developing innovative physical products from concept to prototype using tools like Fusion 360.'
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
        <section id="services" className="min-h-screen py-32 bg-black">
            <div className="container-max">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <p className="text-blue-500 text-lg mb-4 font-semibold">WHAT I DO</p>
                    <h2 className="text-4xl sm:text-5xl font-bold text-white">
                        A Spectrum of Expertise.
                    </h2>
                    <p className="text-gray-400 mt-6 max-w-2xl">
                        From digital interfaces to physical products, I provide a comprehensive suite
                        of design and development services to bring your vision to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            variants={itemVariants}
                            className="group bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-2xl p-6 card-hover hover:border-blue-500/60"
                        >
                            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                                <service.icon size={24} className="text-white" />
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                {service.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Services