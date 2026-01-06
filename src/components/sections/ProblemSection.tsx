export const ProblemSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          Você sabe que está no <span className="text-primary">automático</span>.
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Os mesmos pensamentos. Os mesmos padrões. As mesmas reações.
          </p>
          <p>
            Você já tentou mudar. Fez promessas no Ano Novo. Leu livros. Assistiu vídeos motivacionais.
          </p>
          <p className="text-foreground font-medium">
            Mas algo dentro de você sempre puxa de volta para o mesmo lugar.
          </p>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </div>
    </section>
  );
};
