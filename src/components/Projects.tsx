// Projects.tsx
const Projects = () => {
  const projects = [
    {
      title: 'TerraScope',
      description: 'A desktop GUI application built with Python that simplifies cloud infrastructure as code. Features a drag-and-drop interface for Terraform resource management, JSON schema template loading, and direct CLI integration with object-oriented design principles.',
      tech: ['Python', 'PyQt', 'Terraform', 'OOP', 'AWS', 'Azure'],
      image: '/api/placeholder/600/340',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'FlightCast',
      description: 'Machine learning system that predicts flight delays based on historical airline data. Built using R with Random Forest, Decision Trees, and Logistic Regression models achieving 83% accuracy in delay predictions.',
      tech: ['R', 'Random Forest', 'Decision Trees', 'Data Visualization', 'Statistical Analysis'],
      image: '/api/placeholder/600/340',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'TeachAssist AI',
      description: 'A 24/7 teaching assistant RAG (Retrieval Augmented Generation) system that allows instructors to upload course materials and documentation for students to query at any time, improving access to help outside office hours.',
      tech: ['Python', 'LangChain', 'OpenAI API', 'Vector Databases', 'React'],
      image: '/api/placeholder/600/340',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Space Guard',
      description: 'An application leveraging crowdsourced data to track orbital debris and improve hazard detection, enhancing spacecraft safety and mission planning.',
      tech: ['React', 'Node.js', 'Azure SQL'],
      image: '/api/placeholder/600/340',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'Dreamlandia',
      description: 'A full-stack theme park management application with real-time updates, integrated with Azure SQL database. Implements complete CRUD operations for park attractions and guest management.',
      tech: ['React', 'SQL', 'Azure SQL Database'],
      image: '/api/placeholder/600/340',
      githubLink: '#',
      liveLink: '#'
    },
    {
      title: 'CrohnCare',
      description: 'A healthcare application for Crohn\'s disease patients to track symptoms and identify patterns using machine learning, helping users manage their condition more effectively.',
      tech: ['React', 'Python', 'Node.js', 'MongoDB', 'Numpy', 'Pandas'],
      image: '/api/placeholder/600/340',
      githubLink: '#',
      liveLink: '#'
    }
  ];


  return (
    <div className="py-24 px-6 bg-gray-50" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I've built a diverse range of applications focused on solving real-world problems,
            from healthcare solutions to aerospace technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-between items-center">
                    <a 
                      href={project.githubLink} 
                      className="text-white hover:text-blue-300 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      GitHub
                    </a>
                    <a 
                      href={project.liveLink} 
                      className="text-white hover:text-blue-300 transition-colors"
                      aria-label="View live project"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;