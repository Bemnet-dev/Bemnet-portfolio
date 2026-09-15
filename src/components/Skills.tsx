'use client'

import { motion, Variants } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ParallaxSection } from './ParallaxSection'
import CSSBackground from './CSSBackground'

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as const }
    }
}

const Skills = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <section id="skills" className="py-16 sm:py-24 md:py-32 bg-black relative overflow-hidden">
            <CSSBackground />

            <div className="container-max px-4 sm:px-6 md:px-8 relative z-10">
                <ParallaxSection speed={0.2}>
                    <motion.div
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="w-full"
                    >
                        <div className="mb-6 sm:mb-8 md:mb-12">
                            <p className="text-blue-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4 font-semibold">MY GITHUB</p>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                                <span className="bg-gradient-to-r from-blue-500 to-indigo-400 bg-clip-text text-transparent">
                                    Contribution Activity
                                </span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8">
                            {/* Contribution Graph */}
                            <motion.div
                                variants={itemVariants}
                                className="group bg-gradient-to-br from-blue-600/15 to-indigo-600/5 border border-blue-500/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 hover:border-blue-500/60 card-hover transition-all duration-300 flex items-center justify-center overflow-x-auto"
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center h-48">
                                        <div className="text-gray-400">Loading graph...</div>
                                    </div>
                                ) : error ? (
                                    <div className="flex items-center justify-center h-48">
                                        <div className="text-red-400">{error}</div>
                                    </div>
                                ) : (
                                    <img
                                        src="https://ghchart.rshah.org/Bemnet-dev"
                                        alt="Bemnet-dev GitHub contribution graph"
                                        className="w-full h-auto"
                                    />
                                )}
                            </motion.div>
                        </div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-6 sm:mt-8 md:mt-10 text-center"
                        >
                            <a
                                href="https://github.com/Bemnet-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium text-sm sm:text-base"
                            >
                                View Full Profile on GitHub
                            </a>
                        </motion.div>
                    </motion.div>
                </ParallaxSection>
            </div>
        </section>
    )
}

export default Skills
