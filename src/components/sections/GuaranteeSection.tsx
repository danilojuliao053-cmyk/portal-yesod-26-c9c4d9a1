import { ShieldCheck } from 'lucide-react';

export const GuaranteeSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto opacity-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="bg-card/50 backdrop-blur-sm border border-accent/30 rounded-xl p-8 text-center space-y-6">
          <ShieldCheck className="w-16 h-16 text-accent mx-auto" />
          
          <h2 className="font-poppins text-2xl md:text-3xl font-bold">
            Garantia de <span className="text-accent">7 Dias</span>
          </h2>
          
          <p className="text-muted-foreground">
            Se nos primeiros 7 dias você sentir que o Portal Yesod não é para você, basta enviar um email que devolvemos <span className="text-foreground font-medium">100% do seu investimento</span>. Sem perguntas, sem burocracia.
          </p>

          <p className="text-sm text-muted-foreground">
            O risco é todo nosso. A transformação é toda sua.
          </p>
        </div>
      </div>
    </section>
  );
};
