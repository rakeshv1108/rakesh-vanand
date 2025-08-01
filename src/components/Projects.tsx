import React from 'react';
import { ExternalLink, Github, Smartphone, Star, Users, Download } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Projects: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      title: "EComm Mobile",
      description: "A full-featured e-commerce mobile app with advanced features like wishlist, cart management, secure payments, and real-time order tracking.",
      image: "https://images.pexels.com/photos/7679676/pexels-photo-7679676.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Redux", "Firebase", "Stripe", "Push Notifications"],
      features: ["Cross-platform", "Real-time sync", "Secure payments", "Push notifications"],
      stats: {
        downloads: "50K+",
        rating: 4.8,
        users: "25K+"
      },
      links: {
        github: "#",
        demo: "#",
        playstore: "#",
        appstore: "#"
      },
      status: "Live"
    },
    {
      title: "HealthTracker Pro",
      description: "A comprehensive health monitoring app that tracks fitness goals, monitors vital signs, and provides personalized health insights with data visualization.",
      image: "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "TypeScript", "SQLite", "Chart.js", "HealthKit"],
      features: ["Health monitoring", "Data visualization", "Goal tracking", "Offline support"],
      stats: {
        downloads: "30K+",
        rating: 4.6,
        users: "15K+"
      },
      links: {
        github: "#",
        demo: "#",
        playstore: "#",
        appstore: "#"
      },
      status: "Live"
    },
    {
      title: "TaskFlow Manager",
      description: "A productivity app for team collaboration with task management, real-time chat, file sharing, and project timeline visualization.",
      image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      features: ["Team collaboration", "Real-time chat", "File sharing", "Project timelines"],
      stats: {
        downloads: "20K+",
        rating: 4.7,
        users: "10K+"
      },
      links: {
        github: "#",
        demo: "#",
        playstore: "#",
        appstore: "#"
      },
      status: "Live"
    },
    {
      title: "FoodDelivery App",
      description: "A food delivery platform with restaurant browsing, menu management, real-time order tracking, and integrated payment system.",
      image: "https://images.pexels.com/photos/4393665/pexels-photo-4393665.jpeg?auto=compress&cs=tinysrgb&w=600",
      technologies: ["React Native", "Express.js", "PostgreSQL", "Google Maps", "Razorpay"],
      features: ["Real-time tracking", "Multiple restaurants", "Order management", "GPS integration"],
      stats: {
        downloads: "40K+",
        rating: 4.5,
        users: "20K+"
      },
      links: {
        github: "#",
        demo: "#",
        playstore: "#",
        appstore: "#"
      },
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
              Showcasing my latest mobile applications and their impact
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-500 transform hover:scale-105 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-green-500/90 text-white text-sm rounded-full font-medium">
                      {project.status}
                    </span>
                  </div>

                  {/* Quick Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download size={16} />
                        <span className="text-sm">{project.stats.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star size={16} className="text-yellow-400 fill-current" />
                        <span className="text-sm">{project.stats.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={16} />
                        <span className="text-sm">{project.stats.users}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8">
                  {/* Title and Description */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                          <span className="text-sm text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={project.links.demo}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={project.links.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-300"
                    >
                      <Github size={16} />
                      <span>Source</span>
                    </a>
                    <a
                      href={project.links.playstore}
                      className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-white rounded-lg transition-all duration-300"
                    >
                      <Smartphone size={16} />
                      <span>App Store</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-300 mb-6">
              Interested in seeing more of my work?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="font-semibold">Let's Discuss Your Project</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;