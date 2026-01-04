import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      const offerSection = document.getElementById('offer');
      
      if (!heroSection) return;

      const heroBottom = heroSection.getBoundingClientRect().bottom;
      const offerTop = offerSection?.getBoundingClientRect().top ?? Infinity;
      const windowHeight = window.innerHeight;

      // Show after scrolling past hero, hide when offer section is visible
      setIsVisible(heroBottom < 0 && offerTop > windowHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToOffer = () => {
    document.getElementById('offer')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-lg border-t border-border animate-slide-up">
      <div className="container max-w-4xl mx-auto flex items-center justify-between gap-4">
        <div className="hidden sm:block">
          <p className="text-sm text-muted-foreground">Transforme sua realidade</p>
          <p className="font-poppins font-bold text-accent">
            Apenas R$9,90
          </p>
        </div>
        <Button 
          onClick={scrollToOffer}
          size="lg" 
          className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground font-poppins font-semibold box-glow"
        >
          <Sparkles className="w-4 h-4 mr-2" />
          ATIVAR PORTAL YESOD
        </Button>
      </div>
    </div>
  );
};
