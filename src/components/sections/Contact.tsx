
import React, { useState, useEffect, useRef } from "react";
import SectionTransition from "@/components/ui/SectionTransition";
import { useIntersectionObserver } from "@/utils/animations";
import gsap from "gsap";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useIntersectionObserver(formRef, { threshold: 0.3 });
  
  useEffect(() => {
    if (isInView && formRef.current) {
      // Make sure the content is fully visible before animations start
      gsap.set(formRef.current, { opacity: 1, visibility: "visible" });
      
      gsap.fromTo(
        formRef.current.querySelectorAll('.form-element'),
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.1, 
          duration: 0.6, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%", // Start animation when top of element reaches 80% from the top of viewport
            toggleActions: "play none none none"
          }
        }
      );
    }
  }, [isInView]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden z-10">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-blue-950/20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-20 -left-32 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
        <SectionTransition>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 text-center">
            Let's <span className="text-gradient-blue">Connect</span>
          </h2>
          <p className="text-lg text-gray-400 mb-16 text-center max-w-3xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration? Reach out and let's create something amazing together.
          </p>
        </SectionTransition>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <SectionTransition className="lg:col-span-2 order-2 lg:order-1" animation="slide-in-left">
            <div className="glass rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gradient-blue">Get in Touch</h3>
                <p className="text-gray-400 mb-6">Looking forward to hearing from you! Feel free to reach out through any of these channels:</p>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-400 flex-shrink-0 backdrop-blur-sm border border-blue-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-400 flex-shrink-0 backdrop-blur-sm border border-blue-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300">hello@merndev.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/20 text-blue-400 flex-shrink-0 backdrop-blur-sm border border-blue-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-300">New York, NY, USA</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <h4 className="text-xl font-medium mb-4 text-white">Connect With Me</h4>
                <div className="flex gap-4">
                  {[
                    { name: "GitHub", icon: "github" },
                    { name: "LinkedIn", icon: "linkedin" },
                    { name: "Twitter", icon: "twitter" },
                    { name: "CodePen", icon: "codepen" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/30 text-blue-400 transition-all duration-300 backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/40"
                      aria-label={social.name}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {social.icon === "github" && (
                          <>
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                          </>
                        )}
                        {social.icon === "linkedin" && (
                          <>
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                          </>
                        )}
                        {social.icon === "twitter" && (
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        )}
                        {social.icon === "codepen" && (
                          <>
                            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                            <line x1="12" y1="22" x2="12" y2="15.5" />
                            <polyline points="22 8.5 12 15.5 2 8.5" />
                            <polyline points="2 15.5 12 8.5 22 15.5" />
                            <line x1="12" y1="2" x2="12" y2="8.5" />
                          </>
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </SectionTransition>
          
          <SectionTransition className="lg:col-span-3 order-1 lg:order-2" animation="slide-in-right">
            <div className="glass rounded-2xl p-8 backdrop-blur-lg border border-white/10">
              <h3 className="text-2xl font-bold mb-8 inline-flex items-center">
                <span className="text-gradient-blue mr-2">Send a Message</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400">
                  <path d="m3 3 3 9-3 9 19-9Z"></path>
                  <path d="M6 12h16"></path>
                </svg>
              </h3>
              
              {submitSuccess ? (
                <div className="p-8 bg-blue-500/20 rounded-xl border border-blue-500/30 mb-6 backdrop-blur-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-4 text-blue-400">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <h4 className="text-2xl font-medium mb-4 text-center text-white">Message Sent Successfully!</h4>
                  <p className="text-gray-300 text-center">
                    Thank you for your message. I'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" ref={formRef}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-element">
                      <Label htmlFor="name" className="text-sm font-medium mb-2 text-gray-300 block">
                        Your Name
                      </Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 focus:ring-blue-500/50 focus:border-blue-500/50 text-white"
                        placeholder="Enter your name"
                      />
                    </div>
                    
                    <div className="form-element">
                      <Label htmlFor="email" className="text-sm font-medium mb-2 text-gray-300 block">
                        Your Email
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white/5 border-white/10 focus:ring-blue-500/50 focus:border-blue-500/50 text-white"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div className="form-element">
                    <Label htmlFor="subject" className="text-sm font-medium mb-2 text-gray-300 block">
                      Subject
                    </Label>
                    <Input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:ring-blue-500/50 focus:border-blue-500/50 text-white"
                      placeholder="What is this regarding?"
                    />
                  </div>
                  
                  <div className="form-element">
                    <Label htmlFor="message" className="text-sm font-medium mb-2 text-gray-300 block">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-white/5 border-white/10 focus:ring-blue-500/50 focus:border-blue-500/50 text-white w-full resize-none"
                      placeholder="Your message here..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 flex items-center justify-center form-element ${
                      isSubmitting 
                        ? "bg-blue-600/50" 
                        : "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </SectionTransition>
        </div>
      </div>
    </section>
  );
};

export default Contact;
