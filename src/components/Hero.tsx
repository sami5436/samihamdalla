// Hero.tsx
import { useEffect, useState } from 'react';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  // Simulate loading effect
  // again this is turned on when the component mounts
  useEffect(() => {
    setLoaded(true);
  }, []);

  const titles = ['Software Engineer', 'NASA Intern', 'Full-Stack Developer'];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900" id="hero">
      <div className={`text-center px-6 transition-all duration-1000 transform ${
        loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <div className="mb-6 inline-block p-2 bg-white/10 backdrop-blur-sm rounded-lg">
          <span className="text-blue-300 font-medium">Hello, my name is</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
          Sami Hamdalla
        </h1>
        
        <div className="h-8 mb-6">
          {/* used a mapping just in case wanted */}
          {/* found this animate-fadeIn class on tailwindcss.com
          it animates the opacity from 0 to 1
          and the animation-delay is set to 3s for each title */}
          {titles.map((title, index) => (
            <p 
              key={title}
              className="text-xl text-blue-200 inline-block opacity-0 animate-fadeIn"
              style={{
                animationDelay: `${index * 3}s`,
                animationDuration: '9s',
                animationIterationCount: 'infinite'
              }}
            >
              {title}
            </p>
          ))}
        </div>
        
        <p className="text-xl text-gray-300 max-w-xl mx-auto mb-10">
          A passionate developer with experience at NASA and ExxonMobil, building solutions that matter.
        </p>
        
        <div className="flex justify-center space-x-4">
          <a href="#projects" className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors">
            View Projects
          </a>
          {/* i might change this to something else later */}
          <a href="#contact" className="px-8 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;