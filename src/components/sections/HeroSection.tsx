import { Button } from '@/components/ui/button';
import { Sparkles, ChevronDown } from 'lucide-react';

export const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 relative">
      <div className="space-y-8 max-w-4xl mx-auto animate-fade-in">
        <div className="space-y-2">
          <p className="text-accent font-medium tracking-[0.3em] text-sm uppercase">
            Ano Universal 1 • 2026
          </p>
          <h1 className="font-poppins text-5xl md:text-7xl lg:text-8xl font-bold text-glow">
            PORTAL YESOD 26
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          26 dias para reprogramar seu subconsciente e <span className="text-foreground font-medium">despertar o potencial</span> que você sempre soube que existia.
        </p>

        <div className="pt-4">
          <Button 
            onClick={scrollToOffer}
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold text-lg px-8 py-6 box-glow border border-accent/30"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            QUERO ATRAVESSAR O PORTAL
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          + de 847 pessoas já iniciaram a jornada
        </p>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
    </section>
  );
};
