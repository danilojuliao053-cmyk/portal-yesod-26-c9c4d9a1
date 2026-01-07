export const CreatorSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto space-y-8 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-center">
          Quem <span className="text-accent">Criou</span> o Portal
        </h2>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-poppins font-bold text-background shrink-0">
              LM
            </div>
            <div className="text-center md:text-left space-y-2">
              <h3 className="font-poppins text-2xl font-semibold">Lucas Monteiro</h3>
              <p className="text-muted-foreground">Criador do Portal Yesod 26</p>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground">
            <p>
              Lucas Monteiro viveu anos preso em ciclos de autossabotagem.
            </p>
            <p>
              Trabalhava, estudava, prometia mudar, mas sempre voltava aos mesmos padrões.
            </p>
            <p>
              Depois de um colapso pessoal, decidiu investigar onde o comportamento realmente nasce.
            </p>
            <p>
              Cruzando psicologia comportamental e padrões subconscientes, criou um método baseado em <span className="text-foreground font-medium">micro rupturas diárias</span>.
            </p>
            <p className="text-foreground font-medium">
              Assim nasceu o Portal Yesod 26.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
