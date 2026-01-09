import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export const CreatorSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 px-4">
      <div 
        className={`max-w-3xl mx-auto space-y-8 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-center">
          Quem <span className="text-accent">Criou</span> o Portal
        </h2>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img 
              src="https://i.imgur.com/kXsBRSf.png" 
              alt="Lucas Monteiro"
              className="w-24 h-24 rounded-full object-cover shrink-0 border-2 border-primary/30"
            />
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
