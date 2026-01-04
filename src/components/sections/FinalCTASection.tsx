import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export const FinalCTASection = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          O portal está <span className="text-primary text-glow">aberto</span>.
        </h2>
        
        <p className="text-xl text-muted-foreground">
          A escolha de atravessar é sua.
        </p>

        <Button 
          onClick={scrollToOffer}
          size="lg" 
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg px-8 py-6 box-glow border border-accent/30"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          QUERO ATRAVESSAR O PORTAL
        </Button>

        <p className="text-sm text-muted-foreground pt-8">
          © 2026 Portal Yesod 26 • Todos os direitos reservados
        </p>
      </div>
    </section>
  );
};
