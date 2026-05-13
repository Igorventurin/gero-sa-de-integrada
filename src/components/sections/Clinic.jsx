import './Clinic.css';

const Clinic = () => {
    return (
        <section id="clinica" className="clinic-section">
            <div className="container clinic-container">
                <div className="clinic-content">
                    <h2 className="section-title clinic-title">Nossa Clínica</h2>
                    <p className="clinic-subtitle">
                        A Clínica Somos Gero nasceu com o propósito de oferecer um cuidado completo e humanizado, 
                        unindo diversas especialidades em um só lugar. Nosso objetivo é promover qualidade de vida, 
                        longevidade e bem-estar para todas as idades, através de um atendimento acolhedor e de excelência.
                    </p>
                    
                    <h3 className="clinic-services-title">Serviços Oferecidos</h3>
                    <ul className="clinic-services-list">
                        <li>Médico ortopedista</li>
                        <li>Médico Geriatra</li>
                        <li>Fisioterapia traumato ortopédica</li>
                        <li>Nutrição</li>
                        <li>Programa de exercício físico direcionado com profissional de educação física</li>
                        <li>Exames de imagem com ultrassom com médico especialista</li>
                    </ul>
                    
                    <a href="#contato" className="btn-clinic-cta">Agende sua Consulta</a>
                </div>
                
                <div className="clinic-map">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.6891632732943!2d-51.1741393246387!3d-23.325901854490135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb43a94144a269%3A0xb3bbcbff087b67ae!2sSomos%20Gero!5e0!3m2!1spt-BR!2sbr" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, borderRadius: '12px', minHeight: '400px' }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localização da Clínica Gero"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Clinic;
