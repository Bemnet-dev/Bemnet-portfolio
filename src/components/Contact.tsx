'use client'

import { motion, Variants } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, Send } from 'lucide-react'

const servicesList = ['UI/UX Design', 'Web Development', 'Full Stack', 'Industrial Design']

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  })

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
    <section id="contact" className="min-h-screen py-32 bg-black">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-gray-500 text-lg mb-4">GET IN TOUCH</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's create something unforgettable.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Fill out the form below or get in touch directly.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.form variants={itemVariants} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                required
              />
            </div>

            <div>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-gray-400 focus:outline-none focus:border-white/30 transition-colors"
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
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </motion.form>

          {/* Direct Contact */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="mailto:bemnetyitagesu@gmail.com"
                className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
              >
                <Mail size={20} />
                bemnetyitagesu@gmail.com
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact