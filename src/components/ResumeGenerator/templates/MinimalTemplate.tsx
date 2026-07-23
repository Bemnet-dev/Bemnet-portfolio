import React from 'react';
import { ResumeData } from '../types';

interface MinimalTemplateProps {
  resumeData: ResumeData;
}

const MinimalTemplate: React.FC<MinimalTemplateProps> = ({ resumeData }) => {
  const { personal, experience, education, skills } = resumeData;

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="font-sans text-sm leading-normal max-w-4xl mx-auto">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">{personal.name}</h1>
        <p className="text-md text-gray-700 mb-2">{personal.title}</p>
        
        <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600 mb-4">
          {personal.email && <div>{personal.email}</div>}
          {personal.phone && <div>{personal.phone}</div>}
          {personal.location && <div>{personal.location}</div>}
          {personal.website && <div>{personal.website}</div>}
        </div>
        
        <p className="text-sm text-gray-600 max-w-2xl mx-auto">{personal.summary}</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Skills */}
        {skills.length > 0 && (
          <section className="mb-6">
            <h2 className="text-md font-bold text-gray-800 uppercase tracking-wider mb-3">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <section className="mb-6">
            <h2 className="text-md font-bold text-gray-800 uppercase tracking-wider mb-3">
              Experience
            </h2>
            
            {experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-800">{exp.position}</h3>
                  <span className="text-sm text-gray-600">
                    {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                  </span>
                </div>
                <p className="text-gray-700 mb-1">{exp.company}</p>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education.length > 0 && (
          <section>
            <h2 className="text-md font-bold text-gray-800 uppercase tracking-wider mb-3">
              Education
            </h2>
            
            {education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-bold text-gray-800">{edu.institution}</h3>
                  <span className="text-sm text-gray-600">{edu.graduationDate}</span>
                </div>
                <p className="text-gray-700">{edu.degree} in {edu.field}</p>
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
};

export default MinimalTemplate;