import { Award, BookOpen, Microscope } from 'lucide-react';
import logoIcon from '@/assets/logo-icon.png';

const highlights = [
  {
    icon: Award,
    title: 'Referência Nacional',
    description: 'Reconhecidos pela excelência em osteometabolismo e ortogeriatria.',
  },
  {
    icon: BookOpen,
    title: 'Base Científica',
    description: 'Protocolos fundamentados em evidências e pesquisa contínua.',
  },
  {
    icon: Microscope,
    title: 'Inovação Clínica',
    description: 'Integração de métodos avançados no cuidado ao paciente.',
  },
];

export const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="heading-section text-foreground mb-6">
              Pioneirismo em Osteometabolismo no Brasil
            </h2>
            <p className="text-body text-muted-foreground mb-10">
              Somos referência na integração entre ortopedia, fisioterapia e especialidades complementares para diagnóstico, prevenção e reabilitação de distúrbios ósseos e musculares no envelhecimento.
            </p>

            <div className="space-y-6">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative flex items-center justify-center">
            <div className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
            <div className="relative bg-card p-12 rounded-3xl shadow-card">
              <img
                src={logoIcon}
                alt="SOMOS GERO Icon"
                className="w-48 h-48 object-contain mx-auto opacity-20"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-display font-bold text-primary">10+</p>
                  <p className="text-muted-foreground mt-2">Anos de experiência</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
