
import React, { useRef } from "react";
import SectionTransition from "@/components/ui/SectionTransition";

const About: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="py-20 relative overflow-hidden dot-pattern">
      <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <SectionTransition>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center">
            About <span className="text-gradient-blue">Me</span>
          </h2>
          <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            A passionate full-stack developer specializing in building exceptional digital experiences
          </p>
        </SectionTransition>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <SectionTransition className="lg:col-span-5" animation="slide-in-left">
            <div ref={imageRef} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-20"></div>
              <div className="relative glass rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent"></div>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    <div className="ml-auto font-mono text-xs text-gray-400">about.js</div>
                  </div>
                  
                  <div className="flex-1 font-mono text-xs md:text-sm text-left">
                    <p className="text-gray-400">
                      <span className="text-blue-400">const</span> <span className="text-green-400">developer</span> = {"{"}
                    </p>
                    <p className="pl-4 text-gray-400">
                      <span className="text-blue-400">name:</span> <span className="text-yellow-300">'John Doe'</span>,
                    </p>
                    <p className="pl-4 text-gray-400">
                      <span className="text-blue-400">title:</span> <span className="text-yellow-300">'Full Stack Developer'</span>,
                    </p>
                    <p className="pl-4 text-gray-400">
                      <span className="text-blue-400">location:</span> <span className="text-yellow-300">'New York, USA'</span>,
                    </p>
                    <p className="pl-4 text-gray-400">
                      <span className="text-blue-400">skills:</span> ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Tailwind CSS"],
                    </p>
                    <p className="pl-4 text-gray-400">
                      <span className="text-blue-400">experience:</span> <span className="text-orange-400">5</span>,
                    </p>
                    <p className="pl-4 text-gray-400">
                      <span className="text-blue-400">education:</span> <span className="text-yellow-300">'Bachelor of Computer Science'</span>,
                    </p>
                    <p className="pl-4 text-gray-400">
                      <span className="text-blue-400">interests:</span> ["Web Development", "UI/UX Design", "Open Source"],
                    </p>
                    <p className="text-gray-400">{"}"}</p>
                    <p className="mt-3 text-gray-400">
                      <span className="text-blue-400">export default</span> developer;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionTransition>
          
          <SectionTransition className="lg:col-span-7 text-left" animation="slide-in-right">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Full Stack MERN Developer
            </h3>
            
            <p className="text-gray-400 mb-4">
              I'm a passionate full stack developer with expertise in the MERN stack, creating modern web applications that combine aesthetics with functionality. My journey in web development started over 5 years ago, and I've been building digital experiences ever since.
            </p>
            
            <p className="text-gray-400 mb-6">
              I specialize in developing responsive, performant, and accessible web applications that provide exceptional user experiences. From database design to server-side logic and front-end interfaces, I handle all aspects of the development process with attention to detail and best practices.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>MongoDB & Express Backend</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>React & Redux Frontend</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>Node.js & RESTful APIs</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>Responsive & Accessible Design</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>TypeScript & JavaScript</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span>CI/CD & DevOps</span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and mentoring. I believe in continuous learning and staying updated with the latest industry trends.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 transform hover:-translate-y-0.5"
              >
                View My Work
              </a>
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default About;
