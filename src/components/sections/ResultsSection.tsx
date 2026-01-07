export const ResultsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
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
