import { FaFacebook, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 ">
      <div className="py-10 mx-auto flex flex-col lg:flex-row items-center space-y-4 justify-between px-5">
        {/* Footer Text */}
        <div>
          <h1 className="text-white text-4xl font-semibold">WEBLOG</h1>
        </div>

        {/* Company Name */}
        
        <div className="text-center">
          <p className="text-md text-center">&copy; 2024 by Awais Mehmood.All rights reserved</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          {/* Facebook */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="w-8 h-8  text-white hover:text-blue-600 transition-colors duration-300" />
          </a>
          {/* LinkedIn */}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-8 h-8 text-white hover:text-blue-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
