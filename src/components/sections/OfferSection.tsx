import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, ShieldCheck, Clock, Users, CreditCard, Eye } from 'lucide-react';
import { useElementParallax } from '@/hooks/use-parallax';

const benefits = [
  '26 áudios guiados de reprogramação subconsciente',
  'Protocolos diários para sair do modo automático',
  'Áudios para escutar ao acordar ou antes de dormir',
  'Reprogramação de padrões de procrastinação e autossabotagem',
  'Clareza mental para tomar decisões sem conflito interno',
  'Reconstrução de identidade baseada em ação',
  'Liberação diária automática dos áudios',
  'Jornada prática, simples e progressiva'
];

export const OfferSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallax = useElementParallax(sectionRef, 0.1);
  const [viewers, setViewers] = useState(12);

  // Simulate live viewer count that changes randomly
  useEffect(() => {
    const interval = setInterval(() => {
      setViewers(prev => {
        const change = Math.random() > 0.5 ? 1 : -1;
        const newValue = prev + change;
        // Keep between 8 and 24
        return Math.max(8, Math.min(24, newValue));
      });
    }, 3000 + Math.random() * 2000); // Random interval between 3-5 seconds

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section ref={sectionRef} id="offer" className="py-16 px-4 bg-background">
      <div 
        className="max-w-2xl mx-auto opacity-0 animate-fade-in-scale transition-transform duration-100 ease-out" 
        style={{
          animationDelay: '0.2s',
          transform: `translateY(${parallax}px)`
        }}
      >
        {/* Card Container */}
        <div className="bg-card border border-accent/20 rounded-2xl p-8 md:p-10 shadow-[0_0_60px_-10px_hsl(var(--accent)/0.15)]">
          {/* Badge */}
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-accent bg-accent/10 border border-accent/30 rounded-full">
              <Sparkles className="w-4 h-4" />
              Oferta Especial
            </span>
          </div>

          {/* Title */}
          <h2 className="font-poppins text-2xl md:text-3xl font-bold text-center mb-3 bg-gradient-to-r from-accent via-yellow-300 to-accent bg-clip-text text-transparent italic">
            O que você vai receber
          </h2>
          <p className="text-muted-foreground text-center text-sm md:text-base max-w-lg mx-auto mb-8">
            Tudo o que você precisa para reprogramar sua mente e sair do ciclo de autossabotagem
          </p>

          {/* Benefits List */}
          <ul className="space-y-4 mb-10">
            {benefits.map((benefit, index) => (
              <li 
                key={benefit} 
                className="flex items-start gap-3 text-foreground/90 opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s`, animationFillMode: 'forwards' }}
              >
                <Check className="w-5 h-5 text-accent shrink-0 mt-0.5 stroke-[3]" />
                <span className="text-sm md:text-base leading-relaxed">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-8" />

          {/* Price Section */}
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-sm line-through mb-2">De R$ 97,00</p>
            <div className="flex items-baseline justify-center gap-3">
              <span className="text-muted-foreground text-base">por apenas</span>
              <p className="text-5xl md:text-6xl font-black text-accent text-glow-gold animate-pulse-glow">
                R$ 37
              </p>
            </div>
            <div className="mt-3">
              <span className="inline-block px-4 py-1.5 text-xs font-bold bg-accent/20 text-accent border border-accent/40 rounded-full">
                62% OFF — Economize R$ 60
              </span>
            </div>
          </div>

          {/* Live Viewers Indicator */}
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
              <Eye className="w-3.5 h-3.5" />
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-bold">{viewers}</span> pessoas vendo agora
              </span>
            </span>
          </div>

          {/* Urgency Badge */}
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-red-400 bg-red-500/10 border border-red-500/30 rounded-full animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
              Oferta por tempo limitado
            </span>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-poppins font-bold text-sm md:text-base py-6 md:py-7 rounded-xl shadow-[0_0_30px_-5px_hsl(var(--accent)/0.4)] hover:shadow-[0_0_40px_-5px_hsl(var(--accent)/0.6)] transition-all duration-300 animate-pulse-cta"
          >
            <Sparkles className="w-5 h-5 mr-2 animate-spin-slow" />
            ATIVAR PORTAL YESOD AGORA
          </Button>

          {/* Access Text */}
          <p className="text-center text-muted-foreground text-xs mt-4">
            Acesso imediato ao primeiro áudio após a confirmação
          </p>
        </div>

        {/* Trust Badges - Outside Card */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:gap-8 text-muted-foreground">
          <div className="flex items-center gap-2 text-xs">
            <Clock className="w-4 h-4 text-accent/70" />
            <span>Garantia 7 dias</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <ShieldCheck className="w-4 h-4 text-accent/70" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Users className="w-4 h-4 text-accent/70" />
            <span>+847 Alunos</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <CreditCard className="w-4 h-4 text-accent/70" />
            <span>Pagamento Seguro</span>
          </div>
        </div>
      </div>
    </section>
  );
};
