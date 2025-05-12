// Experience.tsx
const Experience = () => {
  const experiences = [
    {
      company: 'NASA',
      position: 'Software Engineer Intern',
      period: 'Jan 2025 - Present',
      location: 'Houston, TX',
      description: [
        'Built and maintained Java Swing GUIs for flight controllers, utilizing Subversion for version control',
        'Attended daily SCRUMs and collaborated on mission-critical software development within NASA\'s ecosystem'
      ],
      logo: '🚀'
    },
    {
      company: 'ExxonMobil',
      position: 'Software Engineer Intern',
      period: 'May 2024 - Aug 2024',
      location: 'Spring, TX',
      description: [
        'Migrated 8 infrastructures from Terraform Open Source to Enterprise, improving deployment time by 90%',
        'Optimized resource allocation, cutting Azure costs by 15% without impacting performance',
        'Created 10+ YAML CI/CD workflows, automating processes and reducing deployment errors by 40%'
      ],
      logo: '⚙️'
    },
    {
      company: 'I2E Consulting',
      position: 'Software Engineer Intern',
      period: 'May 2023 - Aug 2023',
      location: 'Groton, CT',
      description: [
        'Developed a GUI to process CSV files into refined Excel outputs, streamlining data workflows by 50%',
        'Completed intensive SQL and Pandas training, enhancing data analysis efficiency by 30%',
        'Optimized project tracking by leveraging Jira and facilitating communication in weekly meetings'
      ],
      logo: '💻'
    },
    {
      company: 'University of Houston',
      position: 'Teaching Assistant',
      period: 'Aug 2024 - Present',
      location: 'Houston, TX',
      description: [
        'Mentored over 400+ students in C++ Data Structures, resulting in a 21% improvement in average scores',
        'Provided feedback on C++ assignments, enhancing comprehension and reducing error rates by 30%'
      ],
      logo: '🎓'
    },
    {
      company: 'Katy Independent School District',
      position: 'Technology Support Intern',
      period: 'May 2022 - Aug 2022',
      location: 'Katy, TX',
      description: [
        'Supported 21 schools by updating software and imaging 150+ computers weekly, ensuring system readiness',
        'Initialized over $3 million worth of new equipment across multiple campuses, achieving operational excellence',
        'Resolved 91% of tickets from teachers across 4 campuses to prepare for the new school year'
      ],
      logo: '🖥️'
    }
  ];

  return (
    <div className="py-24 px-6 bg-white" id="experience">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey includes internships at NASA, ExxonMobil, and other organizations 
            where I've contributed to mission-critical software, cloud infrastructure, and educational initiatives.
          </p>
        </div>
        
        <div className="relative border-l-2 border-gray-200 ml-3 md:ml-6 pl-6 md:pl-8 space-y-10">
          {/* Map through experiences and display them.*/}
          {/* exp is the experience object. index is the index of the experience in the array */}
          {experiences.map((exp, index) => (
            // relative is used to position properly
            // becuase when i change the screen size, the position of the div changes
            <div key={index} className="relative">
              {/* -left-10 is used to position the logo to the left of the div */}
              <div className="absolute -left-10 md:-left-14 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <span>{exp.logo}</span>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 transform transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <div className="flex items-center text-gray-600">
                      <span className="font-medium text-blue-600">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2 text-gray-700">
                  {/* Map through the description array and display each item */}
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;