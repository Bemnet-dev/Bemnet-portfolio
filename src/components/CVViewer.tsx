import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Wrench,
} from 'lucide-react'
import Link from 'next/link'

interface Experience {
  title: string
  company: string
  period: string
  description: string
}

interface Education {
  degree: string
  institution: string
  year: string
  details: string
}

interface SkillGroup {
  category: string
  iconName: 'Code' | 'Palette' | 'Smartphone' | 'Wrench'
  items: string[]
}

interface Project {
  name: string
  desc: string
  link: string
}

interface Achievement {
  title: string
  desc: string
}

interface CVViewerProps {
  developerExperiences: Experience[]
  designerExperiences: Experience[]
  education: Education[]
  skills: SkillGroup[]
  achievements: Achievement[]
  projects: Project[]
}

const iconMap = {
  Code,
  Palette,
  Smartphone,
  Wrench,
}

export default function CVViewer({
  developerExperiences,
  designerExperiences,
  education,
  skills,
  achievements,
  projects,
}: CVViewerProps) {
  return (
    <div className="min-h-screen bg-[#07070a] text-white">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header with Navigation */}
        <header className="flex items-center justify-between mb-8 pb-6 border-b border-white/10">
          <Link
            href="/"
            className="text-white font-bold text-lg hover:text-blue-400 transition-colors"
          >
            Back to Portfolio
          </Link>
        </header>

        <div className="space-y-12">
          {/* Personal Info */}
          <div className="text-center space-y-4 pb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Bemnet Yitagesu
            </h1>
            <p className="text-xl text-gray-400 mb-6">
              Full Stack Developer | UI/UX Designer | Problem Solver
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-400">
              <a
                href="mailto:bemnet.important@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail size={16} />
                bemnet.important@gmail.com
              </a>
              <a
                href="tel:+251967549339"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone size={16} />
                +251-967549339
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                Ethiopia
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              About Me
            </h2>
            <p className="text-gray-400 leading-relaxed text-lg">
              Software developer with 3+ years of experience specializing in React, Next.js, and React Native. Passionate about building high-performance, user-centric web and mobile applications. I combine strong technical skills with UI/UX design expertise to create impactful digital solutions. Seeking opportunities to contribute to impactful projects while continuously growing as a software engineer.
            </p>
          </section>

          {/* Developer Experience Section */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Developer Experience
            </h2>
            <div className="space-y-6">
              {developerExperiences.map((exp, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </section>

          {/* Design Experience Section */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-indigo-500/30 pb-4">
              Design Experience
            </h2>
            <div className="space-y-6">
              {designerExperiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-600/10 to-purple-600/5 border border-indigo-500/20 rounded-lg p-6 hover:border-indigo-500/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-indigo-400">{exp.company}</p>
                    </div>
                    <p className="text-gray-500 text-sm mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
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
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Skills &amp; Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => {
                const IconComponent = iconMap[skillGroup.iconName] || Code
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/40 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                        <div className="w-9 h-9 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400">
                          <IconComponent size={18} />
                        </div>
                        <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2.5">
                        {skillGroup.items.map((skill, i) => (
                          <span
                            key={i}
                            className="px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/25 rounded-lg text-gray-200 hover:text-blue-300 hover:border-blue-400 hover:bg-blue-500/20 transition-all text-sm font-medium inline-block cursor-default"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-600/10 to-indigo-600/5 border border-blue-500/20 rounded-lg p-6 hover:border-blue-500/40 transition-all"
                >
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm">{achievement.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white border-b border-blue-500/30 pb-4">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gradient-to-br from-purple-600/10 to-pink-600/5 border border-purple-500/20 rounded-lg p-6 hover:border-purple-500/40 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink
                      size={18}
                      className="text-gray-500 group-hover:text-blue-400 transition-colors"
                    />
                  </div>
                  <p className="text-gray-400 text-sm">{project.desc}</p>
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
