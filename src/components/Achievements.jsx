import { 
  FiTarget, 
  FiTrendingUp, 
  FiHeart, 
  FiZap
} from 'react-icons/fi';

export default function Achievements() {
  const achievements = [
    {
      icon: <FiTarget size={32} />,
      title: "99.9% Project Success Rate",
      description: "Delivered all projects on time with exceptional quality standards",
      color: "text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: "95+ Lighthouse Scores",
      description: "Consistently achieving top performance metrics across all projects",
      color: "text-green-600 dark:text-green-400"
    },
    {
      icon: <FiHeart size={32} />,
      title: "5+ Interns Mentored",
      description: "Successfully guided junior developers in modern web technologies",
      color: "text-blue-600 dark:text-blue-400"
    },
    {
      icon: <FiZap size={32} />,
      title: "Enterprise Solutions",
      description: "Built scalable applications serving 10k+ concurrent users",
      color: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Key Achievements
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto transition-colors duration-300"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <div className={`${achievement.color} mb-4 flex justify-center transition-colors duration-300`}>
                {achievement.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-300">
                {achievement.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



