import { useState, useEffect } from 'react';
import { Play, FileText, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import './Evidence.css';

// Import media images
import midia0 from '../../assets/midia0.jpeg';
import midia1 from '../../assets/midia1.jpeg';
import midia2 from '../../assets/midia2.jpeg';
import midia3 from '../../assets/midia3.jpeg';
import midia4 from '../../assets/midia4.jpeg';
import midia5 from '../../assets/midia5.jpeg';
import midia6 from '../../assets/midia6.jpeg';
import midia7 from '../../assets/midia7.jpeg';
import midia8 from '../../assets/midia8.jpeg';

const Evidence = () => {
    const images = [
        midia0, midia1, midia2, midia3, midia4, midia5, midia6, midia7, midia8
    ];

    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    const nextSlide = () => {
        setStartIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setStartIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // Handle responsiveness
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-rotate every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(interval);
    }, [startIndex]);


    // Get visible images (wrap around)
    const getVisibleImages = () => {
        const visible = [];
        for (let i = 0; i < visibleCount; i++) {
            visible.push(images[(startIndex + i) % images.length]);
        }
        return visible;
    };

    return (
        <section id="evidencias" className="evidence-section">
            <div className="container">
                <h2 className="section-title center">Eventos e Mídias</h2>

                <div className="carousel-container">
                    <button className="nav-btn prev-btn" onClick={prevSlide}>
                        <ChevronLeft size={32} />
                    </button>

                    <div className="carousel-track">
                        {getVisibleImages().map((img, index) => (
                            <div key={`${startIndex}-${index}`} className="carousel-slide fade-in">
                                <img src={img} alt={`Mídia ${index}`} className="media-image" />
                            </div>
                        ))}
                    </div>

                    <button className="nav-btn next-btn" onClick={nextSlide}>
                        <ChevronRight size={32} />
                    </button>
                </div>

                <div className="carousel-dots">
                    {images.map((_, idx) => (
                        <span
                            key={idx}
                            className={`dot ${idx === startIndex ? 'active' : ''}`}
                            onClick={() => setStartIndex(idx)}
                        ></span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Evidence;
