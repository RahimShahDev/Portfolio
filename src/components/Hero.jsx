'use client';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Image from 'next/image';

export default function Hero() {
  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = '/RahimShah_Resume.pdf';
    link.download = 'Rahim_Shah_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Rahim Shah</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-6 transition-colors duration-300">
              Frontend Developer
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed transition-colors duration-300">
              I build responsive, clean, and dynamic user interfaces with a passion for creating 
              exceptional user experiences using modern web technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                <FiDownload size={20} />
                Download Resume
              </button>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium"
              >
                <FiMail size={20} />
                Get In Touch
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/RahimShahDev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rahim-shah-marwat-420373236"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <FiLinkedin size={24} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-2xl p-2">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full overflow-hidden">
                  <Image
                    src="/image.png"
                    alt="Rahim Shah - Frontend Developer"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}













