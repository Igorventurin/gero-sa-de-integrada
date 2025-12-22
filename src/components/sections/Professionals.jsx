import { Phone, Award } from 'lucide-react';
import './Professionals.css';

import marcioImg from '../../assets/marcio1.jpeg';
import fernandoImg from '../../assets/fernando1.jpeg';

const Professionals = () => {
    const professionals = [
        {
            id: 1,
            name: "Dr. Fernando Tadaaki Yabushita",
            role: "Médico Ortopedista",
            cref: "CRM/PR xxxxx", // Placeholder
            bio: "Médico ortopedista, graduado em Medicina e Fisioterapia, mestre em Exercício Físico na Promoção da Saúde e cirurgião especialista em quadril. Atua no cuidado integral de pessoas idosas, com foco no tratamento das disfunções do quadril, fraturas por fragilidade e doenças osteometabólicas.",
            focus: "Osteometabolismo, fraturas, prevenção",
            photo: fernandoImg
        },
        {
            id: 2,
            name: "Dr. Márcio Rogério de Oliveira",
            role: "Fisioterapeuta",
            cref: "CREFITO xxxxx", // Placeholder
            bio: "Doutor em Ciências da Reabilitação, graduado em Educação Física e Fisioterapia. Atua na avaliação e no cuidado clínico-funcional de pessoas idosas, com foco em osteometabolismo, sarcopenia, fragilidade óssea e prevenção de quedas.",
            focus: "Reabilitação, funcionalidade, sarcopenia",
            photo: marcioImg
        }
    ];

    return (
        <section id="profissionais" className="professionals-section">
            <div className="container">
                <h2 className="section-title center">Nossos Profissionais</h2>
                <div className="professionals-grid">
                    {professionals.map((prof) => (
                        <div key={prof.id} className="professional-card">
                            <div className="prof-image-col">
                                <img src={prof.photo} alt={prof.name} className="prof-photo-full" />
                            </div>
                            <div className="prof-content-col">
                                <div className="prof-header-info">
                                    <h3>{prof.name}</h3>
                                    <span className="prof-role">{prof.role}</span>
                                </div>
                                <div className="prof-body-content">
                                    <p className="prof-bio">{prof.bio}</p>
                                    <div className="prof-focus">
                                        <Award size={18} className="icon-gold" />
                                        <span><strong>Foco:</strong> {prof.focus}</span>
                                    </div>
                                    <div className="prof-contact">
                                        <a href="#contato" className="btn-schedule">Agendar Consulta</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Professionals;
