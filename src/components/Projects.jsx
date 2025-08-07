'use client';
import { useState } from 'react';
import { FiGithub, FiExternalLink, FiFilter, FiAward, FiUsers, FiClock, FiTrendingUp } from 'react-icons/fi';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: "Vehicle FIR Verification System",
      subtitle: "Enterprise Law Enforcement Solution",
      description: "Enterprise-grade vehicle theft verification system with real-time database integration, JWT authentication, role-based access control, automated report generation, and advanced search algorithms. Deployed for law enforcement agencies with 99.9% uptime.",
      businessImpact: "Streamlined vehicle verification process for law enforcement, reducing manual paperwork by 70%",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "JWT", "Docker", "Vercel"],
      category: "Full Stack",
      github: "https://github.com/RahimShahDev/FYP",
      live: "https://rahimshah-fyp.vercel.app/home",
      featured: true,
      metrics: [
        { icon: <FiTrendingUp size={12} />, label: "Real-time Processing", color: "text-green-600" },
        { icon: <FiUsers size={12} />, label: "Multi-user Access", color: "text-blue-600" },
        { icon: <FiClock size={12} />, label: "Automated Reports", color: "text-purple-600" }
      ],
      timeline: "6 months",
      teamSize: "Lead Developer (Team of 2)",
      clientType: "Government Agency"
    },
    {
      title: "StoryPulse - Content Management Platform",
      subtitle: "Scalable Publishing Solution",
      description: "Scalable storytelling platform with microservices architecture, real-time collaboration, advanced content management, RESTful APIs, Redis caching, and automated CI/CD pipeline. Handles concurrent users efficiently.",
      businessImpact: "Enhanced content workflow management with real-time collaboration features",
      image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redis", "Socket.io", "Jest", "Vercel"],
      category: "API Integration",
      github: "https://github.com/RahimShahDev/StoryPulse",
      live: "https://story-pulse-two.vercel.app/login",
      featured: true,
      metrics: [
        { icon: <FiUsers size={12} />, label: "Real-time Collaboration", color: "text-blue-600" },
        { icon: <FiTrendingUp size={12} />, label: "Microservices Architecture", color: "text-green-600" },
        { icon: <FiClock size={12} />, label: "Automated Publishing", color: "text-purple-600" }
      ],
      timeline: "6 months",
      teamSize: "Lead Developer (Team of 2)",
      clientType: "Media & Publishing"
    },
    {
      title: "Mechmaven - Automotive Service Platform",
      subtitle: "Modern Business Website",
      description: "Modern automotive service website with advanced animations, responsive design, performance optimization, SEO implementation, and interactive user experience. Achieved 95+ Lighthouse score.",
      businessImpact: "Improved online presence with modern design and enhanced user experience",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Swiper", "Webpack", "Vercel"],
      category: "Web Development",
      github: "https://github.com/RahimShahDev/mechmaven",
      live: "https://mechmaven-git-main-rahimshahs-projects.vercel.app/home",
      featured: false,
      metrics: [
        { icon: <FiAward size={12} />, label: "95+ Lighthouse Score", color: "text-yellow-600" },
        { icon: <FiTrendingUp size={12} />, label: "Responsive Design", color: "text-green-600" },
        { icon: <FiUsers size={12} />, label: "SEO Optimized", color: "text-blue-600" }
      ],
      timeline: "3 months",
      teamSize: "Frontend Developer (Solo)",
      clientType: "Automotive Business"
    },
    {
      title: "Doordars - Advanced React Application",
      subtitle: "Modern Component Architecture",
      description: "Sophisticated React application showcasing modern component architecture, advanced state management with Redux, custom hooks, performance optimization, accessibility compliance (WCAG 2.1), and pixel-perfect UI implementation.",
      businessImpact: "Demonstrated advanced React patterns and modern development best practices",
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=300&fit=crop&crop=center",
      technologies: ["React", "Redux Toolkit", "JavaScript ES6+", "CSS3", "React Hooks", "Vercel"],
      category: "UI/UX",
      github: "https://github.com/RahimShahDev/react-project02",
      live: "https://doordars.vercel.app",
      featured: false,
      metrics: [
        { icon: <FiAward size={12} />, label: "WCAG 2.1 Compliant", color: "text-green-600" },
        { icon: <FiTrendingUp size={12} />, label: "Redux State Management", color: "text-purple-600" },
        { icon: <FiUsers size={12} />, label: "Custom Hooks", color: "text-blue-600" }
      ],
      timeline: "3 months",
      teamSize: "UI/UX Developer (Solo)",
      clientType: "Tech Showcase"
    }
  ];

  const categories = ['All', 'Web Development', 'Full Stack', 'UI/UX', 'API Integration'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, modern web solutions, and innovative user experiences.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <FiFilter className="text-gray-500 dark:text-gray-400 mt-1" size={20} />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full transition-all duration-200 font-medium ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=${encodeURIComponent(project.title)}`;
                  }}
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {project.clientType}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 hover:opacity-100">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                    >
                      <FiGithub size={20} />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {project.subtitle}
                  </p>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Business Impact */}
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-3 mb-4">
                  <p className="text-green-800 dark:text-green-200 text-xs font-medium">
                    💼 Business Impact: {project.businessImpact}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span className="text-gray-500 dark:text-gray-400">Timeline:</span>
                    <p className="font-semibold text-gray-700 dark:text-gray-300">{project.timeline}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-2 rounded">
                    <span className="text-gray-500 dark:text-gray-400">Role:</span>
                    <p className="font-semibold text-gray-700 dark:text-gray-300">{project.teamSize}</p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1 bg-gray-50 dark:bg-gray-800 px-2 py-1 rounded text-xs border border-gray-200 dark:border-gray-700"
                    >
                      <span className={metric.color}>
                        {metric.icon}
                      </span>
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1 font-medium">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 font-medium flex-1 justify-center"
                  >
                    <FiGithub size={16} />
                    Source Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-all duration-300 font-medium flex-1 justify-center"
                  >
                    <FiExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







