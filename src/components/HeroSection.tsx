import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Code, Shield, Download } from 'lucide-react';
import { useCountUp } from '@/hooks/useCountUp';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const fullText = 'CYBERSECURITY STUDENT';

  const projectsCount = useCountUp(15, 2000);
  const yearsCount = useCountUp(2, 2000);
  const techCount = useCountUp(20, 2000);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  useEffect(() => {
    // Trigger count animations after a delay
    const timer = setTimeout(() => {
      projectsCount.setIsActive(true);
      yearsCount.setIsActive(true);
      techCount.setIsActive(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  const handleDownloadResume = () => {
    // Create a dummy resume download
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1QPGwR7YGfl0PRrLZjE2MsQO077suiI9x';
    link.download = 'Sachin_Singh_Tanwar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const parallaxOffset = {
    x: (mousePosition.x - window.innerWidth / 2) / 50,
    y: (mousePosition.y - window.innerHeight / 2) / 50,
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20">
      {/* Animated background elements with parallax */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-terminal-text rounded-full blur-3xl animate-pulse"
          style={{
            transform: `translate(${parallaxOffset.x}px, ${parallaxOffset.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-terminal-text rounded-full blur-3xl animate-pulse" 
          style={{ 
            animationDelay: '1s',
            transform: `translate(${-parallaxOffset.x}px, ${-parallaxOffset.y}px)`,
            transition: 'transform 0.3s ease-out',
          }} 
        />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* ASCII Art Header */}
        <pre className="text-terminal-text text-xs md:text-sm mb-8 opacity-70 hidden md:block animate-in fade-in duration-1000">
{`
  ____  _____ ____ _   _ ____  ___ _______   __
 / ___|| ____/ ___| | | |  _ \\|_ _|_   _\\ \\ / /
 \\___ \\|  _|| |   | | | | |_) || |  | |  \\ V / 
  ___) | |__| |___| |_| |  _ < | |  | |   | |  
 |____/|_____\\____|\\___/|_| \\_\\___| |_|   |_|  
`}
        </pre>

        {/* Main Title with Glitch Effect */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 glitch-text-hero animate-in slide-in-from-bottom duration-1000" data-text="SACHIN SINGH TANWAR">
          <span className="text-terminal-text">SACHIN SINGH TANWAR</span>
        </h1>

        {/* Typing Animation Subtitle */}
        <div className="text-xl md:text-2xl lg:text-3xl mb-8 font-mono h-12 flex items-center justify-center animate-in fade-in duration-1000 delay-300">
          <span className="text-terminal-text">{displayText}</span>
          <span className="inline-block w-3 h-6 bg-terminal-text ml-1 animate-blink" />
        </div>

        {/* Description */}
        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-in fade-in duration-1000 delay-500">
          Passionate about ethical hacking, penetration testing, and building secure systems.
          Defending the digital world one vulnerability at a time.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-in fade-in duration-1000 delay-700">
          <Button
            onClick={() => scrollToSection('projects')}
            className="group relative overflow-hidden bg-terminal-text text-black hover:bg-terminal-text/90 px-8 py-6 text-lg font-bold transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Security Projects
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
          </Button>

          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-2 border-terminal-text text-terminal-text hover:bg-terminal-text hover:text-black px-8 py-6 text-lg font-bold transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              Get In Touch
            </span>
          </Button>
          <Button
            onClick={handleDownloadResume}
            variant="outline"
            className="border-2 border-terminal-text/50 text-terminal-text hover:bg-terminal-text/10 px-8 py-6 text-lg font-bold transition-all hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <Download className="w-5-h-5" />
              Download CV
            </span>
          </Button>
        </div>

        {/* Stats with animated counters */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto animate-in fade-in duration-1000 delay-1000">
          {[
            { icon: Shield, label: 'Security Projects', value: projectsCount.count, suffix: '+' },
            { icon: Code, label: 'Experience', value: yearsCount.count, suffix: '+ Years' },
            { icon: Terminal, label: 'Tools Mastered', value: techCount.count, suffix: '+' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group p-4 md:p-6 border border-terminal-text/30 rounded-lg hover:border-terminal-text hover:bg-terminal-text/5 transition-all hover:scale-105 cursor-default"
            >
              <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-terminal-text mx-auto mb-2 group-hover:animate-pulse" />
              <div className="text-2xl md:text-3xl font-bold text-terminal-text mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
