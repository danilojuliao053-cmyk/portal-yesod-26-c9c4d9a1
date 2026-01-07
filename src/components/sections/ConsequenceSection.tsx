export const ConsequenceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          Se você <span className="text-destructive">continuar assim</span>
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Daqui a alguns meses, sua vida vai parecer exatamente igual.
          </p>
          <p>
            Mesmo trabalho.<br />
            Mesmos problemas.<br />
            Mesmas promessas quebradas.
          </p>
          <p className="text-foreground font-medium">
            Não porque você não quer mudar.<br />
            Mas porque você nunca mexeu no ponto certo.
          </p>
        </div>

        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-destructive/50 to-transparent" />
      </div>
    </section>
  );
};
