import { ArrowRight } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding section-navy">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-section text-primary-foreground mb-6">
            Pronto para transformar o cuidado com a saúde musculoesquelética?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-10">
            Entre em contato conosco e descubra como podemos ajudar você, sua clínica ou seus pacientes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="btn-hero inline-flex items-center justify-center gap-2 group"
            >
              Converse com os profissionais
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contato"
              className="btn-hero-outline inline-flex items-center justify-center gap-2"
            >
              Peça um orçamento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
