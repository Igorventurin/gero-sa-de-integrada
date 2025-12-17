import { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Capturar UTMs da URL
    const getUTMParams = () => {
        const params = new URLSearchParams(window.location.search);
        return {
            utm_source: params.get('utm_source') || '',
            utm_medium: params.get('utm_medium') || '',
            utm_campaign: params.get('utm_campaign') || '',
            utm_term: params.get('utm_term') || '',
            utm_content: params.get('utm_content') || ''
        };
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Preparar dados para o webhook
            const utmParams = getUTMParams();
            const webhookData = {
                ...formData,
                ...utmParams,
                timestamp: new Date().toISOString(),
                source: 'website'
            };

            // Enviar webhook
            await fetch('https://n8n-webhook.7it7cw.easypanel.host/webhook/somos-gero', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(webhookData)
            });

            // Preparar mensagem do WhatsApp
            const whatsappMessage = encodeURIComponent(
                `Olá! Vim através do site Somos Gero.\n\n` +
                `Nome: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Telefone: ${formData.phone}\n` +
                `${formData.message ? `Mensagem: ${formData.message}` : ''}`
            );

            // Redirecionar para WhatsApp
            const whatsappNumber = '5543996328616'; // +55 43 9632-8616
            window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            // Mesmo com erro no webhook, redireciona para WhatsApp
            const whatsappMessage = encodeURIComponent(
                `Olá! Vim através do site Somos Gero.\n\n` +
                `Nome: ${formData.name}\n` +
                `Email: ${formData.email}\n` +
                `Telefone: ${formData.phone}`
            );
            const whatsappNumber = '5543996328616';
            window.location.href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contato" className="contact-section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title light">Vamos conversar?</h2>
                    <p className="contact-desc">
                        Pronto para transformar o cuidado com a saúde musculoesquelética? Entre em contato conosco.
                    </p>

                    <div className="contact-methods">
                        <div className="method-item">
                            <Phone size={20} />
                            <span>(43) 9632-8616</span>
                        </div>
                        <div className="method-item">
                            <Mail size={20} />
                            <span>contato@somosgero.com.br</span>
                        </div>
                        <div className="method-item">
                            <MapPin size={20} />
                            <span>Londrina - PR</span>
                        </div>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h3>Envie uma mensagem</h3>
                        <div className="form-group">
                            <label htmlFor="name">Nome *</label>
                            <input
                                type="text"
                                id="name"
                                required
                                placeholder="Seu nome"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email *</label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="seu@email.com"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Telefone *</label>
                            <input
                                type="tel"
                                id="phone"
                                required
                                placeholder="(XX) XXXXX-XXXX"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Mensagem (opcional)</label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Como podemos ajudar?"
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="btn-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar via WhatsApp'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
