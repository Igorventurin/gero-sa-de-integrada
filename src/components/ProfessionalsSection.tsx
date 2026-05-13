import { Phone, Stethoscope, Activity } from 'lucide-react';

const professionals = [
  {
    name: 'Dr. Fernando Tadaaki Yabushita',
    role: 'Médico Ortopedista',
    phone: '(XX) XXXXX-XXXX',
    bio: 'Fernando Tadaaki Yabushita é médico ortopedista, graduado em Medicina e Fisioterapia, mestre em Exercício Físico na Promoção da Saúde e cirurgião especialista em quadril. Atua no cuidado integral de pessoas idosas, com foco no tratamento das disfunções do quadril, fraturas por fragilidade e doenças osteometabólicas. É cofundador do SOMOS – Serviço de Ortopedia, Metabolismo, Osteoporose e Sarcopenia e coordenador do Ambulatório de Fragilidade Óssea e da Unidade de Ortogeriatria da Universidade Estadual de Londrina (UEL).',
    focus: 'Osteometabolismo, fraturas, prevenção',
    icon: Stethoscope,
  },
  {
    name: 'Dr. Márcio Rogério de Oliveira',
    role: 'Fisioterapeuta',
    phone: '(XX) XXXXX-XXXX',
    bio: 'Márcio Rogério de Oliveira é Doutor em Ciências da Reabilitação, graduado em Educação Física e Fisioterapia. Atua na avaliação e no cuidado clínico-funcional de pessoas idosas, com foco em osteometabolismo, sarcopenia, fragilidade óssea e prevenção de quedas. É cofundador do SOMOS – Serviço de Ortopedia, Metabolismo Ósseo e Sarcopenia, onde desenvolve protocolos baseados em evidências científicas.',
    focus: 'Reabilitação, funcionalidade, sarcopenia',
    icon: Activity,
  },
  {
    name: 'Dr. Gabriel Utzumi',
    role: 'Médico Geriatra',
    phone: '(XX) XXXXX-XXXX',
    bio: 'Médico geriatra com atuação especializada em longevidade saudável e cuidado integral da pessoa idosa. Atua na prevenção e tratamento da sarcopenia, osteoporose, quedas, fraturas por fragilidade e outras doenças relacionadas ao envelhecimento, com foco na preservação da autonomia, cognição, mobilidade e qualidade de vida.',
    focus: 'Longevidade, prevenção de quedas, sarcopenia, saúde óssea e cognição',
    icon: Stethoscope,
  },
];

export const ProfessionalsSection = () => {
  return (
    <section id="profissionais" className="section-padding bg-background">
      <div className="w-[95%] max-w-[1800px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Os Profissionais
          </h2>
          <p className="text-body text-muted-foreground">
            Nossa equipe combina excelência técnica, experiência acadêmica e compromisso com o cuidado humanizado.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto">
          {professionals.map((professional, index) => (
            <div
              key={professional.name}
              className="card-professional flex flex-col h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <professional.icon className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-primary-foreground">
                    {professional.name}
                  </h3>
                  <p className="text-secondary font-medium">
                    {professional.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6 text-primary-foreground/70">
                <Phone className="w-4 h-4 text-secondary" />
                <span className="text-sm">{professional.phone}</span>
              </div>

              <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
                {professional.bio}
              </p>

              <div className="pt-4 border-t border-primary-foreground/10 mt-auto">
                <p className="text-xs uppercase tracking-wider text-secondary/80 mb-1">
                  Área de foco
                </p>
                <p className="text-primary-foreground font-medium">
                  {professional.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
