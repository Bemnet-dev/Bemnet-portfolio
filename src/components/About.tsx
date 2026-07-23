'use client'

import { Code2, Palette, Rocket, Users, Brain, Coffee } from 'lucide-react'

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'],
      icon: Code2,
      color: 'from-blue-400 to-purple-500'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Express.js', 'Python', 'Django', 'PostgreSQL', 'MongoDB'],
      icon: Brain,
      color: 'from-green-400 to-blue-500'
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Cypress'],
      icon: Rocket,
      color: 'from-purple-400 to-pink-500'
    }
  ]

  const values = [
    {
      icon: Palette,
      title: 'Design-First Approach',
      description: 'I believe great functionality starts with thoughtful design. Every line of code should contribute to an intuitive user experience.'
    },
    {
      icon: Users,
      title: 'Collaborative Spirit',
      description: 'The best solutions emerge from diverse perspectives. I thrive in team environments where ideas can flourish and evolve.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Technology evolves rapidly, and so do I. I&apos;m constantly exploring new tools, frameworks, and methodologies to stay ahead.'
    }
  ]

  return (
    <section className="section-padding bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 rounded-full blur-3xl opacity-30" />

      <div className="container-max relative z-10">
        <div className="animate-fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Profile Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative z-10 transform hover:scale-105 transition-transform duration-300">
                  <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-400 via-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden">
                      {/* Profile placeholder */}
                      <div className="w-full h-full bg-gradient-to-br from-primary-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-6xl font-bold">
                        B
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white animate-spin-slow">
                  <Code2 size={24} />
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I&apos;m Bemnet, a passionate full-stack developer with over 3 years of experience
                  crafting digital experiences that make a difference. My journey in web development started
                  with curiosity about how websites work and has evolved into a deep passion for creating
                  applications that solve real-world problems.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  I specialize in modern JavaScript frameworks and have a keen eye for design. Whether
                  I&apos;m building a responsive frontend with React or architecting a scalable backend with
                  Node.js, I focus on writing clean, maintainable code that stands the test of time.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  When I&apos;m not coding, you can find me exploring new technologies, contributing to open-source
                  projects, or sharing my knowledge with the developer community. I believe in the power of
                  technology to create positive change and am always excited to take on new challenges.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solving', 'Creative Thinking', 'Team Leadership', 'Agile Development'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              Technologies & Skills
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-6 card-hover transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4`}>
                    <skill.icon className="text-white" size={24} />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    {skill.category}
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100 text-center mb-12">
              What Drives Me
            </h3>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="text-center p-6 transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4 transform hover:rotate-12 transition-transform duration-300">
                    <value.icon className="text-white" size={24} />
                  </div>

                  <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {value.title}
                  </h4>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About