import { Search, Crosshair, LineChart, Target } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Avaliação',
    description: 'Identificação precoce de riscos e diagnóstico funcional completo.',
  },
  {
    icon: Crosshair,
    title: 'Intervenção',
    description: 'Protocolos personalizados e interdisciplinares para cada paciente.',
  },
  {
    icon: LineChart,
    title: 'Monitoramento',
    description: 'Acompanhamento contínuo e ajustes baseados em evolução.',
  },
  {
    icon: Target,
    title: 'Resultados',
    description: 'Redução de risco e melhora significativa na autonomia.',
  },
];

export const ApproachSection = () => {
  return (
    <section id="abordagem" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Nossa Abordagem
          </h2>
          <p className="text-body text-muted-foreground">
            Um modelo de cuidado estruturado em quatro etapas para resultados consistentes e duradouros.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative text-center lg:text-left"
              >
                {/* Step Number */}
                <div className="relative z-10 w-12 h-12 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6 font-display font-bold text-lg shadow-soft">
                  {index + 1}
                </div>

                <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="heading-card text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
