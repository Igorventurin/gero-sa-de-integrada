import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            text: "Após a cirurgia de quadril, achei que não voltaria a caminhar sem dor. A equipe da SOMOS GERO me devolveu a confiança e a autonomia.",
            author: "Maria Helena, 72 anos",
            tag: "Recuperação Funcional"
        },
        {
            id: 2,
            text: "O atendimento humanizado faz toda a diferença. Sinto que olham para mim como um todo, não apenas para o meu problema ósseo.",
            author: "João Carlos, 68 anos",
            tag: "Cuidado Humanizado"
        },
        {
            id: 3,
            text: "A prevenção foi a melhor escolha. Hoje me sinto mais segura para realizar minhas atividades diárias sem medo de cair.",
            author: "Ana Lúcia, 75 anos",
            tag: "Prevenção de Quedas"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="depoimentos" className="testimonials-section">
            <div className="container">
                <h2 className="section-title center">O que dizem nossos pacientes</h2>

                <div className="testimonial-carousel">
                    <button className="nav-btn prev" onClick={prevSlide} aria-label="Anterior"><ChevronLeft /></button>

                    <div className="testimonial-card">
                        <Quote size={40} className="quote-icon" />
                        <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
                        <div className="testimonial-author">
                            <h4>{testimonials[activeIndex].author}</h4>
                            <span>{testimonials[activeIndex].tag}</span>
                        </div>
                    </div>

                    <button className="nav-btn next" onClick={nextSlide} aria-label="Próximo"><ChevronRight /></button>
                </div>

                <div className="carousel-dots">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            className={`dot ${idx === activeIndex ? 'active' : ''}`}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Ir para depoimento ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
