import { useEffect, useState } from 'react';

export default function HackerLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [currentLine, setCurrentLine] = useState(0);

  const bootSequence = [
    'INITIALIZING SYSTEM...',
    'LOADING KERNEL MODULES...',
    'MOUNTING FILE SYSTEMS...',
    'STARTING NETWORK SERVICES...',
    'INITIALIZING SECURITY PROTOCOLS...',
    'LOADING USER INTERFACE...',
    'SYSTEM READY.',
  ];

  useEffect(() => {
    const lineInterval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev < bootSequence.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 150);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(lineInterval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 4;
      });
    }, 30);

    return () => {
      clearInterval(lineInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
      {/* Matrix rain background */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-terminal-text text-xs font-mono animate-binary-fall"
            style={{
              left: `${i * 3.33}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          >
            {Array.from({ length: 50 }).map((_, j) => (
              <div key={j} className="opacity-70">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Boot sequence */}
      <div className="relative z-10 max-w-3xl w-full px-8">
        <div className="mb-8">
          <div className="text-terminal-text font-mono text-sm mb-2">
            <span className="text-green-400">root@portfolio</span>
            <span className="text-white">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-white">$ </span>
            <span className="animate-pulse">_</span>
          </div>
          
          <div className="space-y-1 mb-6">
            {bootSequence.slice(0, currentLine + 1).map((line, index) => (
              <div
                key={index}
                className="text-terminal-text/80 font-mono text-sm animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-green-400">[OK]</span> {line}
              </div>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-terminal-text/70 font-mono text-xs">
                LOADING PORTFOLIO
              </span>
              <span className="text-terminal-text/70 font-mono text-xs">
                {progress}%
              </span>
            </div>
            <div className="h-2 bg-terminal-text/10 rounded-full overflow-hidden border border-terminal-text/30">
              <div
                className="h-full bg-terminal-text transition-all duration-100 rounded-full"
                style={{
                  width: `${progress}%`,
                  boxShadow: '0 0 10px var(--terminal-glow)',
                }}
              />
            </div>
          </div>

          {/* Blinking cursor */}
          <div className="mt-4 text-terminal-text font-mono text-sm">
            <span className="animate-pulse">▋</span>
          </div>
        </div>
      </div>
    </div>
  );
}