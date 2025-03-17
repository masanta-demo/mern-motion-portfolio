
import React, { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import CustomCursor from "@/components/ui/CustomCursor";
import ParticleBackground from "@/components/ui/ParticleBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

const Index = () => {
  // Reveal animation for elements when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col cursor-none bg-background text-white">
      <CustomCursor />
      <ParticleBackground 
        particleCount={80}
        particleColors={["#1EAEDB", "#0FA0CE", "#33C3F0", "#FFFFFF"]}
        linkDistance={150}
      />
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © {new Date().getFullYear()} <span className="text-white">MernDev</span>. All rights reserved.
          </p>
          <p className="text-gray-400">
            Designed & Built with <span className="text-red-500">♥</span> using React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
