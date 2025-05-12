// About.tsx
import { useState } from 'react';

const About = () => {
  // State to track the active tab (skills or education)
  const [activeTab, setActiveTab] = useState('skills');
  
  const skills = {
    languages: ['Python', 'JavaScript', 'TypeScript', 'C++', 'Java', 'SQL', 'Go'],
    frameworks: ['React', 'Node.js', 'Express', 'Angular', 'GraphQL', 'Flask'],
    tools: ['Git', 'Docker', 'Kubernetes', 'AWS', 'Azure', 'GCP', 'Terraform', 'CI/CD']
  };
  
  return (
    // padding horizontally and vertically. id for nav
    <div className="py-24 px-6 bg-gray-100" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            
            <p className="text-gray-700 mb-4">
              I'm a Computer Science student at the University of Houston with a strong passion for 
              building scalable, impactful software solutions.
            </p>
            
            <p className="text-gray-700 mb-6">
              My journey in software engineering has been focused on both frontend and backend technologies, 
              with particular interest in cloud infrastructure, data processing, and creating intuitive user 
              interfaces. I thrive in collaborative environments and enjoy tackling complex problems.
            </p>
            
            <div className="flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/sami-hamdalla" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:smhamdalla@gmail.com" 
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition-colors"
              >
                Email
              </a>
            </div>
          </div>
          {/* skills section */}
          <div className="md:w-1/2 bg-white shadow-lg rounded-lg p-6">
            <div className="flex border-b mb-6">
              {/* tabs for skills and education to make it easier to add more*/}
              {['Skills', 'Education'].map((tab) => (
                <button 
                  key={tab}
                  className={`px-4 py-2 font-medium ${
                    activeTab === tab.toLowerCase() 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-600 hover:text-blue-600 cursor-pointer'
                  }`}
                  onClick={() => setActiveTab(tab.toLowerCase())}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            {activeTab === 'skills' && (
              <div>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {/* map through the skills and create a span for each one */}
                    {skills.languages.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-3">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    {/* map through the skills and create a span for each one */}
                    {skills.frameworks.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">DevOps & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {/* map through the skills and create a span for each one */}
                    {skills.tools.map(skill => (
                      <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
            {/* education section */}
            {activeTab === 'education' && (
              <div>
                <div className="border-l-4 border-blue-600 pl-4 mb-6">
                  <h3 className="text-lg font-semibold">University of Houston</h3>
                  <p className="text-gray-600">Bachelor of Science in Computer Science</p>
                  <p className="text-sm text-gray-500">Expected May 2026 | GPA: 3.99/4.00</p>
                </div>
                
                <h3 className="text-lg font-medium mb-3">Relevant Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Algorithms & Data Structures',
                    'Object-Oriented Programming',
                    'Discrete Mathematics',
                    'Database Systems',
                    'Data Science',
                    'Machine Learning',
                    'Statistics'
                  ].map(course => (
                    <span key={course} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;