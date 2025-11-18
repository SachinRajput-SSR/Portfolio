import { useEffect, useState } from 'react';

export default function CRTEffects() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    // Random glitch effect every 10-20 seconds
    const triggerGlitch = () => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
      
      const nextGlitch = Math.random() * 15000 + 10000;
      setTimeout(triggerGlitch, nextGlitch);
    };

    const timer = setTimeout(triggerGlitch, 15000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Scanlines overlay */}
      <div className="scanlines pointer-events-none fixed inset-0 z-50" />
      
      {/* CRT curvature and vignette */}
      <div className="crt-vignette pointer-events-none fixed inset-0 z-40" />
      
      {/* Flicker effect */}
      <div className="crt-flicker pointer-events-none fixed inset-0 z-30" />
      
      {/* Glitch effect */}
      {glitchActive && (
        <>
          <div className="glitch-overlay pointer-events-none fixed inset-0 z-50 animate-glitch-1" />
          <div className="glitch-overlay pointer-events-none fixed inset-0 z-50 animate-glitch-2" />
        </>
      )}
    </>
  );
}