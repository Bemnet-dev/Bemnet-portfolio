'use client'

import { motion } from 'framer-motion'
import { Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const CVPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  const experiences = [
    {
      title: 'Cvent Developer',
      company: 'MMCY Tech',
      period: 'Oct 2025 - Present',
      description: 'Developing and maintaining web applications. Building scalable solutions using modern technologies and best practices.'
    },
    {
      title: 'UI/UX Designer',
      company: 'RDX',
      period: '1 Year',
      description: 'Designed user interfaces and user experiences for web and mobile applications. Collaborated with development teams to implement design systems and improve user satisfaction.'
    },
    {
      title: 'Software Developer',
      company: 'Zemenay Technology',
      period: '3 Months',
      description: 'Developed web applications and contributed to various projects. Gained experience in full-stack development and software engineering practices.'
    }
  ]

  const education = [
    {
      degree: 'BA in Computer Science',
      institution: 'Microlink Information Technology College',
      year: '2024',
      details: 'GPA 3.3 - Best Final Year Project Award'
    }
  ]

  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Figma', 'UI/UX Design']
    },
    {
      category: 'Backend & Mobile',
      items: ['React Native', 'Expo', 'Python', 'Flask', 'PHP', 'Laravel', 'C#']
    },
    {
      category: 'Tools & Platforms',
      items: ['GitHub', 'Firebase', 'Supabase', 'WordPress', 'Webflow', 'Android Studio']
    }
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 z-40"
      >
        <div className="container-max px-4 sm:px-6 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg hover:text-blue-400 transition-colors">
            Back to Portfolio
          </Link>
          <a
            href="https://drive.google.com/file/d/1zwv2ZQztmLrG8E7d5ncQrxfE1zgY5EyI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>
      </motion.div>

      <div className="container-max px-4 sm:px-6 md:px-8 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Section */}
          <motion.div variants={itemVariants} className="text-center py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bemnet Yitagesu
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Full Stack Developer | UI/UX Designer | Problem Solver
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
              <a href="mailto:bemnet.important@gmail.com" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Mail size={16} />
                bemnet.important@gmail.com
              </a>
              <a href="tel:+251967549339" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone size={16} />
                +251-967549339
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Ethiopia
              </div>
            </div>
          </motion.div>

          {/* About Section */}
          <motion.section variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              About Me
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Software developer with 3+ years of experience specializing in React, Next.js, and React Native. Passionate about building high-performance, user-centric web and mobile applications. I combine strong technical skills with UI/UX design expertise to create impactful digital solutions. Seeking opportunities to contribute to impactful projects while continuously growing as a software engineer.
            </p>
          </motion.section>

          {/* Experience Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <p className="text-indigo-400">{edu.institution}</p>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 md:mt-0">{edu.year}</p>
                  </div>
                  <p className="text-gray-400">{edu.details}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Skills & Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="space-y-4"
                >
                  <h3 className="text-lg font-bold text-blue-400">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-gray-300 hover:text-blue-400 hover:border-blue-500/60 transition-all text-sm"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Achievements Section */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Best Final Year Project', desc: 'Recognized for outstanding final year project' },
                { title: 'UI Designer Level 1 & 2 Certificate', desc: 'Professional certification in UI design' },
                { title: 'ALX First Hospitality Hackathon', desc: 'Participated and contributed to winning solution' }
              ].map((achievement, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all"
                >
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: 'HULU PROPERTIES', desc: 'Real estate platform with advanced filtering', link: 'https://huluproperties.vercel.app/' },
                { name: 'EVENTRIX', desc: 'Event management and ticketing platform', link: 'https://eventrix.bemnet.vercel.app/' },
                { name: 'BOOKNOW', desc: 'Booking and appointment scheduling platform', link: 'https://booknow-azure.vercel.app/' },
                { name: 'FITMARKET', desc: 'Fitness e-commerce platform', link: 'https://fitmarket.bemnet.vercel.app/' }
              ].map((project, index) => (
                <motion.a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group bg-gradient-to-br from-purple-600/10 to-pink-600/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{project.name}</h3>
                    <ExternalLink size={18} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </motion.a>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={itemVariants} className="text-center py-12">
            <p className="text-gray-400 mb-6">Interested in working together?</p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all font-semibold"
            >
              Get In Touch
            </Link>
          </motion.section>
        </motion.div>
      </div>
    </div>
  )
}

export default CVPage
