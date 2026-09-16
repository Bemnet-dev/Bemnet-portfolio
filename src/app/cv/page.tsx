import type { Metadata } from 'next'
import CVViewer from '@/components/CVViewer'

export const metadata: Metadata = {
  title: 'Curriculum Vitae | Bemnet Yitagesu',
  description:
    'Full Stack Developer & UI/UX Designer CV - Experience, Skills, Education, and Projects of Bemnet Yitagesu.',
}

export default function CVPage() {
  const developerExperiences = [
    {
      title: 'Cvent Developer',
      company: 'MMCY Tech',
      period: 'Oct 2025 - Present',
      description:
        'Developing and maintaining web applications. Building scalable solutions using modern technologies and best practices.',
    },
    {
      title: 'Software Developer',
      company: 'Zemenay Technology',
      period: '3 Months',
      description:
        'Developed web applications and contributed to various projects. Gained experience in full-stack development and software engineering practices.',
    },
  ]

  const designerExperiences = [
    {
      title: 'UI/UX Designer',
      company: 'RDX',
      period: '1 Year',
      description:
        'Designed user interfaces and user experiences for web and mobile applications. Collaborated with development teams to implement design systems and improve user satisfaction.',
    },
  ]

  const education = [
    {
      degree: 'BA in Computer Science',
      institution: 'Microlink Information Technology College',
      year: '2025',
      details: 'GPA 3.3 - Best Final Year Project Award',
    },
  ]

  const skills = [
    {
      category: 'Frontend Development',
      iconName: 'Code' as const,
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3'],
    },
    {
      category: 'UI/UX & Product Design',
      iconName: 'Palette' as const,
      items: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Systems', 'Webflow'],
    },
    {
      category: 'Backend & Mobile',
      iconName: 'Smartphone' as const,
      items: ['React Native', 'Expo', 'Python', 'Flask', 'PHP', 'Laravel', 'C#'],
    },
    {
      category: 'Tools & Ecosystem',
      iconName: 'Wrench' as const,
      items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Vercel'],
    },
  ]

  const achievements = [
    { title: 'Best Final Year Project', desc: 'Recognized for outstanding final year project' },
    { title: 'UI Designer Level 1 & 2 Certificate', desc: 'Professional certification in UI design' },
    { title: 'ALX First Hospitality Hackathon', desc: 'Participated and contributed to winning solution' },
  ]

  const projects = [
    {
      name: 'GEZANA PROPERTIES',
      desc: 'Luxury real estate developer portfolio and bespoke architectural showcase',
      link: 'https://www.gezanestates.com/',
    },
    {
      name: 'SERVAX SOLUTIONS',
      desc: 'Corporate industrial engineering hub and multidivisional showcase',
      link: 'https://servax.vercel.app/',
    },
    {
      name: 'TUSCAN HOUND',
      desc: 'Pet management and concierge system with booking and scheduling',
      link: 'https://tuscan-hound.vercel.app/',
    },
    {
      name: 'HULU PROPERTIES',
      desc: 'Real estate platform with advanced filtering',
      link: 'https://huluproperties.vercel.app/',
    },
    {
      name: 'EVENTRIX',
      desc: 'Event management and ticketing platform',
      link: 'https://eventrix.bemnet.vercel.app/',
    },
    {
      name: 'FITMARKET',
      desc: 'Fitness e-commerce platform',
      link: 'https://fitmarket.bemnet.vercel.app/',
    },
  ]

  return (
    <CVViewer
      developerExperiences={developerExperiences}
      designerExperiences={designerExperiences}
      education={education}
      skills={skills}
      achievements={achievements}
      projects={projects}
    />
  )
}
