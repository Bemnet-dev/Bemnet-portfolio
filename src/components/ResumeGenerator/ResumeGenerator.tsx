import React, { useState, useRef } from 'react';
import { ArrowLeft, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';
import { ResumeData, initialResumeData } from './types';
import TemplateSelector from './TemplateSelector';

const ResumeGenerator: React.FC = () => {
  const [resumeData, setResumeData] = useState<ResumeData>(initialResumeData);
  const [activeTemplate, setActiveTemplate] = useState<string>('modern');
  const [step, setStep] = useState<number>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleChange = (section: keyof ResumeData, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (section: keyof ResumeData, index: number, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].map((item: any, i: number) => 
        i === index ? { ...item, [field]: value } : item
      )
    }));
  };

  const handleAddItem = (section: keyof ResumeData) => {
    if (section === 'experience') {
      setResumeData(prev => ({
        ...prev,
        experience: [...prev.experience, { company: '', position: '', startDate: '', endDate: '', description: '' }]
      }));
    } else if (section === 'education') {
      setResumeData(prev => ({
        ...prev,
        education: [...prev.education, { institution: '', degree: '', field: '', graduationDate: '' }]
      }));
    } else if (section === 'skills') {
      setResumeData(prev => ({
        ...prev,
        skills: [...prev.skills, '']
      }));
    }
  };

  const handleRemoveItem = (section: keyof ResumeData, index: number) => {
    setResumeData(prev => ({
      ...prev,
      [section]: prev[section].filter((_: any, i: number) => i !== index)
    }));
  };

  const handleSkillChange = (index: number, value: string) => {
    setResumeData(prev => ({
      ...prev,
      skills: prev.skills.map((skill, i) => i === index ? value : skill)
    }));
  };

  const generateAIContent = (section: keyof ResumeData, field?: string, index?: number) => {
    setIsGenerating(true);
    
    // Simulate AI generation with predefined content
    setTimeout(() => {
      if (section === 'personal' && field === 'summary') {
        const summaries = [
          "Dedicated front-end developer with 5+ years of experience creating responsive, user-friendly web applications. Proficient in React, TypeScript, and modern CSS frameworks with a strong focus on accessibility and performance optimization.",
          "Creative UI/UX designer and developer with expertise in translating business requirements into elegant digital solutions. Skilled in the full design process from wireframing to implementation with a passion for creating intuitive user experiences.",
          "Full-stack web developer specializing in React and Node.js ecosystems. Experienced in building scalable applications with clean, maintainable code and optimized performance. Strong problem-solving skills and attention to detail."
        ];
        
        setResumeData(prev => ({
          ...prev,
          personal: {
            ...prev.personal,
            summary: summaries[Math.floor(Math.random() * summaries.length)]
          }
        }));
      } else if (section === 'experience' && index !== undefined) {
        const descriptions = [
          "Led front-end development for the company's flagship product, improving performance by 40% and implementing responsive design principles. Collaborated with UX designers to create intuitive interfaces and mentored junior developers.",
          "Developed and maintained multiple client-facing web applications using React and TypeScript. Implemented state management with Redux, integrated RESTful APIs, and optimized application performance through code splitting and lazy loading.",
          "Architected and built scalable web applications from concept to deployment. Implemented CI/CD pipelines, wrote comprehensive unit and integration tests, and reduced page load times by 60% through performance optimizations."
        ];
        
        setResumeData(prev => ({
          ...prev,
          experience: prev.experience.map((exp, i) => 
            i === index ? { ...exp, description: descriptions[Math.floor(Math.random() * descriptions.length)] } : exp
          )
        }));
      }
      
      setIsGenerating(false);
    }, 1500);
  };

  const generatePDF = async () => {
    if (!resumeRef.current) return;
    
    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      logging: false,
      useCORS: true
    });
    
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });
    
    const imgWidth = 210;
    const imgHeight = canvas.height * imgWidth / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`${resumeData.personal.name.replace(/\s+/g, '_')}_resume.pdf`);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/" className="text-teal-300 hover:text-teal-400 transition-colors mr-4">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-3xl font-bold text-gray-100">AI-Powered Resume Generator</h1>
        </div>
        
        {step === 1 && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-100 mb-4">Choose a Template</h2>
            <TemplateSelector 
              activeTemplate={activeTemplate} 
              setActiveTemplate={setActiveTemplate} 
              onContinue={() => setStep(2)}
            />
          </div>
        )}
        
        {step === 2 && (
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Resume Information</h2>
                <button 
                  onClick={() => setStep(1)}
                  className="text-sm text-gray-400 hover:text-teal-300 transition-colors"
                >
                  Change Template
                </button>
              </div>
              
              <ResumeForm 
                resumeData={resumeData}
                handleChange={handleChange}
                handleArrayChange={handleArrayChange}
                handleAddItem={handleAddItem}
                handleRemoveItem={handleRemoveItem}
                handleSkillChange={handleSkillChange}
                generateAIContent={generateAIContent}
                isGenerating={isGenerating}
              />
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-100">Preview</h2>
                <button 
                  onClick={generatePDF}
                  className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded transition-colors"
                >
                  <Download size={16} />
                  Download PDF
                </button>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                <div ref={resumeRef} className="p-6">
                  <ResumePreview 
                    resumeData={resumeData} 
                    template={activeTemplate}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeGenerator;