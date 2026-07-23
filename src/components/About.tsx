import React from 'react';

const About = () => {
  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'React',
    'Node.js',
    'Tailwind CSS',
    'UI/UX Design',
    'Figma',
    'React Native'
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              Hello! I'm Bemnet, a front-end developer and UI/UX designer passionate about creating digital experiences that live on the internet. 
              I focus on building accessible, inclusive products and digital experiences for a variety of clients.
            </p>
            <p>
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. 
              My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>
            <div>
              <h3 className="text-gray-800 dark:text-gray-200 mb-2">Here are a few technologies I've been working with recently:</h3>
              <ul className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center text-sm">
                    <span className="text-teal-600 dark:text-teal-300 mr-2">▹</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="relative group">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80"
                alt="Profile"
                className="rounded-lg filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-teal-600/20 dark:bg-teal-300/20 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;