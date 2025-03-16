
import React, { useRef, useEffect } from "react";
import { useParallax } from "@/utils/animations";

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const backgroundShapeRef = useRef<HTMLDivElement>(null);
  
  useParallax(backgroundShapeRef, 0.03);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden dot-pattern"
    >
      {/* Background Shapes */}
      <div
        ref={backgroundShapeRef}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"
      ></div>
      <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 text-left">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-400">
            Full Stack MERN Developer
          </div>
          
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Building <span className="text-gradient-blue">Digital Experiences</span> with Modern Web Technologies
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            I craft responsive and performant web applications using MongoDB, Express, React, and Node.js, bringing ideas to life with clean code and intuitive design.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-gray-400">Tech Stack:</p>
            <div className="flex gap-5">
              {['MongoDB', 'Express', 'React', 'Node.js'].map((tech, index) => (
                <div 
                  key={tech} 
                  className="flex flex-col items-center"
                  style={{ animationDelay: `${0.9 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 mb-2 hover:bg-white/10 transition-all">
                    <span className={`text-blue-${400 + index * 100}`}>{tech.charAt(0)}</span>
                  </div>
                  <span className="text-xs text-gray-400">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div
          ref={imageRef}
          className="lg:col-span-5 animate-fade-in"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-30 animate-pulse"></div>
            <div className="relative glass rounded-2xl overflow-hidden aspect-square sm:aspect-video lg:aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
              <div className="h-full w-full p-8 flex flex-col items-center justify-center gap-4">
                <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-3/4 h-full bg-blue-500/50 rounded-full"></div>
                </div>
                
                <div className="w-full grid grid-cols-2 gap-4">
                  <div className="h-20 rounded-lg bg-white/5 border border-white/10"></div>
                  <div className="h-20 rounded-lg bg-white/5 border border-white/10"></div>
                  <div className="h-20 rounded-lg bg-white/5 border border-white/10"></div>
                  <div className="h-20 rounded-lg bg-white/5 border border-white/10"></div>
                </div>
                
                <div className="w-full h-4 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-1/2 h-full bg-blue-500/50 rounded-full"></div>
                </div>
                
                <div className="absolute -bottom-4 right-10 w-20 h-20 rounded-full bg-blue-500/30 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-white opacity-50 hover:opacity-100 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
