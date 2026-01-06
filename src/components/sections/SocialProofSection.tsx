import { useEffect, useState, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Marina S.',
    text: 'Pela primeira vez senti que algo realmente mudou dentro de mim. Não foi motivação passageira, foi uma transformação real.',
    avatar: 'M',
  },
  {
    name: 'Carlos R.',
    text: 'Os áudios são hipnóticos. Em duas semanas percebi que padrões de anos estavam se dissolvendo naturalmente.',
    avatar: 'C',
  },
  {
    name: 'Juliana M.',
    text: 'Entrei cética e saí completamente transformada. O Portal Yesod é diferente de tudo que já experimentei.',
    avatar: 'J',
  },
];

const AnimatedCounter = ({ target, isVisible }: { target: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className={`${isVisible ? 'animate-count-up' : 'opacity-0'}`}>
      {count.toLocaleString('pt-BR')}
    </span>
  );
};

export const SocialProofSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 gradient-mystic">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Counter */}
        <div className="text-center space-y-4 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
          <p className="text-6xl md:text-7xl font-poppins font-bold text-primary text-glow">
            +<AnimatedCounter target={847} isVisible={isVisible} />
          </p>
          <p className="text-xl text-muted-foreground">
            pessoas já atravessaram o portal
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 space-y-4 opacity-0 animate-fade-in-scale"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <Quote className="w-8 h-8 text-primary/40" />
              <p className="text-muted-foreground italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-poppins font-semibold text-primary">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
