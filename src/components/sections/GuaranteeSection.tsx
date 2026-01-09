import { ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const GuaranteeSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4">
      <div 
        className={`max-w-2xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-xl p-8 text-center space-y-6">
          <ShieldCheck className="w-16 h-16 text-accent mx-auto" />
          
          <h2 className="font-poppins text-2xl md:text-3xl font-bold">
            <span className="text-accent">Garantia</span>
          </h2>
          
          <p className="text-muted-foreground text-lg">
            Você tem <span className="text-foreground font-medium">7 dias para experimentar sem risco</span>.
          </p>

          <p className="text-muted-foreground">
            Se não sentir que isso é para você, devolvemos <span className="text-foreground font-medium">100% do valor</span>.
          </p>
        </div>
      </div>
    </section>
  );
};
