import { useEffect, useRef } from 'react';
import { Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const SETTINGS = {
      particleCount: 160,
      drift: 0.006,
      swirl: 0.018,
      pull: 0.012,
      respawnRadius: 0.85,
      glowStrength: 0.22,
    };

    const COLORS = {
      bg: "#0B0B12",
      purple: [123, 77, 255],
      lavender: [156, 124, 255],
      pink: [255, 77, 125],
      gold: [230, 198, 107],
      white: [255, 255, 255]
    };

    let W = 0, H = 0, dpr = 1;
    let cx = 0, cy = 0, minSide = 0;
    let animationId: number;

    function resize() {
      dpr = Math.max(1, window.devicePixelRatio || 1);
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cx = W * 0.5;
      cy = H * 0.48;
      minSide = Math.min(W, H);
    }

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      seed: number;
      life: number;
    }

    const particles: Particle[] = [];
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    
    function pickColor(t: number) {
      if (t < 0.55) return COLORS.lavender;
      if (t < 0.85) return COLORS.pink;
      return COLORS.gold;
    }

    function spawn(p: Particle) {
      const r = minSide * SETTINGS.respawnRadius * rand(0.55, 1.0);
      const a = rand(0, Math.PI * 2);
      p.x = cx + Math.cos(a) * r;
      p.y = cy + Math.sin(a) * r;
      p.vx = rand(-0.06, 0.06);
      p.vy = rand(-0.06, 0.06);
      p.size = rand(0.8, 2.2);
      p.alpha = rand(0.10, 0.55);
      p.seed = rand(0, 1000);
      p.life = rand(0.6, 1.0);
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < SETTINGS.particleCount; i++) {
        const p = {} as Particle;
        spawn(p);
        particles.push(p);
      }
    }

    function drawPortalGlow(t: number) {
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.0012);
      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, minSide * 0.55);
      g.addColorStop(0, `rgba(156,124,255,${0.05 + pulse * SETTINGS.glowStrength})`);
      g.addColorStop(0.35, `rgba(255,77,125,${0.03 + pulse * SETTINGS.glowStrength * 0.7})`);
      g.addColorStop(0.65, `rgba(230,198,107,${0.02 + pulse * SETTINGS.glowStrength * 0.45})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      ctx.strokeStyle = `rgba(156,124,255,${0.10 + pulse * 0.08})`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, minSide * 0.18 + pulse * 6, 0, Math.PI * 2);
      ctx.stroke();
    }

    let last = 0;
    function tick(ts: number) {
      const dt = Math.min(32, ts - last || 16);
      last = ts;

      ctx.fillStyle = "rgba(11,11,18,0.22)";
      ctx.fillRect(0, 0, W, H);

      drawPortalGlow(ts);

      for (const p of particles) {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.hypot(dx, dy) || 1;

        const nd = Math.min(1, dist / (minSide * 0.55));
        const pull = SETTINGS.pull * (1.2 - nd);
        const swirl = SETTINGS.swirl * (0.8 + (1 - nd));

        const ux = dx / dist;
        const uy = dy / dist;

        p.vx += (-ux) * pull * dt;
        p.vy += (-uy) * pull * dt;

        p.vx += (-uy) * swirl * dt;
        p.vy += (ux) * swirl * dt;

        p.vx += Math.sin((p.seed + ts * 0.001)) * SETTINGS.drift * dt;
        p.vy += Math.cos((p.seed + ts * 0.0011)) * SETTINGS.drift * dt;

        p.vx *= 0.985;
        p.vy *= 0.985;

        p.x += p.vx;
        p.y += p.vy;

        if (dist < minSide * 0.06 || p.x < -50 || p.x > W + 50 || p.y < -50 || p.y > H + 50) {
          spawn(p);
          continue;
        }

        const col = pickColor(1 - nd);
        const a = p.alpha * (0.35 + (1 - nd) * 0.65);

        ctx.fillStyle = `rgba(${col[0]},${col[1]},${col[2]},${a})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(tick);
    }

    resize();
    init();

    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, W, H);

    animationId = requestAnimationFrame(tick);

    const handleResize = () => {
      resize();
      init();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="hero-yesod min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      style={{ background: '#0B0B12' }}
    >
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />

      {/* Portal Ring */}
      <div 
        className="portal-ring absolute pointer-events-none"
        style={{
          width: '65vmin',
          height: '65vmin',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '50%',
          background: 'conic-gradient(from 0deg, rgba(123,77,255,0.18), rgba(255,77,125,0.12), rgba(230,198,107,0.08), rgba(123,77,255,0.18))',
          filter: 'blur(38px)',
          animation: 'slowSpin 80s linear infinite',
          zIndex: 2
        }}
      />

      {/* Hero Content */}
      <div 
        className="relative z-10 w-full max-w-[980px] text-center px-4"
        style={{ zIndex: 3 }}
      >
        <p 
          className="font-bold tracking-[3px] text-xs mb-4"
          style={{ color: 'rgba(230,198,107,0.9)' }}
        >
          ANO UNIVERSAL 1 • 2026
        </p>
        
        <h1 
          className="font-poppins font-black tracking-wide mb-4"
          style={{
            fontSize: 'clamp(44px, 6vw, 86px)',
            color: '#fff',
            textShadow: '0 0 30px rgba(123,77,255,0.25)'
          }}
        >
          PORTAL YESOD 26
        </h1>
        
        <p 
          className="mx-auto max-w-[720px] mb-7 leading-relaxed"
          style={{
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: 'rgba(185,185,201,0.92)'
          }}
        >
          26 dias para reprogramar seu subconsciente e{' '}
          <b className="text-white">despertar o potencial</b>{' '}
          que você sempre soube que existia.
        </p>
        
        <button 
          onClick={scrollToOffer}
          className="cta-button border-0 cursor-pointer px-6 py-4 rounded-xl font-black tracking-wide text-white transition-all duration-150 hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0 active:scale-[0.99]"
          style={{
            background: 'linear-gradient(90deg, #7B4DFF, #9C7CFF)',
            boxShadow: '0 12px 40px rgba(123,77,255,0.30), 0 0 0 1px rgba(255,255,255,0.08) inset'
          }}
        >
          <Sparkles className="w-4 h-4 inline mr-2" />
          QUERO ATRAVESSAR O PORTAL
        </button>
        
        <p 
          className="mt-4 text-sm"
          style={{ color: 'rgba(185,185,201,0.65)' }}
        >
          + de 847 pessoas já iniciaram a jornada
        </p>
      </div>

      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background: 'radial-gradient(800px 420px at 50% 45%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.85) 100%)'
        }}
      />

      {/* Scroll indicator */}
      <div className="absolute bottom-8 animate-bounce" style={{ zIndex: 5 }}>
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>

      <style>{`
        @keyframes slowSpin {
          from { transform: translate(-50%, -50%) rotate(0deg) scale(1.02); }
          to   { transform: translate(-50%, -50%) rotate(360deg) scale(1.02); }
        }

        @media (prefers-reduced-motion: reduce) {
          .portal-ring { animation: none; }
        }
      `}</style>
    </section>
  );
};
