import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const ResultsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4">
      <div 
        className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          O que muda depois dos <span className="text-accent text-glow-gold">26 dias</span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Você não vai depender de motivação.
          </p>
          <p>
            Você vai agir a partir de <span className="text-foreground font-medium">identidade</span>.
          </p>
          <p className="text-foreground font-medium text-xl">
            Você vai parar de prometer e começar a cumprir.
          </p>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      </div>
    </section>
  );
};
