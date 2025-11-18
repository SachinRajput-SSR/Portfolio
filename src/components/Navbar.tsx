import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Monitor } from 'lucide-react';

interface NavbarProps {
  theme: 'green' | 'amber' | 'blue';
  onThemeChange: (theme: 'green' | 'amber' | 'blue') => void;
}

export default function Navbar({ theme, onThemeChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const triggerGlitch = () => {
    setGlitchActive(true);
    setTimeout(() => setGlitchActive(false), 200);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'github', label: 'GitHub' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'internships', label: 'Internships' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md shadow-lg shadow-terminal-text/10' : 'bg-transparent'
      } ${glitchActive ? 'animate-glitch-1' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            onMouseEnter={triggerGlitch}
            className="text-terminal-text font-bold text-xl flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Monitor className="w-6 h-6" />
            <span className="glitch-text" data-text="SachinSinghTanwar">
              SachinSinghTanwar
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-terminal-text hover:text-terminal-text/80 transition-colors relative group text-sm"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 bg-terminal-text/10 scale-0 group-hover:scale-100 transition-transform rounded" />
              </button>
            ))}

            {/* Theme Switcher */}
            <div className="flex items-center gap-2 ml-4">
              {(['green', 'amber', 'blue'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => onThemeChange(t)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    theme === t
                      ? 'border-terminal-text scale-110'
                      : 'border-terminal-text/30 hover:border-terminal-text/60'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${
                      t === 'green'
                        ? '#00ff00, #00aa00'
                        : t === 'amber'
                        ? '#ffb000, #ff8800'
                        : '#00d4ff, #0088ff'
                    })`,
                  }}
                  title={`${t} theme`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-terminal-text p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-terminal-text/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-terminal-text hover:bg-terminal-text/10 px-4 py-2 rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="flex items-center gap-3 px-4 py-2">
              <span className="text-terminal-text text-sm">Theme:</span>
              {(['green', 'amber', 'blue'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => onThemeChange(t)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    theme === t ? 'border-terminal-text scale-110' : 'border-terminal-text/30'
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${
                      t === 'green'
                        ? '#00ff00, #00aa00'
                        : t === 'amber'
                        ? '#ffb000, #ff8800'
                        : '#00d4ff, #0088ff'
                    })`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}