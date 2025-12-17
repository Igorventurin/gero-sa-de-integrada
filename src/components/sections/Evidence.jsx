import { Play, FileText, ExternalLink } from 'lucide-react';
import './Evidence.css';

const Evidence = () => {
    const items = [
        {
            type: 'video',
            title: "Matéria na TV",
            desc: "Entrevista sobre prevenção de quedas.",
            thumbnail: "/placeholder-video.jpg" // Placeholder
        },
        {
            type: 'article',
            title: "Jornal de Londrina",
            desc: "Artigo sobre osteometabolismo em idosos.",
            thumbnail: "/placeholder-news.jpg" // Placeholder
        },
        {
            type: 'video',
            title: "Congresso Internacional",
            desc: "Apresentação de resultados clínicos.",
            thumbnail: "/placeholder-congress.jpg" // Placeholder
        },
        {
            type: 'cert',
            title: "Certificação em Ortogeriatria",
            desc: "Reconhecimento de excelência técnica.",
            thumbnail: "/placeholder-cert.jpg" // Placeholder
        }
    ];

    return (
        <section id="evidencias" className="evidence-section">
            <div className="container">
                <h2 className="section-title center">Evidências, Certificações e Mídia</h2>
                <div className="evidence-grid">
                    {items.map((item, index) => (
                        <div key={index} className="evidence-card">
                            <div className="media-placeholder">
                                {item.type === 'video' ? <Play size={48} className="play-icon" /> : <FileText size={48} className="doc-icon" />}
                            </div>
                            <div className="evidence-info">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                                <a href="#" className="evidence-link">Ver mais <ExternalLink size={14} /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Evidence;
