'use client'

import { motion } from 'framer-motion'
import { ParallaxText } from './ParallaxSection'

const About = () => {
  return (
    <section id="about" className="py-0 bg-black">
      <div className="container-max pt-[55px] pb-[20px] pl-[33px] pr-4 sm:pr-6 md:pr-8">
        <ParallaxText speed={0.3}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-500 text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">ABOUT ME</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              I build with vision and precision, turning ideas into enduring creations.
            </h2>
            <div className="max-w-3xl">
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed mb-4">
                I'm Bemnet Yitagesu, a multi-disciplinary designer and full-stack developer.
                I create meaningful digital experiences, combining design, development, and
                systems thinking to deliver solutions that are both functional and visually engaging.
              </p>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                I work across enterprise software, web applications, and modern JavaScript
                frameworks, approaching each project with precision and clarity. My goal is
                to balance form and function, turning ambitious ideas into impactful,
                real-world solutions.
              </p>
            </div>
          </motion.div>
        </ParallaxText>
      </div>
    </section>
  )
}

export default About