import './Hero.css';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <img src="/hero_bg.png" alt="Idosos ativos e felizes" className="hero-img" />
                <div className="hero-overlay"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title">
                    Cuidado integrado para a saúde musculoesquelética da pessoa idosa.
                </h1>
                <p className="hero-subtitle">
                    Unimos ortopedia, fisioterapia e especialidades complementares para prevenir quedas, fraturas e perda funcional com ciência e acolhimento.
                </p>

                <div className="hero-actions">
                    <a href="#contato" className="btn btn-primary">
                        Converse com os profissionais
                        <ChevronRight size={20} />
                    </a>
                    <a href="#contato" className="btn btn-outline">
                        Peça um orçamento
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
