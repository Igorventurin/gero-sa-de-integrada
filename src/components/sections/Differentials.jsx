import { Award, Medal, Star } from 'lucide-react';
import pioneirosImg from '../../assets/pioneiros.jpeg';
import './Differentials.css';

const Differentials = () => {
    return (
        <section id="diferenciais" className="differentials-section">
            <div className="container differentials-container">
                <div className="differentials-content">
                    <div className="seal-badge">
                        <Award size={40} />
                    </div>
                    <h2 className="section-title">Pioneirismo em Osteometabolismo no Brasil</h2>
                    <p className="differentials-text">
                        Somos referência na integração entre ortopedia, fisioterapia e especialidades complementares para diagnóstico, prevenção e reabilitação de distúrbios ósseos e musculares no envelhecimento.
                    </p>

                    <div className="highlight-item-left">
                        <div className="highlight-item">
                            <Star className="highlight-icon" />
                            <div>
                                <h4>Referência Técnica</h4>
                                <p>Protocolos adotados por instituições de ensino.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="differentials-right-col">
                    <div className="differentials-image">
                        <img src={pioneirosImg} alt="Cuidado profissional com a pessoa idosa" />
                    </div>

                    <div className="highlight-item-right">
                        <div className="highlight-item">
                            <Medal className="highlight-icon" />
                            <div>
                                <h4>Excelência Clínica</h4>
                                <p>Foco em desfechos funcionais positivos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Differentials;
