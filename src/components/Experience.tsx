// Experience.tsx
const Experience = () => {
  const experiences = [
    {
      company: 'NASA',
      position: 'Software Engineer Intern',
      period: 'Jan 2025 - Present',
      location: 'Houston, TX',
      description: [
        'Built mission-critical software for space communication'
      ],
      logo: 'https://gpm.nasa.gov/sites/default/files/document_files/NASA-Logo-Large.png',
      logoAlt: 'NASA Logo'
    },
    {
      company: 'ExxonMobil',
      position: 'Software Engineer Intern',
      period: 'May 2024 - Aug 2024',
      location: 'Spring, TX',
      description: [
        'Optimized infrastructure for refined product operations'
      ],
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Exxon_Mobil_Logo.svg/2560px-Exxon_Mobil_Logo.svg.png',
      logoAlt: 'ExxonMobil Logo'
    },
    {
      company: 'I2E Consulting',
      position: 'Software Engineer Intern',
      period: 'May 2023 - Aug 2023',
      location: 'Groton, CT',
      description: [
        'Delivered data solutions for diverse clients'
      ],
      logo: 'https://www.i2econsulting.com/_next/image?url=%2Fimages%2Fi2e-Logo_RGB-for-digital-use-1.png&w=256&q=75',
      logoAlt: 'I2E Consulting Logo'
    },
    {
      company: 'University of Houston',
      position: 'Teaching Assistant',
      period: 'Aug 2024 - Present',
      location: 'Houston, TX',
      description: [
        'Mentored students with passion and care'
      ],
      logo: 'https://www.uh.edu/brand/_img/uh_red.png',
      logoAlt: 'University of Houston Logo'
    },
    {
      company: 'Katy Independent School District',
      position: 'Technology Support Intern',
      period: 'May 2022 - Aug 2022',
      location: 'Katy, TX',
      description: [
        'Maintained educational technology across the district'
      ],
      logo: 'https://pbs.twimg.com/profile_images/1450643039/KatyISD_400x400.jpg',
      logoAlt: 'Katy ISD Logo'
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
        
        <div className="relative" style={{ marginLeft: '32px' }}>
          {/* Main timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-10">
                {/* Company logo centered on timeline */}
                <div className="absolute -left-8 top-4 w-16 h-16 flex items-center justify-center z-10">
                  <img 
                    src={exp.logo} 
                    alt={exp.logoAlt}
                    className="w-20 h-20 object-contain"
                  />
                </div>
                
                {/* Timeline node behind the logo */}
                <div className="absolute left-0 top-8 w-4 h-4  rounded-full"></div>
                
                <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 ml-8 transform transition-all hover:-translate-y-1 hover:shadow-xl">
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
                  
                  <p className="text-gray-700">{exp.description[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;