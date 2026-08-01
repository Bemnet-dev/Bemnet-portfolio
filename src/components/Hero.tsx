'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import { AnimatedBackground } from './AnimatedBackground'
import { ParallaxText } from './ParallaxSection'

const Hero = () => {
  const [isCVOpen, setIsCVOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault()
    const element = document.querySelector(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden py-20 sm:py-32 md:py-40 lg:py-20">
      <AnimatedBackground />

      <div className="container-max relative z-10 w-full flex justify-center px-4 sm:px-6 md:px-8">
        <div className="w-full flex items-center justify-center">
          {/* Centered Content with Parallax */}
          <ParallaxText speed={0.3} className="w-full max-w-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center w-full"
            >
              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-center w-full px-2 sm:px-4">
                <span className="text-white inline-block">
                  I can develop digital experiences.
                </span>
              </motion.h1>

              <motion.p variants={itemVariants} className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-2xl sm:max-w-3xl mx-auto px-4 sm:px-6">
                I'm a passionate full-stack developer specializing in building exceptional
                digital experiences. I create intuitive, accessible web applications that
                balance beautiful design with robust functionality.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 justify-center px-4 sm:px-0">
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, '#projects')}
                  className="btn-primary text-sm sm:text-base"
                >
                  Check out my work
                </a>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="btn-outline text-sm sm:text-base"
                >
                  Get in touch
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 sm:space-x-4 md:space-x-6">
                <a
                  href="https://github.com/bemnet884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 text-gray-400 hover:text-blue-400 transition-colors border border-gray-700 rounded-lg hover:border-blue-500"
                  aria-label="GitHub"
                >
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/bemnet-yitagesu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 sm:p-3 text-gray-400 hover:text-blue-400 transition-colors border border-gray-700 rounded-lg hover:border-blue-500"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a
                  href="mailto:bemnetyitagesu@gmail.com"
                  className="p-2 sm:p-3 text-gray-400 hover:text-blue-400 transition-colors border border-gray-700 rounded-lg hover:border-blue-500"
                  aria-label="Email"
                >
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </a>
              </motion.div>
            </motion.div>
          </ParallaxText>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={(e) => scrollToSection(e, '#projects')}
      >
        <div className="flex flex-col items-center space-y-2 text-gray-500 hover:text-white transition-colors">
          <span className="text-sm">Scroll Down</span>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
