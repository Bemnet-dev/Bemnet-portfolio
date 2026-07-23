import React from 'react';

interface TemplateSelectorProps {
  activeTemplate: string;
  setActiveTemplate: (template: string) => void;
  onContinue: () => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ 
  activeTemplate, 
  setActiveTemplate,
  onContinue
}) => {
  const templates = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean and contemporary design with a sidebar for skills and contact information.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Elegant and minimalist layout with subtle design elements.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300'
    },
    {
      id: 'professional',
      name: 'Professional',
      description: 'Traditional resume format with a professional appearance.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300'
    }
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {templates.map((template) => (
          <div 
            key={template.id}
            className={`bg-gray-800 border-2 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              activeTemplate === template.id 
                ? 'border-teal-400 shadow-lg shadow-teal-500/20' 
                : 'border-gray-700 hover:border-gray-600'
            }`}
            onClick={() => setActiveTemplate(template.id)}
          >
            <div className="h-40 overflow-hidden">
              <img 
                src={template.image} 
                alt={template.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-200 mb-1">{template.name}</h3>
              <p className="text-sm text-gray-400">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onContinue}
          className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md transition-colors"
        >
          Continue with {templates.find(t => t.id === activeTemplate)?.name} Template
        </button>
      </div>
    </div>
  );
};

export default TemplateSelector;