
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

interface LayoutProps {
  children: React.ReactNode;
  showParticles?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showParticles = false }) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {showParticles && (
        <ParticleBackground 
          particleCount={40}
          particleColors={["#1EAEDB", "#0FA0CE", "#33C3F0", "#FFFFFF"]}
          linkDistance={150}
        />
      )}
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
