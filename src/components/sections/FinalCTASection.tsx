import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const FinalCTASection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="py-20 px-4">
      <div 
        className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p className="text-foreground font-medium text-xl">
            Você não nasceu para viver no automático.
          </p>
          <p>
            2026 não é apenas um dia no calendário.<br />
            É um ano inteiro aberto para reescrever sua identidade.
          </p>
          <p className="text-foreground font-medium">
            A jornada começa quando você decide atravessar.
          </p>
        </div>

        <Button 
          onClick={scrollToOffer}
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-sm md:text-lg px-4 md:px-8 py-5 md:py-6 box-glow border border-accent/30 w-full sm:w-auto"
        >
          <Sparkles className="w-4 h-4 md:w-5 md:h-5 mr-2 shrink-0" />
          <span className="whitespace-nowrap">QUERO ATRAVESSAR O PORTAL</span>
        </Button>

        <p className="text-sm text-muted-foreground pt-8">
          © 2026 Portal Yesod 26 • Todos os direitos reservados
        </p>
      </div>
    </section>
  );
};
