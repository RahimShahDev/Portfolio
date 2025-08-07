import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "NGEN Circle (Pvt)",
      period: "January 2024 – July 2025",
      location: "On-site",
      description: [
        "Led UI development projects using React and modern JavaScript",
        "Trained and mentored new interns on frontend development tools",
        "Focused on component reusability and code maintainability",
        "Implemented responsive designs and cross-browser compatibility"
      ]
    },
    {
      title: "Frontend Developer",
      company: "Skylinx Technologies",
      period: "July 2025 – Present",
      location: "On-site",
      description: [
  "Designed and built modern, responsive user interfaces using React.js and Tailwind CSS",
  "Optimized frontend performance with lazy loading, code splitting, and reusable components",
  "Collaborated cross-functionally with UI/UX teams to deliver visually polished and accessible designs",
  "Integrated RESTful APIs and managed complex state using Redux Toolkit and RTK Query"
]

    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto transition-colors duration-300"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
              )}
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                  <FiBriefcase className="text-white" size={20} />
                </div>
                
                <div className="flex-grow bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                        {exp.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-blue-600 mb-2">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center mb-1">
                        <FiCalendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <FiMapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
