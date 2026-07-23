import React from 'react';
import { ResumeData } from './types';
import ModernTemplate from './templates/ModernTemplate';
import MinimalTemplate from './templates/MinimalTemplate';
import ProfessionalTemplate from './templates/ProfessionalTemplate';

interface ResumePreviewProps {
  resumeData: ResumeData;
  template: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resumeData, template }) => {
  const renderTemplate = () => {
    switch (template) {
      case 'modern':
        return <ModernTemplate resumeData={resumeData} />;
      case 'minimal':
        return <MinimalTemplate resumeData={resumeData} />;
      case 'professional':
        return <ProfessionalTemplate resumeData={resumeData} />;
      default:
        return <ModernTemplate resumeData={resumeData} />;
    }
  };

  return (
    <div className="text-black">
      {renderTemplate()}
    </div>
  );
};

export default ResumePreview;