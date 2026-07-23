export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  summary: string;
}

export interface ExperienceItem {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  graduationDate: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
}

export const initialResumeData: ResumeData = {
  personal: {
    name: 'John Doe',
    title: 'Frontend Developer',
    email: 'john.doe@example.com',
    phone: '(123) 456-7890',
    location: 'New York, NY',
    website: 'johndoe.com',
    summary: 'Experienced frontend developer with a passion for creating intuitive user interfaces and responsive web applications.'
  },
  experience: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Senior Frontend Developer',
      startDate: '2020-01',
      endDate: 'Present',
      description: 'Led development of the company\'s main product using React and TypeScript. Improved performance by 40% and implemented responsive design principles.'
    },
    {
      company: 'Web Innovations',
      position: 'Frontend Developer',
      startDate: '2017-06',
      endDate: '2019-12',
      description: 'Developed and maintained multiple client websites using modern JavaScript frameworks and CSS preprocessors.'
    }
  ],
  education: [
    {
      institution: 'University of Technology',
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      graduationDate: '2017'
    }
  ],
  skills: ['JavaScript', 'React', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git']
};