import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/Bemnet-dev",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/bemnet-developer",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={24} />,
      href: "mailto:creedbhope@gmail.com",
      label: "Email"
    },
    {
      icon: <Phone size={24} />,
      href: "tel:+251965853788",
      label: "Phone"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Get In Touch</h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <a
          href="mailto:creedbhope@gmail.com"
          className="inline-block px-8 py-4 border-2 border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 rounded hover:bg-teal-600/10 dark:hover:bg-teal-300/10 transition-colors duration-300 font-mono"
        >
          Say Hello
        </a>

        <div className="mt-12">
          <div className="flex justify-center space-x-8">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;