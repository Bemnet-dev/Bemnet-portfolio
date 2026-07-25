'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
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
    }
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Work', path: '#projects' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Contact', path: '#contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-black/80 backdrop-blur-md py-3 sm:py-4'
        : 'bg-transparent py-4 sm:py-6'
        }`}
    >
      <div className="container-max px-4 sm:px-6 md:px-8">
        <div className="flex justify-between items-center">
          <div
            onClick={(e) => handleNavClick(e, '#hero')}
            className="cursor-pointer"
          >
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={(e) => handleNavClick(e, item.path)}
                className="text-xs lg:text-sm text-gray-300 hover:text-white transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Bemnet_Yitagesu_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              Check out my CV
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white min-h-10 min-w-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="container-max px-4 sm:px-6 md:px-8 py-4 sm:py-6">
              <div className="flex flex-col space-y-3 sm:space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={(e) => handleNavClick(e, item.path)}
                    className="text-left text-base sm:text-lg text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </button>
                ))}
                <a
                  href="/Bemnet_Yitagesu_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-base sm:text-lg px-4 py-2 sm:py-3 border border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 w-fit text-gray-300 hover:text-white"
                >
                  Check out my CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header