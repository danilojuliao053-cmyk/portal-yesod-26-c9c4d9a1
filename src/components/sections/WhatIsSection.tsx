import { useRef } from 'react';
import { useElementParallax } from '@/hooks/use-parallax';
import { Headphones, Brain, Rocket } from 'lucide-react';

export const WhatIsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallax = useElementParallax(sectionRef, 0.15);

  return (
    <section ref={sectionRef} className="py-20 px-4 gradient-mystic">
      <div 
        className="max-w-3xl mx-auto text-center space-y-8 opacity-0 animate-fade-in-scale transition-transform duration-100 ease-out" 
        style={{ animationDelay: '0.2s', transform: `translateY(${parallax}px)` }}
      >
        <h2 className="font-poppins text-3xl md:text-4xl font-bold">
          O que é o <span className="text-accent text-glow-gold">Portal Yesod 26</span>?
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            O Portal Yesod 26 é uma jornada de <span className="text-foreground font-medium">26 dias</span> entregue em áudios diários.
          </p>
          <p>
            Você não compra um curso para assistir.<br />
            Você entra em um <span className="text-foreground font-medium">ritual de escuta e ação</span>.
          </p>
          <p>
            Todo dia um novo áudio é liberado para você.<br />
            Cada áudio conduz uma reprogramação prática do seu subconsciente.
          </p>
        </div>

        {/* Veja como é simples */}
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-poppins font-bold text-center">
            Veja como é simples…
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Passo 1 */}
            <div className="group bg-gradient-to-b from-card/90 to-background border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                <Headphones className="w-8 h-8 text-accent group-hover:scale-110 group-hover:animate-pulse transition-transform duration-300" />
              </div>
              <h4 className="text-accent font-poppins font-semibold text-lg mb-3">Passo #01</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Após a compra, você recebe o acesso ao primeiro áudio.
                Coloque seus fones e permita que a jornada comece.
              </p>
            </div>
            
            {/* Passo 2 */}
            <div className="group bg-gradient-to-b from-card/90 to-background border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                <Brain className="w-8 h-8 text-accent group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <h4 className="text-accent font-poppins font-semibold text-lg mb-3">Passo #02</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Escute o áudio uma vez ao acordar ou antes de dormir.
                Cada escuta desbloqueia um novo padrão interno.
              </p>
            </div>
            
            {/* Passo 3 */}
            <div className="group bg-gradient-to-b from-card/90 to-background border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-accent/25 hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                <Rocket className="w-8 h-8 text-accent group-hover:scale-110 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
              <h4 className="text-accent font-poppins font-semibold text-lg mb-3">Passo #03</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Em poucos dias você começa a perceber mudanças
                na sua clareza, decisões e comportamento.
              </p>
            </div>
          </div>
        </div>

        {/* O que você NÃO precisa mais fazer */}
        <div className="bg-gradient-to-b from-card/90 to-background border border-white/10 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-foreground text-xl md:text-2xl font-poppins font-black text-center mb-6">
            O que você NÃO precisa mais fazer
          </h3>
          <ul className="space-y-4 max-w-xl mx-auto">
            {[
              "Acreditar que força de vontade resolve tudo",
              "Consumir conteúdo e não executar nada",
              "Pular de método em método sem resultado",
              "Comprar cursos e abandonar na primeira semana",
              "Repetir promessas que você não consegue cumprir"
            ].map((item, index) => (
              <li 
                key={index}
                className="text-foreground/90 text-base pl-7 relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <span className="absolute left-0 top-0 text-red-400 font-black">✘</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-center text-muted-foreground text-sm leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            O Portal Yesod 26 não funciona com motivação.<br />
            Ele cria novos padrões internos.
          </p>
        </div>

        {/* O que você VAI conquistar */}
        <div className="bg-gradient-to-b from-card/90 to-background border border-accent/30 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-foreground text-xl md:text-2xl font-poppins font-black text-center mb-6">
            O que você <span className="text-accent">VAI</span> conquistar
          </h3>
          <ul className="space-y-4 max-w-xl mx-auto">
            {[
              "Clareza sobre o que realmente importa para você",
              "Decisões firmes sem paralisia ou arrependimento",
              "Consistência natural nas suas ações diárias",
              "Confiança para começar e terminar o que propõe",
              "Padrões internos que sustentam sua transformação"
            ].map((item, index) => (
              <li 
                key={index}
                className="text-foreground/90 text-base pl-7 relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
              >
                <span className="absolute left-0 top-0 text-green-400 font-black">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-center text-accent font-medium text-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            Mudança real começa por dentro.
          </p>
        </div>

        {/* Por que o acesso é um dia por vez */}
        <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-xl p-8 space-y-4">
          <h3 className="text-xl font-poppins font-semibold">
            Por que o acesso é um dia por vez?
          </h3>
          <p className="text-muted-foreground">
            Mudança não acontece em maratona.
          </p>
          <p className="text-muted-foreground">
            A liberação diária cria <span className="text-foreground font-medium">ritmo, compromisso e transformação real</span>.
          </p>
          <p className="text-foreground font-medium">
            Você não consome. Você atravessa.
          </p>
        </div>
      </div>
    </section>
  );
};
