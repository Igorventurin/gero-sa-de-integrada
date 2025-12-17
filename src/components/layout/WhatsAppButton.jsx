import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/554300000000"
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
        >
            <MessageCircle size={32} />
            <span className="tooltip">Fale conosco</span>
        </a>
    );
};

export default WhatsAppButton;
