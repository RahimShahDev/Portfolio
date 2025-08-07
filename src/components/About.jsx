export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a motivated and detail-oriented frontend developer with extensive experience in 
              React, Tailwind CSS, and Augment. I specialize in building responsive, user-friendly 
              interfaces with a strong sense of UI/UX design and clean code practices.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              My passion lies in creating exceptional user experiences through modern web technologies. 
              I believe in writing clean, maintainable code and staying up-to-date with the latest 
              industry trends and best practices.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, I enjoy mentoring interns, contributing to open-source projects, 
              and continuously learning new technologies to enhance my skill set. I'm always excited 
              about taking on new challenges and collaborating with talented teams.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-blue-50 dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
              <div className="text-gray-600 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-green-50 dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <div className="text-gray-600 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center p-6 bg-purple-50 dark:bg-gray-800 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
              <div className="text-gray-600 dark:text-gray-300">Interns Mentored</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







