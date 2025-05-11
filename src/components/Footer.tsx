// Footer.tsx
const Footer = () => {
  return (
    <div className="bg-gray-100 border-t py-8 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">
              Sami Hamdalla
            </h3>          </div>
          
          <div className="flex space-x-8">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;