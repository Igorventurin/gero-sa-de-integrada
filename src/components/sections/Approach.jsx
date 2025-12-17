import { ClipboardList, Stethoscope, Activity, TrendingUp } from 'lucide-react';
import './Approach.css';

const Approach = () => {
    const steps = [
        {
            id: 1,
            title: "Avaliação",
            desc: "Identificação precoce de riscos e diagnóstico funcional.",
            icon: <ClipboardList size={40} />
        },
        {
            id: 2,
            title: "Intervenção",
            desc: "Protocolos personalizados e interdisciplinares.",
            icon: <Stethoscope size={40} />
        },
        {
            id: 3,
            title: "Monitoramento",
            desc: "Acompanhamento contínuo da evolução clínica.",
            icon: <Activity size={40} />
        },
        {
            id: 4,
            title: "Resultados",
            desc: "Redução de risco de quedas e melhora na autonomia.",
            icon: <TrendingUp size={40} />
        }
    ];

    return (
        <section id="abordagem" className="approach-section">
            <div className="container">
                <h2 className="section-title center">Nossa Abordagem</h2>

                <div className="timeline-container">
                    <div className="timeline-line"></div>

                    <div className="steps-grid">
                        {steps.map((step) => (
                            <div key={step.id} className="step-card">
                                <div className="step-icon-wrapper">
                                    {step.icon}
                                    <div className="step-number">{step.id}</div>
                                </div>
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Approach;
