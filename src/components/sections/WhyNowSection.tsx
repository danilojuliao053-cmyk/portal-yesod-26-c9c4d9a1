export const WhyNowSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          Por que <span className="text-primary">2026</span> é diferente
        </h2>
        
        <div className="bg-card/50 backdrop-blur-sm border border-primary/30 rounded-xl p-6 md:p-8 space-y-4">
          <div className="flex items-center justify-center gap-2 md:gap-4 text-2xl md:text-4xl font-poppins font-bold flex-wrap">
            <span className="text-muted-foreground">2</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-muted-foreground">0</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-muted-foreground">2</span>
            <span className="text-muted-foreground">+</span>
            <span className="text-muted-foreground">6</span>
            <span className="text-primary">=</span>
            <span className="text-primary">10</span>
            <span className="text-primary">=</span>
            <span className="text-accent text-glow-gold">1</span>
          </div>
          
          <p className="text-lg text-foreground font-medium">
            O número 1 representa início de ciclos, ruptura de padrões e nascimento de identidade.
          </p>
        </div>

        <p className="text-lg text-muted-foreground">
          Você está diante da <span className="text-foreground font-medium">melhor janela da década</span> para reescrever seu código interno.
        </p>
      </div>
    </section>
  );
};
