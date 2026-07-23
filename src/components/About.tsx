'use client'

import { motion, Variants } from 'framer-motion'
import { Github } from 'lucide-react'
import Counter from './Counter'

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

const About = () => {
  const stats = [
    { value: '2+', label: 'Years of Experience' },
    { value: '12+', label: 'Projects Completed' },
    { value: '15+', label: 'Prototypes Developed' }
  ]

  const clients = [
    'Netflix', 'Google', 'KFC', 'HEMA', 'Meta', 'Getir', 'Swapfiets', 'Ace & Tate'
  ]

  return (
    <section id="about" className="min-h-screen py-32 bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="text-gray-500 text-lg mb-4">ABOUT ME</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            I build with vision and precision, turning ideas into enduring creations.
          </h2>
          <div className="max-w-3xl">
            <p className="text-xl text-gray-400 leading-relaxed mb-6">
              I'm Bemnet Yitagesu, a multi-disciplinary designer and full-stack developer.
              I create meaningful digital experiences, combining design, development, and
              systems thinking to deliver solutions that are both functional and visually engaging.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              I work across enterprise software, web applications, and modern JavaScript
              frameworks, approaching each project with precision and clarity. My goal is
              to balance form and function, turning ambitious ideas into impactful,
              real-world solutions.
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="text-center"
            >
              <div className="text-6xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-2">
                <Counter target={parseInt(stat.value)} suffix={stat.value.includes('+') ? '+' : ''} />
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <a
            href="https://github.com/bemnet884"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-lg text-gray-400 hover:text-white transition-colors"
          >
            <Github size={24} />
            View my work on GitHub
          </a>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 text-lg mb-8">Proud to have worked with:</p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {clients.map((client) => (
              <div
                key={client}
                className="text-xl sm:text-2xl font-bold text-gray-600 hover:text-white transition-colors cursor-default"
              >
                {client}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About