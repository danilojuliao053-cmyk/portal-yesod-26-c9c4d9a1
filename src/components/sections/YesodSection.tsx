export const YesodSection = () => {
  return (
    <section className="py-20 px-4 gradient-mystic">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">
            O que é <span className="text-accent text-glow-gold">Yesod</span>?
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Na Cabala, Yesod é a <span className="text-foreground">fundação</span> — a esfera que conecta o mundo material ao espiritual. É onde residem seus padrões mais profundos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-5xl font-poppins font-bold text-primary mb-2">50</p>
            <p className="text-muted-foreground">bits processados por segundo pela <span className="text-foreground">mente consciente</span></p>
          </div>
          
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 text-center opacity-0 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="text-5xl font-poppins font-bold text-accent">11M+</p>
            <p className="text-muted-foreground">bits processados pelo <span className="text-foreground">subconsciente</span></p>
          </div>
        </div>

        <p className="text-center text-lg text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Seu subconsciente é <span className="text-foreground font-medium">220.000x mais poderoso</span>. É lá que a verdadeira mudança acontece.
        </p>
      </div>
    </section>
  );
};
