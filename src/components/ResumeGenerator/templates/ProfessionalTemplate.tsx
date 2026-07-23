import React from 'react';
import { ResumeData } from '../types';

interface ProfessionalTemplateProps {
  resumeData: ResumeData;
}

const ProfessionalTemplate: React.FC<ProfessionalTemplateProps> = ({ resumeData }) => {
  const { personal, experience, education, skills } = resumeData;

  const formatDate = (dateString: string) => {
    if (dateString === 'Present') return 'Present';
    if (!dateString) return '';
    
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="font-serif text-sm leading-normal">
      {/* Header with border */}
      <header className="border-b-2 border-gray-800 pb-4 mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-1 text-center uppercase">{personal.name}</h1>
        <p className="text-lg text-gray-700 mb-3 text-center">{personal.title}</p>
        
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-1 text-sm text-gray-600">
          {personal.email && <div>{personal.email}</div>}
          {personal.phone && <div>{personal.phone}</div>}
          {personal.location && <div>{personal.location}</div>}
          {personal.website && <div>{personal.website}</div>}
        </div>
      </header>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">
          Professional Summary
        </h2>
        <p className="text-gray-700">{personal.summary}</p>
      </section>

      {/* Experience */}
      {experience.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">
            Professional Experience
          </h2>
          
          {experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">{exp.position}</h3>
                <span className="text-sm text-gray-700 italic">
                  {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                </span>
              </div>
              <p className="text-gray-800 font-semibold mb-1">{exp.company}</p>
              <p className="text-sm text-gray-700">{exp.description}</p>
            </div>
          ))}
        </section>
      )}

      {/* Education */}
      {education.length > 0 && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">
            Education
          </h2>
          
          {education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-bold text-gray-900">{edu.institution}</h3>
                <span className="text-sm text-gray-700 italic">{edu.graduationDate}</span>
              </div>
              <p className="text-gray-800">{edu.degree} in {edu.field}</p>
            </div>
          ))}
        </section>
      )}

      {/* Skills */}
      {skills.length > 0 && (
        <section>
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-400 pb-1 mb-3">
            Skills
          </h2>
          <div className="flex flex-wrap gap-x-1 gap-y-2">
            {skills.map((skill, index) => (
              <span key={index} className="text-gray-700">
                {skill}{index < skills.length - 1 ? ' • ' : ''}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProfessionalTemplate;