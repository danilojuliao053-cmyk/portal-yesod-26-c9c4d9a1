import { useRef } from 'react';
import { Sunrise, Trash2, UserCheck, Target } from 'lucide-react';
import { useElementParallax } from '@/hooks/use-parallax';

const weeks = [
  {
    week: 1,
    title: 'Despertar de Yesod',
    description: 'Mapear, entender e interromper o automático.',
    icon: Sunrise,
    color: 'text-primary',
  },
  {
    week: 2,
    title: 'Limpeza de Padrões',
    description: 'Eliminar ciclos que sabotam você há anos.',
    icon: Trash2,
    color: 'text-destructive',
  },
  {
    week: 3,
    title: 'Construção de Identidade',
    description: 'Parar de agir por impulso e começar a agir por decisão.',
    icon: UserCheck,
    color: 'text-accent',
  },
  {
    week: 4,
    title: 'Materialização',
    description: 'Transformar alinhamento interno em comportamento real.',
    icon: Target,
    color: 'text-green-500',
  },
];

export const JourneySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const parallax = useElementParallax(sectionRef, 0.12);

  return (
    <section ref={sectionRef} className="py-20 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <div 
          className="text-center space-y-4 opacity-0 animate-fade-in-scale transition-transform duration-100 ease-out" 
          style={{ animationDelay: '0.2s', transform: `translateY(${parallax}px)` }}
        >
          <h2 className="font-poppins text-3xl md:text-4xl font-bold">
            A <span className="text-primary">Jornada</span>
          </h2>
          <p className="text-muted-foreground">4 semanas de transformação profunda</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {weeks.map((week, index) => (
            <div
              key={week.week}
              className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all duration-300 opacity-0 animate-fade-in-scale"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg bg-secondary ${week.color}`}>
                  <week.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">Semana {week.week}</p>
                  <h3 className="font-poppins text-xl font-semibold">{week.title}</h3>
                  <p className="text-muted-foreground text-sm">{week.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
