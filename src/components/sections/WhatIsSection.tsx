import { Zap } from 'lucide-react';

export const WhatIsSection = () => {
  return (
    <section className="py-20 px-4 gradient-mystic">
      <div className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          O que é o <span className="text-accent text-glow-gold">Portal Yesod 26</span>?
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          Uma jornada de <span className="text-foreground font-medium">26 dias</span> com comandos diários em áudio, projetados para reprogramar padrões profundos do seu subconsciente.
        </p>

        <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-xl p-8 space-y-4">
          <Zap className="w-12 h-12 text-accent mx-auto" />
          <p className="text-xl font-poppins font-semibold">
            Sem teoria inútil. Sem motivação vazia.
          </p>
          <p className="text-muted-foreground">
            Apenas comandos diretos que trabalham onde a mudança realmente acontece.
          </p>
        </div>
      </div>
    </section>
  );
};
