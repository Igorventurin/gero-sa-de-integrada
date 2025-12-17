import { ExternalLink, Calendar, Newspaper } from 'lucide-react';
import './ContentWindow.css';

const ContentWindow = () => {
    const newsArticles = [
        {
            id: 1,
            title: 'Ambulatório do HU de Londrina trata a fragilidade óssea',
            description: 'Pacientes com mais de 50 anos recebem atendimento para prevenir novas fraturas, promovendo o bem-estar e reduzindo custos ao sistema de saúde.',
            image: '/noticia_01.png',
            source: 'Folha de Londrina',
            date: '07 de Julho de 2025',
            url: 'https://www.folhadelondrina.com.br/saude/ambulatorio-do-hu-de-londrina-trata-a-fragilidade-ossea-3274401e.html?d=1'
        },
        {
            id: 2,
            title: 'Ambulatório em Londrina desenvolve projeto para prevenir fragilidade óssea',
            description: 'A fragilidade óssea tem alta taxa de mortalidade e alto risco de recorrência de fraturas, com 86% dos pacientes tendo chance de nova quebra em até um ano.',
            image: '/noticia_02.png',
            source: 'G1 Paraná',
            date: '16 de Outubro de 2025',
            url: 'https://g1.globo.com/pr/norte-noroeste/videos-meio-dia-parana-londrina/video/ambulatorio-em-londrina-desenvolve-novo-projeto-para-prevenir-fragilidade-ossea-em-idosos-14018699.ghtml'
        },
        {
            id: 3,
            title: 'Envelhecimento Saudável, Prevenção e Cuidado',
            description: 'Evento sobre envelhecimento saudável e a importância da prevenção no cuidado com a saúde da pessoa idosa.',
            image: '/noticia_03.png',
            source: 'PGSS Cogna',
            date: '29 de Agosto de 2025',
            url: 'https://pgsscogna.com.br/envelhecimento-saudavel-prevencao-e-cuidado/'
        },
        {
            id: 4,
            title: 'Iniciativa de Prevenção em Londrina ganha Destaque Internacional',
            description: 'Projeto de prevenção de fraturas desenvolvido em Londrina é destaque em revista científica internacional.',
            image: '/noticia_04.png',
            source: 'PGSS Cogna',
            date: '28 de Agosto de 2025',
            url: 'https://pgsscogna.com.br/iniciativa-de-prevencao-em-londrina-ganha-destaque-em-revista-internacional/'
        },
        {
            id: 5,
            title: 'Fragilidade Óssea: um Desafio Silencioso que Exige Atenção',
            description: 'Entenda os desafios da fragilidade óssea e a importância do diagnóstico e tratamento precoce.',
            image: '/noticia_05.png',
            source: 'PGSS Cogna',
            date: '22 de Julho de 2025',
            url: 'https://pgsscogna.com.br/fragilidade-ossea-um-desafio-silencioso-que-exige-atencao/'
        },
        {
            id: 6,
            title: 'Ação de Promoção à Saúde para Idosos no Centro de Convivência',
            description: 'Atividades de promoção à saúde realizadas no Centro de Convivência da Zona Norte de Londrina visam melhorar a qualidade de vida dos idosos.',
            image: '/noticia_06.png',
            source: 'PGSS Cogna',
            date: '04 de Novembro de 2024',
            url: 'https://pgsscogna.com.br/acao-de-promocao-a-saude-para-idosos-no-centro-de-convivencia-da-zona-norte-de-londrina/'
        }
    ];

    return (
        <section id="conteudos" className="content-section">
            <div className="container">
                <div className="section-header">
                    <Newspaper size={40} className="section-icon" />
                    <h2 className="section-title center">Notícias e Publicações</h2>
                    <p className="section-subtitle">Fique por dentro das novidades e iniciativas na área de saúde musculoesquelética da pessoa idosa</p>
                </div>
                <div className="news-grid">
                    {newsArticles.map((article) => (
                        <article key={article.id} className="news-card">
                            <div className="news-image-wrapper">
                                <img src={article.image} alt={article.title} className="news-image" />
                                <div className="news-overlay">
                                    <span className="news-source">{article.source}</span>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="news-meta">
                                    <Calendar size={14} />
                                    <span>{article.date}</span>
                                </div>
                                <h3>{article.title}</h3>
                                <p className="news-description">{article.description}</p>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="news-link">
                                    Leia mais
                                    <ExternalLink size={16} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContentWindow;
