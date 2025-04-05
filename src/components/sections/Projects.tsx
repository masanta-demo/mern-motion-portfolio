
import React, { useState, useEffect, useRef } from "react";
import SectionTransition from "@/components/ui/SectionTransition";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
  category: "featured" | "frontend" | "fullstack" | "other";
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product management, user authentication, shopping cart, and payment processing using Stripe.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='none'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Crect x='100' y='100' width='600' height='400' rx='8' fill='%23374151'/%3E%3Crect x='150' y='150' width='500' height='80' rx='4' fill='%231E40AF'/%3E%3Crect x='150' y='250' width='150' height='200' rx='4' fill='%232563EB'/%3E%3Crect x='320' y='250' width='150' height='200' rx='4' fill='%232563EB'/%3E%3Crect x='490' y='250' width='150' height='200' rx='4' fill='%232563EB'/%3E%3C/svg%3E",
    tags: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    link: "#",
    github: "#",
    category: "featured",
  },
  {
    title: "Social Media Dashboard",
    description: "A responsive dashboard for social media management with analytics, content scheduling, and performance tracking.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='none'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Crect x='100' y='100' width='600' height='400' rx='8' fill='%23374151'/%3E%3Crect x='130' y='130' width='200' height='340' rx='4' fill='%231E40AF'/%3E%3Crect x='350' y='130' width='320' height='160' rx='4' fill='%232563EB'/%3E%3Crect x='350' y='310' width='150' height='160' rx='4' fill='%232563EB'/%3E%3Crect x='520' y='310' width='150' height='160' rx='4' fill='%232563EB'/%3E%3C/svg%3E",
    tags: ["React", "Redux", "Chart.js", "Tailwind CSS", "APIs"],
    link: "#",
    github: "#",
    category: "frontend",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignments, and progress tracking.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='none'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Crect x='100' y='100' width='600' height='400' rx='8' fill='%23374151'/%3E%3Crect x='130' y='150' width='200' height='50' rx='4' fill='%232563EB'/%3E%3Crect x='130' y='220' width='200' height='50' rx='4' fill='%232563EB'/%3E%3Crect x='130' y='290' width='200' height='50' rx='4' fill='%232563EB'/%3E%3Crect x='130' y='360' width='200' height='50' rx='4' fill='%232563EB'/%3E%3Crect x='350' y='150' width='320' height='260' rx='4' fill='%231E40AF'/%3E%3C/svg%3E",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    link: "#",
    github: "#",
    category: "fullstack",
  },
  {
    title: "Weather Dashboard",
    description: "A weather information dashboard with forecast data, interactive maps, and location-based services.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='none'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Crect x='100' y='100' width='600' height='400' rx='8' fill='%23374151'/%3E%3Ccircle cx='250' cy='200' r='80' fill='%232563EB'/%3E%3Crect x='400' y='150' width='200' height='30' rx='4' fill='%231E40AF'/%3E%3Crect x='400' y='200' width='250' height='30' rx='4' fill='%231E40AF'/%3E%3Crect x='150' y='300' width='500' height='150' rx='4' fill='%232563EB'/%3E%3C/svg%3E",
    tags: ["React", "Weather API", "Geolocation", "Chart.js"],
    link: "#",
    github: "#",
    category: "frontend",
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application with workout plans, progress monitoring, and nutritional guidance.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='none'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Crect x='100' y='100' width='600' height='400' rx='8' fill='%23374151'/%3E%3Crect x='150' y='150' width='200' height='300' rx='4' fill='%232563EB'/%3E%3Crect x='370' y='150' width='280' height='140' rx='4' fill='%231E40AF'/%3E%3Crect x='370' y='310' width='280' height='140' rx='4' fill='%231E40AF'/%3E%3C/svg%3E",
    tags: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    link: "#",
    github: "#",
    category: "fullstack",
  },
  {
    title: "Blog Platform",
    description: "A content management system for bloggers with markdown support, categories, tags, and comment functionality.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' fill='none'%3E%3Crect width='800' height='600' fill='%23111827'/%3E%3Crect x='100' y='100' width='600' height='400' rx='8' fill='%23374151'/%3E%3Crect x='150' y='150' width='500' height='100' rx='4' fill='%232563EB'/%3E%3Crect x='150' y='270' width='500' height='30' rx='4' fill='%231E40AF'/%3E%3Crect x='150' y='320' width='500' height='30' rx='4' fill='%231E40AF'/%3E%3Crect x='150' y='370' width='500' height='30' rx='4' fill='%231E40AF'/%3E%3C/svg%3E",
    tags: ["React", "Node.js", "Express", "MongoDB", "Markdown"],
    link: "#",
    github: "#",
    category: "fullstack",
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "featured" | "frontend" | "fullstack" | "other">("all");
  const sectionRef = useRef<HTMLElement>(null);

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative overflow-hidden dot-pattern" ref={sectionRef}>
      <div className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <SectionTransition>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center">
            My <span className="text-gradient-blue">Projects</span>
          </h2>
          <p className="text-lg text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            A showcase of my recent work, personal projects, and experiments
          </p>
        </SectionTransition>
        
        <SectionTransition delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["all", "featured", "frontend", "fullstack", "other"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as any)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-500 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </SectionTransition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <SectionTransition key={project.title} delay={index * 100} resetOnLeave={false}>
              <div className="glass rounded-xl overflow-hidden transition-all duration-300 hover:translate-y-[-5px] hover:shadow-lg hover:shadow-blue-500/10 group">
                <div className="relative aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-500/10 rounded-full text-xs text-blue-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-full transition-all duration-300 flex-1 text-center"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-medium rounded-full transition-all duration-300 flex-1 text-center"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>
        
        <SectionTransition delay={300} resetOnLeave={false}>
          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-6">
              These are just a few examples of my work. Visit my GitHub for more projects.
            </p>
            <a
              href="#"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all duration-300 inline-flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
              View All Projects on GitHub
            </a>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default Projects;
