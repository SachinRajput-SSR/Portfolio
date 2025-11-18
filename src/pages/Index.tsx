import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import GitHubSection from '@/components/GitHubSection';
import CertificationsSection from '@/components/CertificationsSection';
import InternshipsSection from '@/components/InternshipsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import MiniTerminal from '@/components/MiniTerminal';
import CRTEffects from '@/components/CRTEffects';
import HackerLoader from '@/components/HackerLoader';
import SystemCrash from '@/components/SystemCrash';
import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

export default function Index() {
  const [theme, setTheme] = useState<'green' | 'amber' | 'blue'>('green');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showCrash, setShowCrash] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
    // Trigger crash effect 2 seconds after loading
    setTimeout(() => {
      setShowCrash(true);
    }, 2000);
  };

  const handleCrashComplete = () => {
    setShowCrash(false);
    setIsReady(true);
  };

  if (isLoading) {
    return <HackerLoader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className={`min-h-screen theme-${theme} bg-terminal-bg relative overflow-x-hidden`}>
      {showCrash && <SystemCrash onComplete={handleCrashComplete} />}
      
      <CRTEffects />
      
      {/* Background grid pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Binary rain background (subtle) */}
      <div className="fixed inset-0 opacity-25 pointer-events-none overflow-hidden">
        <div className="binary-rain text-terminal-text text-xs">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="binary-column absolute top-0 animate-binary-fall"
              style={{
                left: `${i * 5}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              {Array.from({ length: 50 }).map((_, j) => (
                <div key={j}>{Math.random() > 0.5 ? '1' : '0'}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar theme={theme} onThemeChange={setTheme} />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <GitHubSection />
        <CertificationsSection />
        <InternshipsSection />
        <AchievementsSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="py-8 px-4 border-t border-terminal-text/20">
          <div className="max-w-7xl mx-auto text-center">
            <p className="text-terminal-text font-mono text-sm">
              © 2025 Sarah Mitchell. Built with React, TypeScript & Shadcn-UI
            </p>
            <p className="text-terminal-text/40 font-mono text-xs mt-2">
              System Status: SECURE | Uptime: 99.9% | Last Vulnerability Scan: Today
            </p>
          </div>
        </footer>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && isReady && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-terminal-text/20 backdrop-blur-sm border-2 border-terminal-text text-terminal-text hover:bg-terminal-text hover:text-black rounded-full w-12 h-12 p-0 shadow-lg shadow-terminal-text/30 transition-all hover:scale-110"
          title="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </Button>
      )}

      {/* Mini Terminal (Optional CLI Interface) */}
      {isReady && <MiniTerminal theme={theme} onThemeChange={setTheme} />}
    </div>
  );
}