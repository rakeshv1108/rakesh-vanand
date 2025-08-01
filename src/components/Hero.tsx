import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'React Native Developer',
    'Mobile App Developer',
    'Cross-Platform Expert',
    'UI/UX Enthusiast'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated Profile Image */}
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-spin-slow"></div>
            <div className="absolute inset-2 rounded-full bg-black flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-6xl font-bold text-white">
                RV
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent">
            Rakesh Vanand
          </h1>
          
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-cyan-400 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative mobile experiences with cutting-edge technology.
            Transforming ideas into powerful, user-centric applications.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="flex items-center space-x-2">
                <Download size={20} />
                <span className="font-semibold">Download Resume</span>
              </span>
            </button>
            
            <div className="flex space-x-4">
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Github size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Linkedin size={24} />
              </a>
              <a href="#" className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToNext}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <ChevronDown size={24} className="text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;