import React from "react";
import { Calendar, MapPin, ExternalLink, Briefcase } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

const Experience: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const experiences = [
    {
      title: "Senior React Native Developer",
      company: "Tatvasoft Pvt Ltd",
      location: "Hybride",
      period: "2022 - Present",
      type: "Full-time",
      description:
        "Leading mobile app development for multiple high-impact projects, mentoring junior developers, and implementing best practices for code quality and performance optimization.",
      achievements: [
        "Built 5+ production mobile apps with 100K+ downloads",
        "Reduced app loading time by 40% through performance optimization",
        "Mentored 3 junior developers and conducted code reviews",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "AWS"],
    },
    {
      title: "React Native Developer",
      company: "Webline India Pvt Ltd",
      location: "Ahmedabad, India",
      period: "2021 - 2022",
      type: "Full-time",
      description:
        "Developed cross-platform mobile applications for e-commerce and healthcare sectors, focusing on user experience and performance optimization.",
      achievements: [
        "Delivered 3 successful mobile apps on schedule",
        "Improved app performance by 35% through code optimization",
        "Collaborated with design team to implement pixel-perfect UIs",
        "Integrated third-party APIs and payment gateways",
      ],
      technologies: ["React Native", "JavaScript", "Redux", "REST APIs", "Git"],
    },
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              My professional journey in mobile development
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative flex items-start space-x-6 animate-fade-in-right`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center border-4 border-black">
                      <Briefcase size={24} className="text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-cyan-400 mb-2">
                          <span className="font-semibold">{exp.company}</span>
                          <span className="px-2 py-1 bg-cyan-500/20 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center space-x-6 text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li
                            key={achIndex}
                            className="flex items-start space-x-2 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300 hover:bg-white/20 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
