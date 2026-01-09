import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const ProblemSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4">
      <div 
        className={`max-w-3xl mx-auto text-center space-y-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          A cena que você <span className="text-primary">conhece bem</span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Você acorda decidido a mudar.
          </p>
          <p>
            Mas o dia passa rápido demais.<br />
            À noite você está exausto, com aquela sensação estranha de que não viveu nada de verdade.
          </p>
          <p>
            Você já prometeu que amanhã vai ser diferente mais vezes do que consegue lembrar.
          </p>
          <p className="text-foreground font-medium">
            E, mesmo assim, continua preso no mesmo ciclo.
          </p>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
};
