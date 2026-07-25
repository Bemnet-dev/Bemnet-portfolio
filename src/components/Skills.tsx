'use client'

import { motion, Variants } from 'framer-motion'
import { Github } from 'lucide-react'
import Counter from './Counter'
import { ParallaxSection } from './ParallaxSection'
import { AnimatedBackground } from './AnimatedBackground'

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
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
}

const Skills = () => {
    const stats = [
        { value: '2+', label: 'Years of Experience' },
        { value: '12+', label: 'Projects Completed' },
        { value: '15+', label: 'Prototypes Developed' }
    ]

    return (
        <section id="skills" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
            <AnimatedBackground />

            <div className="container-max px-4 sm:px-6 md:px-8 relative z-10">
                {/* Stats & Competencies Grid */}
                <ParallaxSection speed={0.2}>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
                    >
                        {/* Core Competencies Card */}
                        <motion.div
                            variants={itemVariants}
                            className="lg:row-span-2 group bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between hover:border-blue-500/60 card-hover transition-all duration-300"
                        >
                            <div>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-400 transition-colors">
                                    Core<br />Competencies
                                </h3>
                                <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                                    Creative vision meets engineering precision – I deliver solutions from concept to reality.
                                </p>
                            </div>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault()
                                    const element = document.querySelector('#contact')
                                    if (element) {
                                        const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
                                        window.scrollTo({ top: offsetTop, behavior: 'smooth' })
                                    }
                                }}
                                className="inline-flex items-center justify-center mt-6 sm:mt-8 px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium w-full text-sm sm:text-base"
                            >
                                Contact Me
                            </a>
                        </motion.div>

                        {/* Stats Cards */}
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                variants={itemVariants}
                                className="group bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-500/60 card-hover transition-all duration-300"
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent mb-2 sm:mb-3">
                                    <Counter target={parseInt(stat.value)} suffix={stat.value.includes('+') ? '+' : ''} />
                                </div>
                                <div className="text-gray-300 text-xs sm:text-sm md:text-base font-medium group-hover:text-white transition-colors">{stat.label}</div>
                            </motion.div>
                        ))}

                        {/* GitHub Card */}
                        <motion.div
                            variants={itemVariants}
                            className="group bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-blue-500/60 card-hover transition-all duration-300 flex flex-col items-center justify-center"
                        >
                            <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-white/20 transition-colors">
                                <Github size={20} className="sm:w-6 sm:h-6 text-white" />
                            </div>
                            <a
                                href="https://github.com/bemnet884"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 text-xs sm:text-sm md:text-base font-medium hover:text-white transition-colors text-center"
                            >
                                View my work on GitHub
                            </a>
                        </motion.div>
                    </motion.div>
                </ParallaxSection>
            </div>
        </section>
    )
}

export default Skills
