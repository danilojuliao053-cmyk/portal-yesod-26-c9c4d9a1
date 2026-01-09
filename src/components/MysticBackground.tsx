import { useEffect, useState } from 'react';
import { useParallax } from '@/hooks/use-parallax';

const Particle = ({ delay, left, size, speed }: { delay: number; left: number; size: number; speed: number }) => {
  const parallaxOffset = useParallax(speed);
  
  return (
    <div
      className="absolute rounded-full animate-particle"
      style={{
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, hsl(var(--accent) / 0.8), transparent)`,
        animationDelay: `${delay}s`,
        filter: 'blur(1px)',
        transform: `translateY(${parallaxOffset}px)`,
      }}
    />
  );
};

const SacredGeometry = ({ className, type, parallaxSpeed }: { className: string; type: 'hexagram' | 'flower'; parallaxSpeed: number }) => {
  const parallaxOffset = useParallax(parallaxSpeed);
  
  if (type === 'hexagram') {
    return (
      <svg 
        className={className} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
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
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
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

// Floating orb with parallax
const ParallaxOrb = ({ 
  className, 
  gradient, 
  blur, 
  parallaxSpeed 
}: { 
  className: string; 
  gradient: string; 
  blur: number;
  parallaxSpeed: number;
}) => {
  const parallaxOffset = useParallax(parallaxSpeed);
  
  return (
    <div 
      className={className}
      style={{
        background: gradient,
        filter: `blur(${blur}px)`,
        transform: `translateY(${parallaxOffset}px)`,
      }}
    />
  );
};

// Grid lines with parallax
const ParallaxGrid = () => {
  const parallaxOffset = useParallax(0.05);
  
  return (
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{ transform: `translateY(${parallaxOffset}px)` }}
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
    </div>
  );
};

// Nebula cloud effect
const NebulaCloud = ({ 
  className, 
  color, 
  parallaxSpeed 
}: { 
  className: string; 
  color: string;
  parallaxSpeed: number;
}) => {
  const parallaxOffset = useParallax(parallaxSpeed);
  
  return (
    <div 
      className={`absolute rounded-full ${className}`}
      style={{
        background: `radial-gradient(ellipse, ${color}, transparent 70%)`,
        filter: 'blur(80px)',
        transform: `translateY(${parallaxOffset}px) rotate(${parallaxOffset * 0.02}deg)`,
      }}
    />
  );
};

export const MysticBackground = () => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; left: number; size: number; speed: number }>>([]);
  const slowParallax = useParallax(0.08);
  const mediumParallax = useParallax(0.15);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      delay: Math.random() * 15,
      left: Math.random() * 100,
      size: Math.random() * 4 + 2,
      speed: 0.02 + Math.random() * 0.1, // Varied parallax speeds
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Deep background layer - slowest parallax */}
      <ParallaxGrid />
      
      {/* Nebula clouds - slow parallax */}
      <NebulaCloud 
        className="w-[600px] h-[400px] -top-20 -left-40"
        color="hsl(var(--primary) / 0.08)"
        parallaxSpeed={0.03}
      />
      <NebulaCloud 
        className="w-[500px] h-[500px] top-1/3 -right-32"
        color="hsl(var(--accent) / 0.06)"
        parallaxSpeed={0.05}
      />
      <NebulaCloud 
        className="w-[700px] h-[350px] bottom-0 left-1/4"
        color="hsl(280 70% 50% / 0.05)"
        parallaxSpeed={0.04}
      />

      {/* Gradient orbs - medium parallax */}
      <ParallaxOrb
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full animate-pulse-glow"
        gradient="radial-gradient(circle, hsl(var(--primary) / 0.18), transparent 70%)"
        blur={60}
        parallaxSpeed={0.12}
      />
      <ParallaxOrb
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-pulse-glow"
        gradient="radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 70%)"
        blur={50}
        parallaxSpeed={0.18}
      />
      <ParallaxOrb
        className="absolute top-1/2 left-10 w-64 h-64 rounded-full animate-pulse-glow"
        gradient="radial-gradient(circle, hsl(280 70% 50% / 0.1), transparent 70%)"
        blur={45}
        parallaxSpeed={0.1}
      />

      {/* Accent light beams */}
      <div 
        className="absolute top-0 left-1/3 w-px h-[60vh] opacity-10"
        style={{ 
          background: 'linear-gradient(to bottom, transparent, hsl(var(--accent)), transparent)',
          transform: `translateY(${mediumParallax}px)`,
        }}
      />
      <div 
        className="absolute top-20 right-1/4 w-px h-[40vh] opacity-5"
        style={{ 
          background: 'linear-gradient(to bottom, transparent, hsl(var(--primary)), transparent)',
          transform: `translateY(${slowParallax}px)`,
        }}
      />

      {/* Sacred geometry - varied parallax */}
      <SacredGeometry 
        type="hexagram" 
        className="absolute top-20 right-10 w-32 h-32 opacity-30 animate-float hidden md:block" 
        parallaxSpeed={0.2}
      />
      <SacredGeometry 
        type="flower" 
        className="absolute bottom-40 left-10 w-40 h-40 opacity-20 animate-float-slow hidden md:block" 
        parallaxSpeed={0.15}
      />
      <SacredGeometry 
        type="hexagram" 
        className="absolute top-1/2 left-1/4 w-24 h-24 opacity-20 animate-float hidden lg:block" 
        parallaxSpeed={0.25}
      />
      <SacredGeometry 
        type="flower" 
        className="absolute top-1/3 right-1/3 w-20 h-20 opacity-15 animate-float hidden lg:block" 
        parallaxSpeed={0.18}
      />

      {/* Particles - fastest parallax */}
      {particles.map((p) => (
        <Particle key={p.id} delay={p.delay} left={p.left} size={p.size} speed={p.speed} />
      ))}

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 85%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};
