'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ['#hero', '#projects', '#services', '#about', '#contact']
      const scrollPosition = window.scrollY + 250 // offset to trigger slightly early

      for (const section of sections) {
        const el = document.querySelector(section)
        if (el) {
          const top = (el as HTMLElement).offsetTop
          const height = (el as HTMLElement).offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [mounted])

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault()
    const element = document.querySelector(path)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
      setActiveSection(path)
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Work', path: '#projects' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100, x: '-50%' }}
      animate={{ y: 0, x: '-50%' }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-1/2 z-50 w-[90%] max-w-[520px] md:max-w-none md:w-max flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto w-full bg-[#151516]/90 border border-white/10 shadow-2xl backdrop-blur-md rounded-full p-1.5 flex items-center justify-between gap-4">
        {/* Logo */}
        <div
          onClick={(e) => handleNavClick(e, '#hero')}
          className="cursor-pointer flex-shrink-0"
        >
          <Logo isActive={activeSection === '#hero'} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.path
            return (
              <div key={item.name} className="relative flex items-center">
                {isActive ? (
                  <div className="border border-[#2563eb]/30 p-[1.5px] rounded-full">
                    <button
                      onClick={(e) => handleNavClick(e, item.path)}
                      className="bg-[#2563eb] text-white px-5 py-1.5 rounded-full font-semibold flex items-center justify-center text-xs lg:text-sm shadow-md transition-all duration-300 animate-fade-in"
                    >
                      {item.name}
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-xs lg:text-sm text-gray-400 hover:text-white font-medium px-4 py-2 transition-colors duration-300 rounded-full"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            )
          })}
          <a
            href="/Bemnet_Yitagesu_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs lg:text-sm px-4 py-2 border border-white/15 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 font-medium ml-1"
          >
            CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white bg-white/5 hover:bg-white/10 rounded-full min-h-10 min-w-10 flex items-center justify-center transition-all duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Card */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-[#151516]/95 border border-white/10 shadow-2xl backdrop-blur-md rounded-2xl p-4 z-40 pointer-events-auto"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.path
                return (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className={`text-left text-base font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 ${isActive
                        ? 'bg-[#2563eb] text-white'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {item.name}
                  </button>
                )
              })}
              <a
                href="/Bemnet_Yitagesu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-base px-4 py-2.5 border border-white/15 rounded-xl hover:bg-white/10 text-gray-300 hover:text-white transition-all duration-300 font-medium w-full mt-2"
              >
                Check out my CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header