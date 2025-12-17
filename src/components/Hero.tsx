import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Idosos ativos caminhando em um parque"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <h1 className="heading-hero text-background mb-6 animate-fade-up">
            Cuidado integrado para a saúde musculoesquelética da pessoa idosa.
          </h1>
          
          <p className="text-lg md:text-xl text-background/90 mb-10 leading-relaxed animate-fade-up-delay-1">
            Unimos ortopedia, fisioterapia e especialidades complementares para prevenir quedas, fraturas e perda funcional com ciência e acolhimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-2">
            <a href="#contato" className="btn-hero text-center">
              Converse com os profissionais
            </a>
            <a href="#contato" className="btn-hero-outline text-center">
              Peça um orçamento
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-background/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/50 rounded-full animate-pulse-soft" />
        </div>
      </div>
    </section>
  );
};
