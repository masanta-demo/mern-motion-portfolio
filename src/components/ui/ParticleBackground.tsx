
import React, { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  originalSize: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  particleColors?: string[];
  minSize?: number;
  maxSize?: number;
  speed?: number;
  linkDistance?: number;
  linkWidth?: number;
  linkOpacity?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 50,
  particleColors = ["#1EAEDB", "#FFFFFF"],
  minSize = 1,
  maxSize = 3,
  speed = 0.5,
  linkDistance = 150,
  linkWidth = 0.5,
  linkOpacity = 0.15,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>(0);
  const mouse = useRef({ x: 0, y: 0, active: false });

  // Create particles
  const createParticles = (canvas: HTMLCanvasElement) => {
    particles.current = [];
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * (maxSize - minSize) + minSize;
      particles.current.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size,
        originalSize: size,
        speedX: (Math.random() - 0.5) * speed,
        speedY: (Math.random() - 0.5) * speed,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
      });
    }
  };

  // Draw particles and connections
  const drawParticles = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw each particle
    particles.current.forEach((particle, index) => {
      // Update position
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > canvas.width) {
        particle.speedX *= -1;
      }
      if (particle.y < 0 || particle.y > canvas.height) {
        particle.speedY *= -1;
      }
      
      // Calculate distance from mouse for hover effect
      if (mouse.current.active) {
        const mouseDistance = Math.sqrt(
          (particle.x - mouse.current.x) ** 2 + (particle.y - mouse.current.y) ** 2
        );
        
        // Increase size when mouse is near
        const interactionDistance = 200;
        if (mouseDistance < interactionDistance) {
          // Scale between 1-3x original size based on proximity
          const scaleFactor = 1 + (2 * (1 - mouseDistance / interactionDistance));
          particle.size = particle.originalSize * scaleFactor;
        } else {
          // Reset to original size when mouse is far
          particle.size = particle.originalSize;
        }
      } else {
        particle.size = particle.originalSize;
      }
      
      // Draw particle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = particle.color;
      ctx.fill();
      
      // Connect particles
      for (let j = index + 1; j < particles.current.length; j++) {
        const otherParticle = particles.current[j];
        const dx = particle.x - otherParticle.x;
        const dy = particle.y - otherParticle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < linkDistance) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(otherParticle.x, otherParticle.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${linkOpacity * (1 - distance / linkDistance)})`;
          ctx.lineWidth = linkWidth;
          ctx.stroke();
        }
      }
      
      // Connect to mouse if close enough and mouse is active
      if (mouse.current.active) {
        const mouseDistance = Math.sqrt(
          (particle.x - mouse.current.x) ** 2 + (particle.y - mouse.current.y) ** 2
        );
        
        if (mouseDistance < linkDistance * 1.5) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.strokeStyle = `rgba(30, 174, 219, ${linkOpacity * 2 * (1 - mouseDistance / (linkDistance * 1.5))})`;
          ctx.lineWidth = linkWidth * 2;
          ctx.stroke();
          
          // Attract particles to mouse more strongly
          particle.x += (mouse.current.x - particle.x) * 0.03;
          particle.y += (mouse.current.y - particle.y) * 0.03;
        }
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles(canvas);
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);
    
    // Track mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY, active: true };
    };
    
    const handleMouseLeave = () => {
      mouse.current = { ...mouse.current, active: false };
    };
    
    const handleMouseEnter = () => {
      mouse.current = { ...mouse.current, active: true };
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    
    // Animation loop
    const animate = () => {
      drawParticles(ctx, canvas);
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [particleCount, particleColors, minSize, maxSize, speed, linkDistance, linkWidth, linkOpacity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default ParticleBackground;
