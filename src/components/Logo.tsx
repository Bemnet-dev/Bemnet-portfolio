import React from 'react';

const Logo = () => {
  return (
    <div className="font-mono text-xl group">
      <span className="text-gray-700 dark:text-gray-300">&lt;</span>
      <span className="text-teal-600 dark:text-teal-300 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">BY</span>
      <span className="text-gray-700 dark:text-gray-300">/&gt;</span>
    </div>
  );
};

export default Logo;