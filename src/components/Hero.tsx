import React from 'react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-5">
          <p className="text-teal-600 dark:text-teal-300 font-mono">Hi, my name is</p>
          <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-gray-100">
            Bemnet Yitagesu.
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-gray-600 dark:text-gray-400">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-gray-600 dark:text-gray-400 text-lg">
            I build intuitive, accessible web experiences that balance form and function. Specializing in clean code, responsive design, and user-centered interfaces, I focus on making the web faster, smoother, and more inclusive. JavaScript, React, and CSS are my core tools—I use them to solve problems, not just write code.
          </p>
          <div className="flex space-x-6">
            <a 
              href="#projects" 
              className="px-6 py-3 border border-teal-600 dark:border-teal-300 text-teal-600 dark:text-teal-300 rounded hover:bg-teal-600/10 dark:hover:bg-teal-300/10 transition-colors duration-300 font-mono"
            >
              Check out my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;