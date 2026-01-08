import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
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
  
  return (
    <section ref={sectionRef} id="offer" className="py-16 px-4 bg-background">
      <div 
        className="max-w-3xl mx-auto opacity-0 animate-fade-in-scale transition-transform duration-100 ease-out" 
        style={{
          animationDelay: '0.2s',
          transform: `translateY(${parallax}px)`
        }}
      >
        <ul className="space-y-4 mb-10">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 text-foreground/90">
              <Check className="w-5 h-5 text-accent shrink-0 mt-0.5 font-bold" />
              <span className="text-base leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>

        <div className="text-center space-y-2">
          <p className="text-muted-foreground text-sm">por apenas</p>
          <p className="text-5xl font-black text-foreground">R$ 37,00</p>
        </div>

        <div className="mt-8">
          <Button 
            size="lg" 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-sm md:text-lg px-4 md:px-6 py-5 md:py-6 box-glow"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0" />
            <span className="whitespace-nowrap">ATIVAR PORTAL YESOD AGORA</span>
          </Button>
        </div>
      </div>
    </section>
  );
};