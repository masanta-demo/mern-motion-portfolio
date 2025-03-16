
import React from "react";
import SectionTransition from "@/components/ui/SectionTransition";

interface Skill {
  category: string;
  items: string[];
  icon: JSX.Element;
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Redux", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI", "Styled Components"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    ),
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "MongoDB", "Mongoose", "RESTful APIs", "GraphQL", "JWT", "OAuth", "Socket.io"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15h-6v4H8v-7H6v-3h12v6Z"></path>
        <path d="m12 19-4-4 4-4m-6-5h12"></path>
      </svg>
    ),
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "VS Code", "Webpack", "Babel", "Jest", "Docker", "AWS", "Netlify", "Vercel"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
      </svg>
    ),
  },
  {
    category: "Other",
    items: ["UI/UX Design", "Responsive Design", "Accessibility", "Performance Optimization", "SEO", "Progressive Web Apps", "Cross-Browser Compatibility"],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    ),
  },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 relative overflow-hidden dot-pattern">
      <div className="absolute top-40 -right-20 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <SectionTransition>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center">
            Technical <span className="text-gradient-blue">Skills</span>
          </h2>
          <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            The technologies and tools I work with to bring projects to life
          </p>
        </SectionTransition>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SectionTransition
              key={skill.category}
              delay={index * 100}
              animation={index % 2 === 0 ? "slide-in-left" : "slide-in-right"}
            >
              <div className="glass rounded-xl p-6 h-full transition-transform duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-blue-500/20 mr-4 text-blue-400">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-bold">{skill.category}</h3>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </SectionTransition>
          ))}
        </div>

        <SectionTransition delay={200}>
          <div className="mt-16 glass rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">My Development Process</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "Plan",
                  description: "Define requirements, create wireframes, and plan architecture",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  )
                },
                {
                  step: "Design",
                  description: "Create UI/UX design, responsive layouts, and component structure",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  )
                },
                {
                  step: "Develop",
                  description: "Build frontend and backend with clean, efficient, and well-documented code",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  )
                },
                {
                  step: "Deploy",
                  description: "Test, optimize, and deploy with monitoring and performance tracking",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 16 12 12 8 16"></polyline>
                      <line x1="12" y1="12" x2="12" y2="21"></line>
                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                    </svg>
                  )
                }
              ].map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="relative mx-auto">
                    {index > 0 && (
                      <div className="hidden md:block absolute top-1/2 -left-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                    )}
                    <div className="relative w-14 h-14 mx-auto rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 z-10">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mt-4 mb-2">{item.step}</h4>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionTransition>
      </div>
    </section>
  );
};

export default Skills;
