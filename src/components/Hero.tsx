'use client'

import { useEffect, useState } from 'react'
import { ChevronDown, Mail, Github, Linkedin, ExternalLink } from 'lucide-react'

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('')
  const fullText = "I build things for the web."

  useEffect(() => {
    let currentIndex = 0
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypewriterText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

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

  return (
    <section className="min-h-screen flex items-center justify-center section-padding bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.3),transparent_70%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      </div>

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left animate-fade-in">
          <div className="mb-6">
            <p className="text-primary-600 dark:text-primary-400 font-mono text-lg mb-4 animate-slide-up">
              Hi, my name is
            </p>
          </div>

          <div className="mb-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
              <span className="block text-gray-900 dark:text-gray-100 animate-slide-up">
                Bemnet Yitagesu.
              </span>
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-600 dark:text-gray-400 mb-6">
              <span className="text-gradient">{typewriterText}</span>
              <span className="text-primary-500 animate-pulse inline-block ml-1">|</span>
            </h2>
          </div>

          <div className="mb-12">
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-slide-up">
              I'm a passionate full-stack developer specializing in building exceptional digital experiences.
              I create intuitive, accessible web applications that balance beautiful design with robust functionality.
              Currently focused on modern JavaScript frameworks, cloud technologies, and user-centered design.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start mb-16">
            <button
              onClick={(e) => scrollToSection(e, '#projects')}
              className="btn-primary group flex items-center justify-center"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-outline group flex items-center justify-center"
            >
              Get In Touch
              <Mail className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center lg:justify-start space-x-6 mb-16">
            {[
              { icon: Github, href: 'https://github.com/bemnet884', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/bemnet-yitagesu', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:bemnetyitagesu@gmail.com', label: 'Email' },
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 hover:bg-primary-100 dark:hover:bg-primary-900/20 rounded-full transform hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce-slow"
            onClick={(e) => scrollToSection(e, '#about')}
          >
            <div className="flex flex-col items-center space-y-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              <span className="text-sm font-mono">Scroll Down</span>
              <ChevronDown size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero