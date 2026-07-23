import React from 'react';
import { Sparkles, Plus, Trash2 } from 'lucide-react';
import { ResumeData } from './types';

interface ResumeFormProps {
  resumeData: ResumeData;
  handleChange: (section: keyof ResumeData, field: string, value: string) => void;
  handleArrayChange: (section: keyof ResumeData, index: number, field: string, value: string) => void;
  handleAddItem: (section: keyof ResumeData) => void;
  handleRemoveItem: (section: keyof ResumeData, index: number) => void;
  handleSkillChange: (index: number, value: string) => void;
  generateAIContent: (section: keyof ResumeData, field?: string, index?: number) => void;
  isGenerating: boolean;
}

const ResumeForm: React.FC<ResumeFormProps> = ({
  resumeData,
  handleChange,
  handleArrayChange,
  handleAddItem,
  handleRemoveItem,
  handleSkillChange,
  generateAIContent,
  isGenerating
}) => {
  return (
    <div className="space-y-8 max-h-[800px] overflow-y-auto pr-2">
      {/* Personal Information */}
      <div>
        <h3 className="text-lg font-medium text-gray-200 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
            <input
              type="text"
              value={resumeData.personal.name}
              onChange={(e) => handleChange('personal', 'name', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Job Title</label>
            <input
              type="text"
              value={resumeData.personal.title}
              onChange={(e) => handleChange('personal', 'title', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={resumeData.personal.email}
              onChange={(e) => handleChange('personal', 'email', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Phone</label>
            <input
              type="text"
              value={resumeData.personal.phone}
              onChange={(e) => handleChange('personal', 'phone', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Location</label>
            <input
              type="text"
              value={resumeData.personal.location}
              onChange={(e) => handleChange('personal', 'location', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Website</label>
            <input
              type="text"
              value={resumeData.personal.website}
              onChange={(e) => handleChange('personal', 'website', e.target.value)}
              className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <label className="block text-sm font-medium text-gray-400">Professional Summary</label>
            <button
              type="button"
              onClick={() => generateAIContent('personal', 'summary')}
              disabled={isGenerating}
              className="flex items-center text-xs text-teal-400 hover:text-teal-300 disabled:text-gray-500"
            >
              <Sparkles size={14} className="mr-1" />
              {isGenerating ? 'Generating...' : 'Generate with AI'}
            </button>
          </div>
          <textarea
            value={resumeData.personal.summary}
            onChange={(e) => handleChange('personal', 'summary', e.target.value)}
            rows={4}
            className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
      </div>

      {/* Work Experience */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-200">Work Experience</h3>
          <button
            type="button"
            onClick={() => handleAddItem('experience')}
            className="flex items-center text-sm text-teal-400 hover:text-teal-300"
          >
            <Plus size={16} className="mr-1" />
            Add Experience
          </button>
        </div>
        
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-750 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-md font-medium text-gray-300">Experience {index + 1}</h4>
              <button
                type="button"
                onClick={() => handleRemoveItem('experience', index)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Company</label>
                <input
                  type="text"
                  value={exp.company}
                  onChange={(e) => handleArrayChange('experience', index, 'company', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Position</label>
                <input
                  type="text"
                  value={exp.position}
                  onChange={(e) => handleArrayChange('experience', index, 'position', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Start Date</label>
                <input
                  type="month"
                  value={exp.startDate}
                  onChange={(e) => handleArrayChange('experience', index, 'startDate', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">End Date</label>
                <input
                  type="text"
                  value={exp.endDate}
                  placeholder="Present or YYYY-MM"
                  onChange={(e) => handleArrayChange('experience', index, 'endDate', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-400">Description</label>
                <button
                  type="button"
                  onClick={() => generateAIContent('experience', 'description', index)}
                  disabled={isGenerating}
                  className="flex items-center text-xs text-teal-400 hover:text-teal-300 disabled:text-gray-500"
                >
                  <Sparkles size={14} className="mr-1" />
                  {isGenerating ? 'Generating...' : 'Generate with AI'}
                </button>
              </div>
              <textarea
                value={exp.description}
                onChange={(e) => handleArrayChange('experience', index, 'description', e.target.value)}
                rows={3}
                className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Education */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-200">Education</h3>
          <button
            type="button"
            onClick={() => handleAddItem('education')}
            className="flex items-center text-sm text-teal-400 hover:text-teal-300"
          >
            <Plus size={16} className="mr-1" />
            Add Education
          </button>
        </div>
        
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-6 p-4 bg-gray-750 rounded-lg border border-gray-700">
            <div className="flex justify-between items-start mb-4">
              <h4 className="text-md font-medium text-gray-300">Education {index + 1}</h4>
              <button
                type="button"
                onClick={() => handleRemoveItem('education', index)}
                className="text-red-400 hover:text-red-300"
              >
                <Trash2 size={16} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Institution</label>
                <input
                  type="text"
                  value={edu.institution}
                  onChange={(e) => handleArrayChange('education', index, 'institution', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Degree</label>
                <input
                  type="text"
                  value={edu.degree}
                  onChange={(e) => handleArrayChange('education', index, 'degree', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Field of Study</label>
                <input
                  type="text"
                  value={edu.field}
                  onChange={(e) => handleArrayChange('education', index, 'field', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Graduation Year</label>
                <input
                  type="text"
                  value={edu.graduationDate}
                  onChange={(e) => handleArrayChange('education', index, 'graduationDate', e.target.value)}
                  className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-200">Skills</h3>
          <button
            type="button"
            onClick={() => handleAddItem('skills')}
            className="flex items-center text-sm text-teal-400 hover:text-teal-300"
          >
            <Plus size={16} className="mr-1" />
            Add Skill
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {resumeData.skills.map((skill, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={skill}
                onChange={(e) => handleSkillChange(index, e.target.value)}
                className="flex-1 bg-gray-700 border border-gray-600 rounded px-3 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="e.g., JavaScript, Project Management, etc."
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('skills', index)}
                className="text-red-400 hover:text-red-300 p-2"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;