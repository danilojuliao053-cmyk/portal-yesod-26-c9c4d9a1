export const CreatorSection = () => {
  return <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8 opacity-0 animate-fade-in" style={{
      animationDelay: '0.2s'
    }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-center">
          Quem <span className="text-accent">Criou</span> o Portal
        </h2>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-poppins font-bold text-background shrink-0">
              AB
            </div>
            <div className="text-center md:text-left space-y-2">
              <h3 className="font-poppins text-2xl font-semibold">Ariel Ben Shalem</h3>
              <p className="text-muted-foreground">Estudioso de Cabala, Numerologia e Reprogramação Mental</p>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>Há mais de 15 anos, dedico minha vida a entender como a mente funciona em níveis profundos e como podemos usar esse conhecimento para criar mudanças reais.</p>
            <p>
              O Portal Yesod nasceu da minha própria jornada de transformação e dos ensinamentos cabalísticos que descobri ao longo do caminho.
            </p>
            <p className="text-foreground font-medium">
              Não é magia. É ciência aplicada com sabedoria antiga.
            </p>
          </div>
        </div>
      </div>
    </section>;
};