import { 
  FiCode, 
  FiLayers, 
  FiTool, 
  FiGitBranch, 
  FiZap, 
  FiDatabase,
  FiMonitor,
  FiSettings
} from 'react-icons/fi';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <FiMonitor size={24} />,
      skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
    },
    {
      title: "Styling & UI",
      icon: <FiLayers size={24} />,
      skills: ["Tailwind CSS", "Framer Motion", "Responsive Design", "UI/UX Principles"]
    },
    {
      title: "Development Tools",
      icon: <FiTool size={24} />,
      skills: ["Redux Toolkit", "Axios", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Modern Workflow",
      icon: <FiGitBranch size={24} />,
      skills: ["Git & GitHub", "Docker", "Webpack", "Vite", "ESLint/Prettier"]
    },
    {
      title: "Performance & SEO",
      icon: <FiZap size={24} />,
      skills: ["Core Web Vitals", "Lighthouse Optimization", "SEO Best Practices", "PWA", "Lazy Loading"]
    },
    {
      title: "Backend & Database",
      icon: <FiDatabase size={24} />,
      skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "JWT Authentication", "API Design"]
    }
  ];

  const skillLevels = [
    { name: "React.js", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 78 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 78 },
    { name: "Node.js", level: 65 },
    { name: "Redux Toolkit", level: 70 },
    { name: "RESTful APIs", level: 82 }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto transition-colors duration-300"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
            Constantly evolving skillset focused on modern web development and industry best practices
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm mr-2 mb-2 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skill Levels */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 text-center transition-colors duration-300">
            Proficiency Levels
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillLevels.map((skill, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800 dark:text-white font-medium transition-colors duration-300">
                    {skill.name}
                  </span>
                  <span className="text-blue-600 dark:text-blue-400 font-semibold transition-colors duration-300">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 transition-colors duration-300">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}





