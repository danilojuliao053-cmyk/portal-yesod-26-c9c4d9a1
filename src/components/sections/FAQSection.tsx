import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Preciso ter conhecimento prévio de Cabala?',
    answer: 'Não. O Portal Yesod foi projetado para funcionar independentemente do seu background. Os comandos em áudio trabalham diretamente no subconsciente, sem necessidade de estudo teórico.',
  },
  {
    question: 'Quanto tempo preciso dedicar por dia?',
    answer: 'Cada protocolo de áudio tem entre 10 a 15 minutos. Recomendamos ouvir pela manhã ou antes de dormir, quando a mente está mais receptiva.',
  },
  {
    question: 'Posso começar em qualquer época ou precisa ser em 2026?',
    answer: 'Você pode começar a qualquer momento! Porém, 2026 é um Ano Universal 1, o que amplifica significativamente o poder de novos começos e reprogramações profundas.',
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
