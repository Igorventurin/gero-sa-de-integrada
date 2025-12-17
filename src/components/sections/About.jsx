import './About.css';

const About = () => {
    const pillars = [
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8C20.6863 8 18 10.6863 18 14C18 17.3137 20.6863 20 24 20C27.3137 20 30 17.3137 30 14C30 10.6863 27.3137 8 24 8Z" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M16 25C14 25 12 27 12 29V38C12 39 13 40 14 40H18V28C18 26.5 17 25 16 25Z" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 24C20 24 18 26 18 28V40H30V28C30 26 28 24 24 24Z" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M30 40H34C35 40 36 39 36 38V29C36 27 34 25 32 25C31 25 30 26.5 30 28V40Z" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Envelhecimento saudável",
            desc: "Promoção de autonomia e vitalidade."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 6L28 14L37 15.5L30.5 21.5L32 31L24 26.5L16 31L17.5 21.5L11 15.5L20 14L24 6Z" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 42C33.3888 42 41 34.3888 41 25C41 15.6112 33.3888 8 24 8C14.6112 8 7 15.6112 7 25C7 34.3888 14.6112 42 24 42Z" stroke="#d9b590" strokeWidth="2.5" />
                    <path d="M18 26H30" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M24 20V32" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            ),
            title: "Prevenção baseada em evidências",
            desc: "Protocolos validados cientificamente."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 12L16 8L12 12" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 8V20" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M28 12V24L32 28L36 24V12" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 26C12 26 10 28 10 32C10 36 12 38 16 38C20 38 22 36 22 32C22 28 20 26 20 26" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 26C28 26 26 28 26 32C26 36 28 38 32 38C36 38 38 36 38 32C38 28 36 26 36 26" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
            title: "Funcionalidade e independência",
            desc: "Foco na capacidade de realização."
        },
        {
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 38C31.1797 38 37 32.1797 37 25C37 17.8203 31.1797 12 24 12C16.8203 12 11 17.8203 11 25C11 27.5 11.7 29.8 13 31.8L10 40L18.2 37C20.2 38.3 22.5 39 25 39" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20 22L24 26L28 22" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M24 26V30" stroke="#d9b590" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="18" cy="21" r="1.5" fill="#d9b590" />
                    <circle cx="30" cy="21" r="1.5" fill="#d9b590" />
                </svg>
            ),
            title: "Cuidado humanizado",
            desc: "Excelência técnica com acolhimento."
        }
    ];

    return (
        <section id="quem-somos" className="about-section">
            <div className="about-background-overlay"></div>
            <div className="container about-container">
                <div className="about-content-wrapper">
                    <div className="about-text-content">
                        <h2 className="section-title">Quem somos</h2>
                        <p className="about-text">
                            A <strong>SOMOS GERO</strong> é uma iniciativa interdisciplinar que conecta ortopedia, reumatologia, geriatria, endocrinologia, fisioterapia, nutrição e educação física para oferecer cuidado completo à saúde óssea, muscular e funcional da pessoa idosa.
                        </p>
                        <p className="about-subtext">
                            Nossa abordagem integrada combina a expertise de múltiplas especialidades para proporcionar resultados superiores e sustentáveis na promoção da saúde e qualidade de vida.
                        </p>
                    </div>

                    <div className="pillars-grid">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="pillar-card">
                                <div className="pillar-icon">{pillar.icon}</div>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
