import { GraduationCap, Building2, UserCircle, Check } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    title: 'Para Profissionais',
    description: 'Capacitação e suporte técnico para profissionais da saúde.',
    items: [
      'Capacitações especializadas',
      'Protocolos clínicos validados',
      'Supervisão técnica',
      'Palestras e workshops',
    ],
  },
  {
    icon: Building2,
    title: 'Para Clínicas e Hospitais',
    description: 'Implementação de modelos assistenciais integrados.',
    items: [
      'Implementação de fluxos de prevenção',
      'Protocolos de osteometabolismo',
      'Consultoria interdisciplinar',
      'Projetos de pesquisa aplicada',
    ],
  },
  {
    icon: UserCircle,
    title: 'Para Pacientes',
    description: 'Cuidado personalizado e acompanhamento completo.',
    items: [
      'Avaliação individual',
      'Tratamentos e acompanhamento',
      'Educação em saúde',
      'Programas de funcionalidade',
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding section-beige">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Nossos Serviços
          </h2>
          <p className="text-body text-muted-foreground">
            Soluções especializadas para cada necessidade, do paciente ao profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="heading-card text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
