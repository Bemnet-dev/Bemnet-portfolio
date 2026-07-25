'use client'

import { motion, Variants } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Phone, Send } from 'lucide-react'
import { ParallaxSection, ParallaxText } from './ParallaxSection'

const servicesList = ['UI/UX Design', 'Web Development', 'Full Stack', 'Industrial Design']

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

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

  return (
    <section id="contact" className="min-h-screen py-16 sm:py-24 md:py-32 bg-black">
      <div className="container-max px-4 sm:px-6 md:px-8">
        <ParallaxText speed={0.3} className="mb-8 sm:mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">GET IN TOUCH</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Let's create something unforgettable.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to say hello? I'd love to hear from you.
              Fill out the form below or get in touch directly.
            </p>
          </motion.div>
        </ParallaxText>

        <ParallaxSection speed={0.25} className="max-w-2xl mx-auto">
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-gray-400 focus:outline-none focus:border-white/30 transition-colors text-sm sm:text-base"
              >
                <option value="">I'm interested in...</option>
                {servicesList.map((service) => (
                  <option key={service} value={service} className="bg-gray-900">
                    {service}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <textarea
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none text-sm sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4"
            >
              <Send size={18} className="sm:w-5 sm:h-5" />
              Send Message
            </button>
          </motion.form>

          {/* Direct Contact */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-12 text-center">
            <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="mailto:bemnetyitagesu@gmail.com"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors text-sm sm:text-base"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                bemnetyitagesu@gmail.com
              </a>
            </div>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  )
}

export default Contact