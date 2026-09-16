'use client'

import { motion, Variants } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Mail, Phone, Send, ChevronDown, AlertCircle, ExternalLink, CheckCircle2 } from 'lucide-react'
import emailjs from '@emailjs/browser'
import { ParallaxSection, ParallaxText } from './ParallaxSection'

const servicesList = ['UI/UX Design', 'Web Development', 'Full Stack', 'Industrial Design']

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    service: ''
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID || 'service_34iz2mv'
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID || 'template_tu8785s'
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY || '-BajkdSnDhFBBBGDP'

    // If EmailJS credentials are not available, inform the user
    if (!serviceId || !templateId || !publicKey) {
      setLoading(false)
      setErrorMessage(
        'EmailJS credentials are not configured yet. Please check your EmailJS configuration.'
      )
      return
    }

    try {
      const templateParams = {
        name: formData.name,
        from_name: formData.name,
        email: formData.email,
        from_email: formData.email,
        reply_to: formData.email,
        service: formData.service || 'General Inquiry',
        message: formData.message,
        to_name: 'Bemnet',
      }

      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey)

      if (result.status === 200 || result.text === 'OK') {
        setSubmitted(true)
        setErrorMessage(null)
        setFormData({ name: '', email: '', message: '', service: '' })
        setTimeout(() => setSubmitted(false), 6000)
      } else {
        setErrorMessage('Failed to send message via EmailJS. Please check your credentials or try again.')
      }
    } catch (error: unknown) {
      console.error('Error sending with EmailJS:', error)
      const err = error as { text?: string; message?: string }
      setErrorMessage(err.text || err.message || 'Failed to send message. Please try sending directly via email.')
    } finally {
      setLoading(false)
    }
  }

  const directMailtoUrl = `mailto:bemnet.important@gmail.com?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'} [${formData.service || 'General'}]`
  )}&body=${encodeURIComponent(
    `Hello Bemnet,\n\nName: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service || 'Not specified'}\n\nMessage:\n${formData.message}\n`
  )}`

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
    <section id="contact" className="min-h-screen pt-[50px] pb-0 bg-transparent">
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
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-sm sm:text-base"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-sm sm:text-base"
                required
              />
            </div>

            {/* Custom Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-gray-400 hover:bg-white/10 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all text-sm sm:text-base flex items-center justify-between"
              >
                <span className={formData.service ? 'text-white' : 'text-gray-400'}>
                  {formData.service || "I'm interested in..."}
                </span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} className="text-gray-500" />
                </motion.div>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-gray-900 border border-white/10 rounded-lg sm:rounded-xl overflow-hidden shadow-lg z-50"
                >
                  {servicesList.map((service, index) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, service })
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 transition-all text-sm sm:text-base ${formData.service === service
                          ? 'bg-blue-600/20 text-blue-400 border-l-2 border-l-blue-500'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white'
                        } ${index !== servicesList.length - 1 ? 'border-b border-white/5' : ''}`}
                    >
                      {service}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>

            <div>
              <textarea
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/10 rounded-lg sm:rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none text-sm sm:text-base"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center gap-2 text-sm sm:text-base py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={18} className="sm:w-5 sm:h-5" />
              {loading ? 'Sending Message...' : 'Send Message'}
            </button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-lg sm:rounded-xl text-emerald-300 text-center text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <CheckCircle2 size={20} className="text-emerald-400 shrink-0" />
                <span>Message sent successfully! I'll get back to you soon.</span>
              </motion.div>
            )}

            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-rose-950/40 border border-rose-500/40 rounded-lg sm:rounded-xl text-rose-200 text-left text-sm space-y-3"
              >
                <div className="flex items-start gap-2.5">
                  <AlertCircle size={20} className="text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-rose-200">{errorMessage}</p>
                  </div>
                </div>

                <div className="pt-2 border-t border-rose-500/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                  <span className="text-xs text-rose-300/70">
                    Your message is saved. Send it directly with your email app:
                  </span>
                  <a
                    href={directMailtoUrl}
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 border border-rose-500/40 rounded-lg text-xs font-medium transition-colors"
                  >
                    <span>Open in Email App</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </motion.div>
            )}
          </motion.form>

          {/* Direct Contact */}
          <motion.div variants={itemVariants} className="mt-8 sm:mt-12 text-center">
            <p className="text-gray-500 mb-3 sm:mb-4 text-sm sm:text-base">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a
                href="mailto:bemnet.important@gmail.com"
                className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors text-sm sm:text-base"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
                bemnet.important@gmail.com
              </a>
            </div>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  )
}

export default Contact