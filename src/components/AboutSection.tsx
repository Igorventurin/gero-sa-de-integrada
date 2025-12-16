import { Heart, Shield, Activity, Users } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Envelhecimento saudável',
    description: 'Promovemos qualidade de vida e bem-estar em todas as fases.',
  },
  {
    icon: Shield,
    title: 'Prevenção baseada em evidências',
    description: 'Protocolos científicos para prevenir fraturas e quedas.',
  },
  {
    icon: Activity,
    title: 'Funcionalidade e independência',
    description: 'Foco na autonomia e capacidade funcional do paciente.',
  },
  {
    icon: Users,
    title: 'Excelência técnica e cuidado humanizado',
    description: 'Equipe interdisciplinar com abordagem acolhedora.',
  },
];

export const AboutSection = () => {
  return (
    <section id="quem-somos" className="section-padding section-beige">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Quem somos
          </h2>
          <p className="text-body text-muted-foreground">
            A <strong className="text-foreground">SOMOS GERO</strong> é uma iniciativa interdisciplinar que conecta ortopedia, reumatologia, geriatria, endocrinologia, fisioterapia, nutrição e educação física para oferecer cuidado completo à saúde óssea, muscular e funcional da pessoa idosa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-secondary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                <pillar.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="heading-card text-foreground mb-3">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
