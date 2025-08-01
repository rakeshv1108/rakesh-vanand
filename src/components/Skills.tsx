import React from 'react';
import { Smartphone, Code, Database, Globe, Server, Palette } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Skills: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React Native", level: 90 },
        { name: "iOS Development", level: 75 },
        { name: "Android Development", level: 80 },
        { name: "Flutter", level: 70 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "React.js", level: 85 },
        { name: "TypeScript", level: 90 },
        { name: "JavaScript", level: 90 },
        { name: "HTML5/CSS3", level: 85 }
      ]
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Firebase", level: 80 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      icon: Globe,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 55 },
        { name: "CI/CD", level: 65 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in-up`}
                  style={{ animationDelay: `${categoryIndex * 200}ms` }}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                      <Icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out`}
                            style={{
                              width: isVisible ? `${skill.level}%` : '0%',
                              transitionDelay: `${(categoryIndex * 200) + (skillIndex * 100)}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills Tags */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Redux', 'Context API', 'REST APIs', 'GraphQL', 'Expo',
                'AsyncStorage', 'SQLite', 'Push Notifications', 'In-App Purchases',
                'Social Auth', 'Maps Integration', 'Camera/Gallery', 'Biometric Auth'
              ].map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 bg-white/5 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 animate-fade-in`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;