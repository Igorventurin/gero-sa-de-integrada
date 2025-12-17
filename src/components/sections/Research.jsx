import { BookOpen } from 'lucide-react';
import './Research.css';

const Research = () => {
    const projects = [
        { year: '2023', title: 'Estudo Clínico sobre Sarcopenia', desc: 'Publicação em revista internacional.' },
        { year: '2024', title: 'Projeto de Extensão UEL', desc: 'Atendimento à comunidade idosa.' },
        { year: 'Atual', title: 'Novos Protocolos de Quedas', desc: 'Desenvolvimento de metodologia própria.' }
    ];

    return (
        <section id="pesquisa" className="research-section">
            <div className="container research-container">
                <div className="research-intro">
                    <div className="research-icon-wrapper">
                        <BookOpen size={36} />
                    </div>
                    <h2 className="section-title">Pesquisa e Produção Científica</h2>
                    <p className="research-description">
                        Nosso trabalho é sustentado por evidências e atualizado continuamente através de projetos acadêmicos, estudos clínicos e participação ativa na comunidade científica.
                    </p>
                </div>

                <div className="research-timeline">
                    {projects.map((proj, idx) => (
                        <div key={idx} className="research-item">
                            <div className="research-year">{proj.year}</div>
                            <div className="research-content">
                                <h4>{proj.title}</h4>
                                <p>{proj.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Research;
