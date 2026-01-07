import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
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
