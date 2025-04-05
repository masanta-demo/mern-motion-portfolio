import { useEffect, useState, useRef, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mousePosition;
};

export const useScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      
      if (scrollHeight) {
        setProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    };

    window.addEventListener('scroll', updateScrollProgress);
    
    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return progress;
};

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverOptions = { threshold: 0.1 }
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return isIntersecting;
};

export const useParallax = (
  ref: RefObject<HTMLElement>,
  speed: number = 0.1
) => {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const scrollTop = window.scrollY;
        const offset = scrollTop * speed;
        ref.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, speed]);
};

// Initialize GSAP smooth scrolling
export const initSmoothScrolling = () => {
  // Setup smooth scrolling for anchor links
  const setupSmoothScrolling = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: targetId,
              offsetY: 70, // Offset for fixed header
            },
            ease: "power3.inOut"
          });
        }
      });
    });
  };

  // Initialize ScrollTrigger for reveal animations
  const initScrollTrigger = () => {
    ScrollTrigger.batch('.reveal', {
      onEnter: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out"
        });
      },
      onLeave: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: "power3.out"
        });
      },
      onEnterBack: (elements) => {
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out"
        });
      },
      onLeaveBack: (elements) => {
        gsap.to(elements, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out"
        });
      }
    });

    // Refresh ScrollTrigger when all content is loaded
    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  };

  // Initialize animations for sections
  const initSectionAnimations = () => {
    // Set up the About section animation
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      ScrollTrigger.create({
        trigger: aboutSection,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(aboutSection, { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out" 
          });
        },
        onLeave: () => {
          gsap.to(aboutSection, { 
            opacity: 0.7, 
            y: -30, 
            duration: 0.8, 
            ease: "power3.out" 
          });
        },
        onEnterBack: () => {
          gsap.to(aboutSection, { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            ease: "power3.out" 
          });
        },
        onLeaveBack: () => {
          gsap.to(aboutSection, { 
            opacity: 0.7, 
            y: 30, 
            duration: 0.8, 
            ease: "power3.out" 
          });
        }
      });
    }

    // Projects section pinning
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      ScrollTrigger.create({
        trigger: projectsSection,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: true,
        markers: false,
        scrub: 0.5,
        anticipatePin: 1,
        onEnter: () => {
          gsap.to(projectsSection, { 
            opacity: 1,
            duration: 0.4,
            ease: "power2.out" 
          });
        }
      });
    }

    // Set up the overlap sections (Skills and Projects)
    gsap.utils.toArray<HTMLElement>('.overlap-section').forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
        onEnter: () => {
          gsap.to(section, { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out" 
          });
        },
        onLeave: () => {
          gsap.to(section, { 
            y: -50, 
            opacity: 0.8, 
            duration: 1, 
            ease: "power3.out" 
          });
        },
        onEnterBack: () => {
          gsap.to(section, { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: "power3.out" 
          });
        },
        onLeaveBack: () => {
          gsap.to(section, { 
            y: 50, 
            opacity: 0, 
            duration: 1, 
            ease: "power3.out" 
          });
        }
      });
    });
  };

  // Call these functions to initialize
  setupSmoothScrolling();
  initScrollTrigger();
  initSectionAnimations();
};
