import React from 'react';
import { Code, Heart, Zap, Target } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Creating intuitive and delightful user experiences"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing apps for speed and smooth performance"
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Focused on delivering results that matter"
    }
  ];

  return (
    <section id="about" className="py-20 relative z-10">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="prose prose-lg text-gray-300 space-y-4">
                <p className="text-lg leading-relaxed">
                  I'm a passionate React Native developer with a strong foundation in mobile app development.
                  My journey in tech has been driven by curiosity and a genuine love for creating applications
                  that make a difference in people's lives.
                </p>
                
                <p className="text-lg leading-relaxed">
                  With expertise in cross-platform development, I specialize in building high-performance
                  mobile applications that deliver exceptional user experiences across iOS and Android platforms.
                  I believe in writing clean, maintainable code and staying up-to-date with the latest
                  industry trends and best practices.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">6+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-white/5 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Right Content - Highlights */}
            <div className="space-y-6">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start space-x-4 p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 animate-fade-in-right`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-500/30">
                        <Icon size={24} className="text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {highlight.title}
                      </h3>
                      <p className="text-gray-300">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;