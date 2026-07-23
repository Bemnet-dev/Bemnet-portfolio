'use client'

import { motion, Variants } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

const Hero = () => {
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
    <section id="hero" className="min-h-screen flex items-center justify-center bg-abstract relative overflow-hidden pt-20">
      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full mix-blend-overlay filter blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-700 rounded-full mix-blend-overlay filter blur-[100px]"
        />
      </div>

      <div className="container-max relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Code-style greeting */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg font-mono text-sm">
              <span className="text-blue-400">&lt;</span>
              <span className="text-white">developer</span>
              <span className="text-blue-400">&gt;</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white mb-2">Bemnet</span>
              <span className="block text-white">Yitagesu.</span>
            </h1>
          </motion.div>

          {/* Subheading with gradient */}
          <motion.div variants={itemVariants} className="mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
              <span className="text-gray-400">Building </span>
              <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                scalable solutions
              </span>
            </h2>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug mt-3">
              <span className="text-gray-400">with </span>
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                precision & impact.
              </span>
            </h2>
          </motion.div>

          {/* Professional description */}
          <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed max-w-3xl mb-14">
            Full-stack developer specializing in enterprise solutions, modern JavaScript frameworks,
            and cloud architecture. I architect and build scalable web applications that balance
            exceptional user experiences with robust, maintainable code. Passionate about solving
            complex problems and mentoring junior developers.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-start mb-16">
            <a
              href="#projects"
              onClick={(e) => scrollToSection(e, '#projects')}
              className="btn-primary group"
            >
              <span>View My Work</span>
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-outline group"
            >
              <span>Get In Touch</span>
              <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-8 mb-16 pb-16 border-b border-gray-800/30">
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">2+</div>
              <p className="text-sm text-gray-400">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">12+</div>
              <p className="text-sm text-gray-400">Projects Shipped</p>
            </div>
            <div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">15+</div>
              <p className="text-sm text-gray-400">Prototypes Built</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center space-x-6">
            <span className="text-sm text-gray-500 font-mono">Connect:</span>
            <a
              href="https://github.com/bemnet884"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-blue-400 transition-colors hover:bg-blue-500/10 rounded-lg"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/bemnet-yitagesu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-gray-400 hover:text-blue-400 transition-colors hover:bg-blue-500/10 rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:bemnetyitagesu@gmail.com"
              className="p-3 text-gray-400 hover:text-blue-400 transition-colors hover:bg-blue-500/10 rounded-lg"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          onClick={(e) => scrollToSection(e, '#projects')}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-500 hover:text-blue-400 transition-colors">
            <span className="text-xs font-mono">SCROLL DOWN</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero