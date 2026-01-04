import { useEffect, useState } from 'react';

const Particle = ({ delay, left, size }: { delay: number; left: number; size: number }) => (
  <div
    className="absolute rounded-full animate-particle"
    style={{
      left: `${left}%`,
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle, hsl(var(--accent) / 0.8), transparent)`,
      animationDelay: `${delay}s`,
      filter: 'blur(1px)',
    }}
  />
);

const SacredGeometry = ({ className, type }: { className: string; type: 'hexagram' | 'flower' }) => {
  if (type === 'hexagram') {
    return (
      <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon 
          points="50,10 90,75 10,75" 
          stroke="hsl(var(--primary) / 0.2)" 
          strokeWidth="0.5" 
          fill="none"
        />
        <polygon 
          points="50,90 10,25 90,25" 
          stroke="hsl(var(--primary) / 0.2)" 
          strokeWidth="0.5" 
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <circle
          key={angle}
          cx={50 + 20 * Math.cos((angle * Math.PI) / 180)}
          cy={50 + 20 * Math.sin((angle * Math.PI) / 180)}
          r="20"
          stroke="hsl(var(--accent) / 0.15)"
          strokeWidth="0.5"
          fill="none"
        />
      ))}
      <circle cx="50" cy="50" r="20" stroke="hsl(var(--accent) / 0.2)" strokeWidth="0.5" fill="none" />
    </svg>
  );
};

export const MysticBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; left: number; size: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradient orbs */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)',
          filter: 'blur(60px)',
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent) / 0.1), transparent 70%)',
          filter: 'blur(50px)',
          animationDelay: '1.5s',
        }}
      />

      {/* Sacred geometry */}
      <SacredGeometry 
        type="hexagram" 
        className="absolute top-20 right-10 w-32 h-32 opacity-30 animate-float hidden md:block" 
      />
      <SacredGeometry 
        type="flower" 
        className="absolute bottom-40 left-10 w-40 h-40 opacity-20 animate-float-slow hidden md:block" 
      />
      <SacredGeometry 
        type="hexagram" 
        className="absolute top-1/2 left-1/4 w-24 h-24 opacity-20 animate-float hidden lg:block" 
        
      />

      {/* Particles */}
      {particles.map((p) => (
        <Particle key={p.id} delay={p.delay} left={p.left} size={p.size} />
      ))}
    </div>
  );
};
