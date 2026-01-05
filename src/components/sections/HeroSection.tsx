import { Button } from '@/components/ui/button';
import { Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="hero-yesod min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative overflow-hidden"
    >
      {/* Portal Background */}
      <div 
        className="portal-bg absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 50% 55%, rgba(123,77,255,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 50% 55%, rgba(255,77,125,0.14) 0%, transparent 50%),
            radial-gradient(ellipse 40% 35% at 50% 55%, rgba(230,198,107,0.10) 0%, transparent 40%)
          `,
          animation: 'portalSpin 90s linear infinite'
        }}
      />
      
      {/* Swirl overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(123,77,255,0.08) 0%, transparent 70%)',
          animation: 'swirl 8s ease-in-out infinite'
        }}
      />

      <div className="space-y-8 max-w-4xl mx-auto animate-fade-in relative z-10">
        <div className="space-y-2">
          <p 
            className="font-medium tracking-[0.3em] text-sm uppercase"
            style={{ color: '#E6C66B' }}
          >
            ANO UNIVERSAL 1 • 2026
          </p>
          <h1 
            className="font-poppins text-5xl md:text-7xl lg:text-8xl font-black"
            style={{
              background: 'linear-gradient(180deg, #fff 40%, rgba(230,198,107,0.85) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 32px rgba(123,77,255,0.25)'
            }}
          >
            PORTAL YESOD 26
          </h1>
        </div>

        <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#B9B9C9' }}>
          26 dias para reprogramar seu subconsciente e{' '}
          <span className="text-foreground font-medium">despertar o potencial</span>{' '}
          que você sempre soube que existia.
        </p>

        <div className="pt-4">
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="font-poppins font-semibold text-lg px-8 py-6 rounded-full border-0 transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #7B4DFF 0%, #FF4D7D 100%)',
              boxShadow: '0 0 32px rgba(123,77,255,0.35), 0 0 64px rgba(255,77,125,0.18)'
            }}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            QUERO ATRAVESSAR O PORTAL
          </Button>
        </div>

        <p className="text-sm" style={{ color: '#B9B9C9' }}>
          + de 847 pessoas já iniciaram a jornada
        </p>
      </div>

      <div className="absolute bottom-8 animate-bounce z-10">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>

      <style>{`
        @keyframes portalSpin {
          from { transform: rotate(0deg) scale(1.02); }
          to   { transform: rotate(360deg) scale(1.02); }
        }

        @keyframes swirl {
          0%   { transform: rotate(0deg) scale(1.00); opacity: .45; }
          50%  { transform: rotate(30deg) scale(1.06); opacity: .70; }
          100% { transform: rotate(0deg) scale(1.00); opacity: .45; }
        }

        @media (prefers-reduced-motion: reduce) {
          .portal-bg, .hero-yesod::before { animation: none; }
        }
      `}</style>
    </section>
  );
};
