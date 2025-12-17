import './Services.css';

const Services = () => {
    const serviceGroups = [
        {
            id: 1,
            title: 'Para Profissionais',
            image: '/para_profissionais.png',
            items: [
                'Consultoria técnica especializada',
                'Apoio em casos complexos',
                'Atualização científica contínua'
            ]
        },
        {
            id: 2,
            title: 'Para Clínicas e Hospitais',
            image: '/para_clinicas.png',
            items: [
                'Programas de cuidado multidisciplinar',
                'Protocolos assistenciais validados',
                'Treinamento de equipes'
            ]
        },
        {
            id: 3,
            title: 'Para Pacientes',
            image: '/para_pacientes.png',
            items: [
                'Avaliação funcional e diagnóstica',
                'Tratamento integrado',
                'Acompanhamento longitudinal'
            ]
        }
    ];

    return (
        <section id="servicos" className="services-section">
            <div className="container">
                <h2 className="section-title center">Nossos Serviços</h2>
                <div className="services-grid">
                    {serviceGroups.map((group) => (
                        <div key={group.id} className="service-card">
                            <div className="service-image-wrapper">
                                <img src={group.image} alt={group.title} className="service-image" />
                            </div>
                            <div className="service-content">
                                <h3>{group.title}</h3>
                                <ul className="service-list">
                                    {group.items.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
