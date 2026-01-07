import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Quando posso começar?',
    answer: 'Imediatamente após a compra. O primeiro áudio é liberado na hora.',
  },
  {
    question: 'Quanto tempo por dia eu preciso dedicar?',
    answer: 'Entre 3 e 7 minutos por áudio, mais 10 minutos de escuta da vibração ao final.',
  },
  {
    question: 'Os áudios ficam disponíveis por quanto tempo?',
    answer: 'Você tem acesso completo durante toda a jornada de 26 dias.',
  },
  {
    question: 'E se eu perder um dia?',
    answer: 'Nada é perdido. O próximo áudio é liberado assim que você retornar.',
  },
  {
    question: 'Isso é religião?',
    answer: 'Não. O Portal Yesod 26 é uma jornada de reprogramação comportamental baseada em padrões subconscientes.',
  },
  {
    question: 'Funciona para quem nunca fez nada parecido?',
    answer: 'Sim. O método foi criado justamente para quem nunca conseguiu manter disciplina em outros métodos.',
  },
  {
    question: 'Tem garantia?',
    answer: 'Sim. Você tem 7 dias para testar sem risco. Se não sentir que é para você, devolvemos 100% do valor.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 px-4 gradient-mystic">
      <div className="max-w-2xl mx-auto space-y-8 opacity-0 animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
        <h2 className="font-poppins text-3xl md:text-4xl font-bold text-center">
          Perguntas <span className="text-primary">Frequentes</span>
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-left font-medium hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
