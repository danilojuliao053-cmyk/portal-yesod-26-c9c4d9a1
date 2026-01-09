import { useRef, useEffect, useState } from 'react';
import { useElementParallax } from '@/hooks/use-parallax';
import { Headphones, Brain, Rocket, X, Check } from 'lucide-react';

// Floating particle component
const FloatingParticle = ({ delay, x, size, color }: { delay: number; x: number; size: number; color: 'red' | 'gold' }) => (
  <div
    className="absolute rounded-full animate-float-slow pointer-events-none"
    style={{
      left: `${x}%`,
      top: `${Math.random() * 100}%`,
      width: `${size}px`,
      height: `${size}px`,
      background: color === 'red' 
        ? `radial-gradient(circle, hsl(0 84% 60% / 0.6), transparent)`
        : `radial-gradient(circle, hsl(var(--accent) / 0.6), transparent)`,
      animationDelay: `${delay}s`,
      filter: 'blur(1px)',
    }}
  />
);

export const WhatIsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallax = useElementParallax(sectionRef, 0.15);
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; x: number; size: number; color: 'red' | 'gold' }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 16 }, (_, i) => ({
      id: i,
      delay: Math.random() * 8,
      x: Math.random() * 100,
      size: Math.random() * 6 + 3,
      color: (i % 2 === 0 ? 'red' : 'gold') as 'red' | 'gold',
    }));
    setParticles(newParticles);
  }, []);

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

        {/* Grid de comparação moderno */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          {/* Partículas animadas de fundo */}
          <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {particles.map((p) => (
              <FloatingParticle key={p.id} delay={p.delay} x={p.x} size={p.size} color={p.color} />
            ))}
          </div>

          {/* O que você NÃO precisa mais fazer */}
          <div className="relative group cursor-pointer">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500/30 to-rose-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-card via-card/95 to-background/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-red-500/20 group-hover:border-red-500/30">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
                  <X className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-foreground text-xl md:text-2xl font-poppins font-black">
                  Chega de...
                </h3>
              </div>

              <ul className="space-y-5">
                {[
                  "Acreditar que força de vontade resolve tudo",
                  "Consumir conteúdo e não executar nada",
                  "Pular de método em método sem resultado",
                  "Comprar cursos e abandonar na primeira semana",
                  "Repetir promessas que você não consegue cumprir"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-4 opacity-0 animate-fade-in group/item hover:translate-x-1 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.12}s`, animationFillMode: 'forwards' }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-400" />
                    </span>
                    <span className="text-foreground/80 text-base leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/5">
                <p className="text-muted-foreground text-sm leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                  O Portal Yesod 26 não funciona com motivação.<br />
                  <span className="text-foreground font-medium">Ele cria novos padrões internos.</span>
                </p>
              </div>
            </div>
          </div>

          {/* O que você VAI conquistar */}
          <div className="relative group cursor-pointer">
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-yellow-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            
            <div className="relative bg-gradient-to-br from-card via-card/95 to-background/80 backdrop-blur-xl border border-accent/20 rounded-3xl p-8 h-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl group-hover:shadow-accent/20 group-hover:border-accent/40">
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
              
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center border border-accent/30">
                  <Check className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-foreground text-xl md:text-2xl font-poppins font-black">
                  Você <span className="text-accent">vai</span> conquistar
                </h3>
              </div>

              <ul className="space-y-5">
                {[
                  "Clareza sobre o que realmente importa",
                  "Decisões firmes sem paralisia",
                  "Consistência natural nas ações diárias",
                  "Confiança para começar e terminar",
                  "Padrões internos que sustentam você"
                ].map((item, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-4 opacity-0 animate-fade-in group/item hover:translate-x-1 transition-transform duration-300"
                    style={{ animationDelay: `${index * 0.12}s`, animationFillMode: 'forwards' }}
                  >
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent" />
                    </span>
                    <span className="text-foreground/80 text-base leading-relaxed group-hover/item:text-foreground transition-colors duration-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-accent/10">
                <p className="text-accent font-medium text-sm opacity-0 animate-fade-in flex items-center gap-2" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  Mudança real começa por dentro.
                </p>
              </div>
            </div>
          </div>
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
