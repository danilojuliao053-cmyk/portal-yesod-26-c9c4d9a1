import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';
import { useElementParallax } from '@/hooks/use-parallax';

const benefits = ['26 protocolos de reprogramação em áudio', 'Acesso imediato após a compra', 'Guia de acompanhamento da jornada', 'Suporte durante os 26 dias', 'Acesso vitalício ao conteúdo'];

export const OfferSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallax = useElementParallax(sectionRef, 0.1);

  return <section ref={sectionRef} id="offer" className="py-20 px-4 gradient-mystic">
      <div 
        className="max-w-2xl mx-auto opacity-0 animate-fade-in-scale transition-transform duration-100 ease-out" 
        style={{ animationDelay: '0.2s', transform: `translateY(${parallax}px)` }}
      >
        <div className="bg-card border-2 border-primary/50 rounded-2xl p-8 md:p-12 space-y-8 box-glow">
          <div className="text-center space-y-4">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">Oferta Especial de Lançamento</p>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold">
              Portal Yesod 26
            </h2>
          </div>

          <ul className="space-y-4">
            {benefits.map(benefit => <li key={benefit} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-accent shrink-0" />
                <span className="text-muted-foreground">{benefit}</span>
              </li>)}
          </ul>

          <div className="text-center space-y-4 pt-4">
            <div className="space-y-1">
              <p className="text-muted-foreground line-through">De R$97,00</p>
              <p className="text-5xl font-poppins font-bold text-accent text-glow-gold">R$39,90</p>
              <p className="text-sm text-muted-foreground">Pagamento único • Acesso vitalício</p>
            </div>

            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-sm md:text-lg px-4 md:px-6 py-5 md:py-6 box-glow">
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0" />
              <span className="whitespace-nowrap">ATIVAR PORTAL YESOD AGORA</span>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};