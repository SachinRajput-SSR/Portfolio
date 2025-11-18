import { useEffect, useState } from 'react';
import { AlertTriangle, Skull, Zap } from 'lucide-react';

export default function SystemCrash({ onComplete }: { onComplete: () => void }) {
  const [glitchIntensity, setGlitchIntensity] = useState(0);
  const [showError, setShowError] = useState(false);
  const [scanlinePosition, setScanlinePosition] = useState(0);
  const [colorShift, setColorShift] = useState(0);

  useEffect(() => {
    // Intense glitch effect
    const glitchInterval = setInterval(() => {
      setGlitchIntensity(Math.random());
      setColorShift(Math.random() * 10 - 5);
    }, 30);

    // Scanline animation
    const scanlineInterval = setInterval(() => {
      setScanlinePosition(prev => (prev + 2) % 100);
    }, 16);

    // Show error after brief glitch
    setTimeout(() => {
      setShowError(true);
    }, 300);

    // Complete crash sequence
    setTimeout(() => {
      clearInterval(glitchInterval);
      clearInterval(scanlineInterval);
      onComplete();
    }, 2500);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(scanlineInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9998] pointer-events-none">
      {/* RGB Split Glitch overlay */}
      <div
        className="absolute inset-0 mix-blend-screen"
        style={{
          opacity: glitchIntensity * 0.8,
          transform: `translate(${glitchIntensity * 15}px, ${glitchIntensity * 8}px)`,
          filter: `hue-rotate(${colorShift}deg)`,
        }}
      >
        <div className="absolute inset-0 bg-red-500/30" style={{ transform: `translateX(${glitchIntensity * 5}px)` }} />
        <div className="absolute inset-0 bg-green-500/30" style={{ transform: `translateX(${-glitchIntensity * 5}px)` }} />
        <div className="absolute inset-0 bg-blue-500/30" style={{ transform: `translateY(${glitchIntensity * 5}px)` }} />
      </div>

      {/* Horizontal scanlines */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 0, 0, 0.4) 2px, rgba(255, 0, 0, 0.4) 4px)',
          animation: 'scanline 0.08s linear infinite',
        }}
      />

      {/* Vertical scanline sweep */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `linear-gradient(to bottom, transparent ${scanlinePosition}%, rgba(255, 0, 0, 0.6) ${scanlinePosition}%, transparent ${scanlinePosition + 5}%)`,
        }}
      />

      {/* Static noise */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${glitchIntensity * 2}' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Screen distortion bars */}
      {glitchIntensity > 0.7 && (
        <>
          <div
            className="absolute left-0 right-0 h-8 bg-red-500/40"
            style={{
              top: `${Math.random() * 100}%`,
              transform: `translateX(${Math.random() * 20 - 10}px)`,
            }}
          />
          <div
            className="absolute left-0 right-0 h-4 bg-cyan-500/40"
            style={{
              top: `${Math.random() * 100}%`,
              transform: `translateX(${Math.random() * 20 - 10}px)`,
            }}
          />
        </>
      )}

      {/* Error message */}
      {showError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/90 animate-fade-in">
          <div className="max-w-3xl w-full mx-4 p-8 bg-gradient-to-br from-red-950/80 to-black/80 border-2 border-red-500 rounded-lg shadow-2xl shadow-red-500/50 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex gap-2">
                <AlertTriangle className="w-12 h-12 text-red-500 animate-pulse flex-shrink-0" />
                <Skull className="w-12 h-12 text-red-400 animate-bounce flex-shrink-0" />
                <Zap className="w-12 h-12 text-yellow-500 animate-pulse flex-shrink-0" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-red-500 mb-2 font-mono glitch-text animate-pulse" data-text="⚠ CRITICAL SYSTEM FAILURE ⚠">
                  ⚠ CRITICAL SYSTEM FAILURE ⚠
                </h2>
                <p className="text-red-400/90 font-mono text-sm">
                  KERNEL PANIC :: UNAUTHORIZED MEMORY ACCESS DETECTED
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-6 font-mono text-xs text-red-400/80 bg-black/60 p-4 rounded border border-red-500/30">
              <div className="flex gap-2 items-start">
                <span className="text-red-500 font-bold">[FATAL]</span>
                <span>0x8007045D: Unexpected kernel panic in core module</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-red-500 font-bold">[ERROR]</span>
                <span>Memory corruption detected at address 0xDEADBEEF</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-red-500 font-bold">[ERROR]</span>
                <span>Stack overflow in module: reality.sys</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-orange-400 font-bold">[WARN]</span>
                <span>System integrity compromised - initiating emergency protocols</span>
              </div>
              <div className="flex gap-2 items-start">
                <span className="text-yellow-400 font-bold">[ALERT]</span>
                <span>Firewall breach detected - unauthorized access attempt logged</span>
              </div>
              <div className="flex gap-2 items-start mt-4">
                <span className="text-green-400 font-bold">[INFO]</span>
                <span className="text-green-400">Just kidding! System recovering... Welcome to the Matrix 😎</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs text-red-400/70 font-mono mb-1">
                <span>RECOVERY PROGRESS</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-red-950 rounded-full overflow-hidden border border-red-500/30">
                <div className="h-full bg-gradient-to-r from-red-600 via-orange-500 to-green-500 rounded-full animate-pulse shadow-lg shadow-red-500/50" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="mt-6 p-3 bg-black/80 rounded border border-green-500/30">
              <p className="text-center text-green-400 font-mono text-sm animate-pulse">
                ✓ System stabilized. Initializing secure environment...
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}