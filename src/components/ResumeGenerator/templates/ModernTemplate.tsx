import React from 'react';
import { ResumeData } from '../types';

interface ModernTemplateProps {
  resumeData: ResumeData;
}

const ModernTemplate: React.FC<ModernTemplateProps> = ({ resumeData }) => {
  const { personal, experience, education, skills } = resumeData;

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="font-sans text-sm leading-normal">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-teal-700 mb-1">{personal.name}</h1>
        <p className="text-lg font-medium text-gray-700 mb-3">{personal.title}</p>
        <p className="text-sm text-gray-600 mb-4">{personal.summary}</p>
        
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-600">
          {personal.email && <div>{personal.email}</div>}
          {personal.phone && <div>{personal.phone}</div>}
          {personal.location && <div>{personal.location}</div>}
          {personal.website && <div>{personal.website}</div>}
        </div>
      </header>

      <div className="grid grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="col-span-2">
          {/* Experience */}
          {experience.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
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
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
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
        </div>

        {/* Sidebar */}
        <div className="col-span-1">
          {/* Skills */}
          {skills.length > 0 && (
            <section className="mb-6">
              <h2 className="text-lg font-bold text-gray-800 border-b border-gray-300 pb-1 mb-3">
                Skills
              </h2>
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-700 mb-1">{skill}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;